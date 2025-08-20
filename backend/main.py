from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or restrict to ["http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["*"],  # important for POST, GET, OPTIONS
    allow_headers=["*"],
)

@app.post("/recommend")
async def recommend(data: dict):
    # Your recommendation logic here
    return {"message": "Recommendation received", "data": data}
