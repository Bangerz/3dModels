"""Build an isolated Pages copy with the deployed script on Windows."""
import os
import sys
from pathlib import Path

source, dest = map(Path, sys.argv[1:3])
os.environ['GITHUB_REPOSITORY'] = 'Ashley-Pettit/3dModels'
os.environ['AN_COMMIT'] = sys.argv[3]
script = source / 'build.py'
# Windows strftime uses %#d where GitHub's Linux runner uses %-d.
code = script.read_text(encoding='utf-8')
if os.name == 'nt':
    code = code.replace('strftime("%-d ', 'strftime("%#d ')
sys.argv = [str(script), str(dest)]
exec(compile(code, str(script), 'exec'), {'__name__': '__main__', '__file__': str(script)})
