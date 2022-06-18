#!/usr/bin/env python

import json
from pathlib import Path

path = Path('/home/jcli/Projects/league-guess-who/src/data')
d = []

for child in path.iterdir():
    res = {}

    content = child.read_text()
    parsed_content = json.loads(content)

    res['id'] = parsed_content['id']
    res['name'] = parsed_content['name']
    res['title'] = parsed_content['title']
    res['damageType'] = parsed_content['tacticalInfo']['damageType']
    res['roles'] = parsed_content['roles']

    d.append(res)

outpath = Path('/home/jcli/Projects/league-guess-who/src/data.json')
outpath.write_text(json.dumps(d))
