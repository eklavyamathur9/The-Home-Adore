import React from 'react';

interface SuggestionProps {
  name: string;
  description: string;
  price: string;
  image?: string;
  link?: string;
}

const SuggestionCard: React.FC<SuggestionProps> = ({
  name,
  description,
  price,
  image,
  link,
}) => {
  return (
    <div className="rounded-2xl shadow-md border bg-white p-4 max-w-md mx-auto hover:shadow-lg transition">
      {image && (
        <img src={image} alt={name} className="w-full h-48 object-cover rounded-xl mb-4" />
      )}

      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
      <p className="mt-2 font-medium text-blue-600">{price}</p>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-sm text-white bg-blue-500 px-3 py-1 rounded hover:bg-blue-600"
        >
          View Product
        </a>
      )}
    </div>
  );
};

export default SuggestionCard;
