# langchain_agent.py

from langchain_ollama import OllamaLLM

# Initialize LLaMA2
llm = OllamaLLM(model="llama2")

def ask_llama(prompt: str):
    response = llm.invoke(prompt)
    return response
