from fastapi import FastAPI
import subprocess
from fastapi.responses import FileResponse
import os

app = FastAPI()

@app.get("/run-crew")
def run_crew():
    try:
        result = subprocess.run(["crewai", "run"], capture_output=True, text=True)
        return {"status": "success", "output": result.stdout}
    except Exception as e:
        return {"status": "error", "message": str(e)}

@app.get("/load-report")
def load_report():
    file_path = "report.md"
    if os.path.exists(file_path):
        return FileResponse(file_path, media_type="text/markdown", filename="report.md")
    else:
        return {"status": "error", "message": "report.md not found"}

# Run with: uvicorn app:app --host 0.0.0.0 --port 8000