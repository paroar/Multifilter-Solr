from re import search
from flask import Flask, jsonify, request
from urllib.request import urlopen
import urllib.parse
import simplejson
from flask_cors import CORS
import sys
import json

app = Flask(__name__)
CORS(app)

SOLR_URL='http://solr:8983/solr/vgsales/select?'

@app.route('/', methods=["GET"])
def index():

    searchValue = json.loads(request.args.get('searchValue'))
    filters = json.loads(request.args.get('filters'))

    solr_tuples = [
        # text in search box
        ('q', "*:*"),
        # enable facets and facet.pivots
        ('facet', 'on'),
        # allow for unlimited amount of facets in results
        ('facet.limit', '-1'),
        # a facet has to have at least one 
        # product in it to be a valid facet
        ('facet.mincount', '1'),
        # sort facet counts
        ('facet.sort', 'count'),
        # regular facets
        ('facet.field', 'Platform'), 
        ('facet.field', 'Publisher'),
        ('facet.field', 'Genre'),
        # format response as JSON
        ('wt', 'json'),
        # format facets
        ('json.nl', 'arrarr'),
        ('rows', '100')
    ]

    if searchValue:
        solr_tuples.append(('fq', 'Name:'+searchValue))

    for filter in filters:
        category = filter["category"]
        tag = "{!tag="+category+"}"+category+":"+"("+" OR ".join(filter["values"])+")"
        solr_tuples.append(('fq', tag))

    encoded_solr_tuples = urllib.parse.urlencode(solr_tuples)
    complete_url = SOLR_URL + encoded_solr_tuples
    print(complete_url, file=sys.stderr)
    connection = urlopen(complete_url)
    response = simplejson.load(connection)
    
    return jsonify(response)

if __name__ == "__main__":
    app.run(host="0.0.0.0")