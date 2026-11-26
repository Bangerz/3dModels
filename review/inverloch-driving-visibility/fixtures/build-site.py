from pathlib import Path
import tarfile,subprocess,os,sys
root=Path(__file__).resolve().parent
repo=Path(sys.argv[3]) if len(sys.argv)>3 else Path(subprocess.check_output(['git','rev-parse','--show-toplevel'],text=True).strip())
rev, name=sys.argv[1:3]
sha=subprocess.check_output(['git','-C',str(repo),'rev-parse','--verify',rev+'^{commit}'],text=True).strip()
source=root/(name+'-source'); built=root/(name+'-site')
source.mkdir(); built.mkdir()
files=['build.py','app.html','local','icons','sw.js','manifest.webmanifest','town3d']
proc=subprocess.Popen(['git','-C',str(repo),'-c','core.autocrlf=false','archive','--format=tar',sha,*files],stdout=subprocess.PIPE)
with tarfile.open(fileobj=proc.stdout,mode='r|') as stream:
    stream.extractall(source, filter='data')
if proc.wait(): raise SystemExit('git archive failed')
env={**os.environ,'GITHUB_REPOSITORY':'Ashley-Pettit/3dModels','AN_COMMIT':sha}
subprocess.run([sys.executable,str(source/'build.py'),str(built)],env=env,check=True)
print(sha,built)
