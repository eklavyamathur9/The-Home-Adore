// src/api.ts
export const fetchRoomDesign = async (description: string) => {
  const response = await fetch("http://localhost:8000/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt: description }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch design suggestions.");
  }

  const data = await response.json();
  return data.response; 
};
