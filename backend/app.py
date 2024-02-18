#!/usr/bin/env python3.8
# -*- coding: utf-8 -*-
import os
import boto3

from flask import Flask
app = Flask(__name__)
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return 'You want path: %s' % path
if __name__ == '__main__':
    app.run()