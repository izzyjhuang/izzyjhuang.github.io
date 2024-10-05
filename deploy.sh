#!/bin/bash
git add .
git commit -m "-"
git push --force
npm run build
npm run deploy