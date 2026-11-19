#!/bin/bash
ip -4 addr show | grep -oP '(?<=inet\s)\d+(\.\d+){3}' | head -n 1
