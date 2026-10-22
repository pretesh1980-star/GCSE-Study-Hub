#!/bin/zsh
cd -- "$(dirname -- "$0")" || exit 1
preview_python="/Users/preteshpatel/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3"
if [[ ! -x "$preview_python" ]]; then
  preview_python="$(command -v python3)"
fi
if [[ -z "$preview_python" ]]; then
  echo 'Python 3 was not found. Install Python 3 to run the local preview.'
  read '?Press Return to close.'
  exit 1
fi
"$preview_python" preview-o11.py "$@"
preview_status=$?
if [[ "$preview_status" != 0 ]]; then
  read '?Press Return to close.'
fi
exit "$preview_status"
