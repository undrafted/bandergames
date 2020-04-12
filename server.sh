#!/bin/bash
echo "Serving yourAppName!"
npm run build
serve -s build -l 3000