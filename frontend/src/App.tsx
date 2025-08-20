import React, { useState } from 'react';
import Form from './components/form';
import SuggestionCard from './components/SuggestionCard';

function App() {
  const [results, setResults] = useState([]);

  const handleFormSubmit = async (formData: any) => {
    try {
      const res = await fetch('http://127.0.0.1:8000/recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      setResults(data.recommendations || []);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">The Home Adore 🏡</h1>
      <Form onSubmit={handleFormSubmit} />

      {results.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-4">Recommendations:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((item: any, index: number) => (
              <SuggestionCard
                key={index}
                name={item.name || `Suggestion #${index + 1}`}
                description={item.description || 'No description'}
                price={item.price || 'N/A'}
                image={item.image}
                link={item.link}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
