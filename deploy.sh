#!/bin/bash
git add .
git commit -m "-"
git push
npm run build
npm run deploy