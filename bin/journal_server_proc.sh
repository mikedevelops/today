#!/bin/bash

DIR="${PWD##*/}"
CMD="npm start"

if [ $DIR = "journal-server" ]; then
    echo "Skipping cd, we are already here!"
    $CMD
else
    cd "packages/journal-server" && $CMD
fi
