#!/bin/zsh
cd -- "${0:A:h}"
print 'Open http://127.0.0.1:8766/o12.html in your browser. Keep this window open. Control-C stops the preview.'
python3 -m http.server 8766 --bind 127.0.0.1
