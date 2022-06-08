#!/bin/bash 


STAGE=alpha
PACKAGE=$1

lerna publish --no-dist-tag   --force-publish @blend-ui/$PACKAGE
# lerna publish prepatch --no-dist-tag
# lerna publish --no-dist-tag --canary --preid=$STAGE  --force-publish @blend-ui/$PACKAGE
# lerna publish --canary --preid next
# uses the next semantic prerelease version with a specific prerelease identifier, e.g.
# 1.0.0 => 1.0.1-next.0
