#!/bin/bash

# Create screenshot directory


# Capture screenshot
FILE=/mnt/storage/Pictures/Screenshot-$(date +%F_%T).png

grimblast --notify copysave area $FILE
