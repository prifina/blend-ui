#!/bin/bash 

PACKAGE=$1

lerna publish --no-dist-tag  --force-publish @blend-ui/$PACKAGE