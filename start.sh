#!/bin/bash
echo "🌐 Lancement de Bio Page..."
if [[ "$OSTYPE" == "darwin"* ]]; then
  open "index.html"
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
  xdg-open "index.html"
fi