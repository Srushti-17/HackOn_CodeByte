from fastapi import FastAPI
import subprocess

app = FastAPI()

@app.get("/run-crew")
def run_crew():
    try:
        result = subprocess.run(["crewai", "run"], capture_output=True, text=True)
        return {"status": "success", "output": result.stdout}
    except Exception as e:
        return {"status": "error", "message": str(e)}

# Run with: uvicorn app:app --host 0.0.0.0 --port 8000