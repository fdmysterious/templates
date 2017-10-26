#!/usr/bin/env python
import os

dir_path = os.path.dirname(os.path.realpath(__file__))
os.chdir( dir_path ) #Setting cwd
os.system( "npm install" )
