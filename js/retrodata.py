#!/usr/bin/env python
# encoding: utf8

import os
import sys
import psycopg2
import psycopg2.extras
import datetime
import cgi
import cgitb
import json
import base64
import hashlib
import logging

# mode debug
#cgitb.enable()

debug = False


DBHOST = '192.168.35.13'
DBPORT = 5432
DBNAME = 'geobretagne-test'
DBUSER = 'www-data'
DBPASSWORD = 'www-data'
SALT = "vntruenthrienvtueieronvtuerinpbuzibonthi"

logging.basicConfig(level=logging.DEBUG)

if debug:
    DBHOST = '127.0.0.1'
    DBPORT = 15432
    datatest = """{
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -1.82,
                    48.25
                ]
            },
            "properties": {
                "note": "nouveau tag authentifié",
                "newtag": "Ceci est un tag:newtag.",
                "debug": "True"
            }
        }]
    }"""


# security proxy
def getSecurityProxyInfo():
    return {
        "email": os.getenv('HTTP_SEC_EMAIL', 'anonymous')
    }


def storeRetrodata(metadata, geojson):
    pgdata = {}
    pgdata['tags'] = geojson["features"][0]["properties"]
    pgdata['email'] = metadata["email"]
    if geojson["features"][0]["geometry"]:
        if geojson["features"][0]["geometry"]["type"]=="Point":
            pgdata['lon'] = geojson["features"][0]["geometry"]["coordinates"][0]
            pgdata['lat'] = geojson["features"][0]["geometry"]["coordinates"][1]

    # generate id
    signature = {"salt": SALT, "date": str(datetime.datetime.now())}
    signature.update(pgdata)
    id = base64.b64encode(hashlib.sha1(json.dumps(signature)).digest())
    pgdata["id"] = id
    pgdata["id_link"] = None
    logging.debug("id %s from %s"%(id, pgdata["email"]))
    try:
        conn = psycopg2.connect(host=DBHOST, port=DBPORT, dbname=DBNAME, user=DBUSER, password=DBPASSWORD)
        cursor = conn.cursor()
        psycopg2.extras.register_hstore(cursor, globally=False, unicode=True, oid=None, array_oid=None)
        if pgdata.has_key('lon')&pgdata.has_key('lat'):
            sql = u"""INSERT INTO "geobretagne"."retrodata"(id, id_link, datetime, email, tags, geom_point)
            VALUES (%(id)s, %(id_link)s, now(), %(email)s, %(tags)s, ST_SetSRID(ST_MakePoint(%(lon)s, %(lat)s),4326))"""
        else:
            sql = u"""INSERT INTO "geobretagne"."retrodata"(id, id_link, datetime, email, tags, geom_point)
            VALUES (%(id)s, %(id_link)s, now(), %(email)s, %(tags)s, NULL)"""
        cursor.execute(sql, pgdata)
        conn.commit()
        logging.debug("id %s : recorded"%id)
        return id
    except Exception,e:
        logging.error("id %s : %s"%(id,e))

print("Content-Type: application/json\n")
try:
    metadata =  getSecurityProxyInfo()
    if debug:
        data = json.loads(datatest)
    else:
        payload = sys.stdin.read()
        f=open("log.txt",'w')
        f.write(payload)
        f.close()
        data = json.loads(payload)
    id = storeRetrodata(metadata, data)
    print(json.dumps({"result": "success", "id": id}))
except Exception,e:
    logging.error("error: %s"%e)
    print(json.dumps('{"result":"error"}'))
