"""Local review launcher. Reuses only a preview with this package identity."""
from pathlib import Path
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from functools import partial
from urllib.request import urlopen
import sys

ROOT = Path(__file__).resolve().parent
PORT = 8949
URL = f'http://localhost:{PORT}/#cell-biology/active'

def main():
    for name in ('index.html', 'rp02-lab.js', 'rp02-assessment.js', 'rp02-lab.css', 'rp02-stage4-purpose.js', 'active-transport-tutor.js', 'active-transport-assessment.js', 'active-transport.css', 'active-transport-refinement.js', 'active-transport-final.js', 'learning-stage-navigation.js'):
        if not (ROOT / name).is_file():
            raise RuntimeError(f'Missing package file: {name}. Extract the complete ZIP first.')
    identity = (ROOT / 'preview-o11-build-id.txt').read_text().strip()
    try:
        with urlopen(f'http://127.0.0.1:{PORT}/preview-o11-build-id.txt', timeout=1) as response:
            existing = response.read().decode().strip()
    except Exception:
        existing = None
    if existing == identity:
        print(f'This Active Transport preview is already running: {URL}')
        return
    if '--check' in sys.argv:
        print('Preview files validated; launcher syntax and package identity are ready.')
        return
    try:
        server = ThreadingHTTPServer(('127.0.0.1', PORT), partial(SimpleHTTPRequestHandler, directory=str(ROOT)))
    except OSError as error:
        raise RuntimeError(f'Could not start local preview on port {PORT}: {error}. Check local network permission or another preview using this port. No existing process was stopped.') from error
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
