"""Local review launcher. Reuses only a preview with this package identity."""
from pathlib import Path
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from functools import partial
from urllib.request import urlopen
import sys

ROOT = Path(__file__).resolve().parent
PORT = 8933
URL = f'http://127.0.0.1:{PORT}/#cell-biology/osmosis'

def main():
    for name in ('index.html', 'osmosis-feedback.js', 'osmosis-feedback.css'):
        if not (ROOT / name).is_file():
            raise RuntimeError(f'Missing package file: {name}. Extract the complete ZIP first.')
    identity = (ROOT / 'preview-build-id.txt').read_text().strip()
    try:
        with urlopen(f'http://127.0.0.1:{PORT}/preview-build-id.txt', timeout=1) as response:
            existing = response.read().decode().strip()
    except Exception:
        existing = None
    if existing == identity:
        print(f'This feedback preview is already running: {URL}')
        return
    if '--check' in sys.argv:
        print('Preview files validated; launcher syntax and package identity are ready.')
        return
    try:
        server = ThreadingHTTPServer(('127.0.0.1', PORT), partial(SimpleHTTPRequestHandler, directory=str(ROOT)))
    except OSError as error:
        raise RuntimeError(f'Port {PORT} is in use by another preview. Close its preview terminal, then try again. No existing process was stopped.') from error
    print(f'Open {URL}', flush=True)
    print('Keep this window open. Press Control+C to stop this preview.', flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()

if __name__ == '__main__':
    main()
