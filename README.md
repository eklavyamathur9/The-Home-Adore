# 🏡 The Home Adore

**The Home Adore** is an **AI-powered interior recommendation system** that helps users find the perfect furniture and décor for their rooms. By leveraging **LangChain, Ollama, FastAPI, and React**, it provides personalized product suggestions based on user preferences like room type, size, style, color palette, budget, and location.

---

## ✨ Features

* 🎨 **Personalized Recommendations** – Suggests furniture & décor based on room size, category, style, budget, and materials.
* ⚡ **LangChain + Ollama Integration** – Natural language understanding for smarter, context-aware recommendations.
* 🖥️ **Modern Frontend** – Built with React + TailwindCSS for a responsive, minimal, and mobile-friendly UI.
* 🔗 **FastAPI Backend** – Handles user queries, integrates with the AI model, and returns structured recommendations.
* 🗂️ **Query History** – Keeps track of past searches for better user experience.
* 👀 **AI Prompt Preview** – Lets users see the exact query sent to the AI.
* 🛋️ **Interactive Suggestion Cards** – Displays product details like name, description, price, image, and purchase link.

---

## 🛠️ Tech Stack

**Frontend**

* React (TypeScript)
* TailwindCSS
* shadcn/ui Components

**Backend**

* FastAPI (Python)
* LangChain + Ollama (LLM Integration)

**Other Tools**

* REST API for communication
* JSON-based structured output

---

## 📂 Project Structure

```
the-home-adore/
│── backend/
│   ├── main.py              # FastAPI backend entrypoint
│   ├── langchain_agent.py   # LangChain + Ollama integration
│   └── requirements.txt     # Python dependencies
│
│── frontend/
│   ├── src/
│   │   ├── App.tsx          # Main React app
│   │   ├── components/      # UI components (Form, SuggestionCard, etc.)
│   │   └── index.tsx        # Entry file
│   ├── package.json         # Frontend dependencies
│   └── tailwind.config.js   # Tailwind setup
│
│── README.md                # Project documentation
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/eklavyamathur9/the-home-adore.git
cd the-home-adore
```

### 2️⃣ Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

Backend runs on: `http://127.0.0.1:8000`

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on: `http://localhost:5173` (Vite default)

---

## 🚀 Usage

1. Open the frontend in your browser.
2. Fill out the form with details like **Room Type, Style, Budget, Color Palette, etc.**
3. Submit → The backend processes your request with **LangChain + Ollama**.
4. Get personalized product suggestions displayed as interactive cards.

---

## 📸 Screenshots (Optional – Add later)

*(You can add UI screenshots of the form and recommendation cards here)*

---

## 📌 Future Enhancements

* 🛒 Integration with **real furniture APIs** (IKEA, Pepperfry, Amazon, etc.)
* 🧠 More advanced **LLM fine-tuning** for specific interior design queries
* 🔍 Advanced filters & sorting (by price, rating, material, etc.)
* 🌐 Multi-language support

---

## 🤝 Contributing

Contributions are welcome! Fork the repo, create a feature branch, and submit a PR.

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Eklavya Mathur**
🚀 Passionate Cybersecurity & AI Developer | [GitHub](https://github.com/eklavyamathur9)

