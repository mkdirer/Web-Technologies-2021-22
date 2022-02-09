#!/usr/bin/env python3

import os
from http.server import HTTPServer, CGIHTTPRequestHandler
os.chdir('.')

port = int(os.getenv('VCAP_APP_PORT'))

server_object = HTTPServer(server_address=('', port), RequestHandlerClass=CGIHTTPRequestHandler)
server_object.serve_forever()
