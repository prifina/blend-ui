#!/bin/bash 
# git status
# git add. 
# git commit -m 

# lerna version patch --conventional-commits

STAGE=alpha
PACKAGE=$1

lerna version prepatch --conventional-commits --preid $STAGE --force-publish=@blend-ui/$PACKAGE