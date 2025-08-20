import React, { useState } from 'react';

interface FormProps {
  onSubmit: (formData: any) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    category: '',
    roomType: '',
    style: '',
    colorPalette: '',
    material: '',
    size: '',
    budgetMin: '',
    budgetMax: '',
    placement: '',
    location: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const promptPreview = `Suggest a${formData.size ? ` ${formData.size},` : ''}${formData.material ? ` ${formData.material},` : ''} ${formData.style} ${formData.category} for a ${formData.roomType.toLowerCase()}${formData.location ? ` in ${formData.location}` : ''}${formData.budgetMax ? ` under ₹${formData.budgetMax}` : ''}.${formData.placement ? ` Place it ${formData.placement}.` : ''}`;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <select name="category" onChange={handleChange} className="w-full p-2 border" required>
        <option value="">Select Category</option>
        <option value="Furniture">Furniture</option>
        <option value="Lighting">Lighting</option>
        <option value="Decor">Decor</option>
        <option value="Storage">Storage</option>
        <option value="Plants">Plants</option>
        <option value="Others">Others</option>
      </select>

      <select name="roomType" onChange={handleChange} className="w-full p-2 border" required>
        <option value="">Select Room Type</option>
        <option value="Living Room">Living Room</option>
        <option value="Bedroom">Bedroom</option>
        <option value="Kitchen">Kitchen</option>
        <option value="Bathroom">Bathroom</option>
        <option value="Study">Study</option>
        <option value="Balcony">Balcony</option>
      </select>

      <select name="style" onChange={handleChange} className="w-full p-2 border">
        <option value="">Select Style</option>
        <option value="Modern">Modern</option>
        <option value="Minimalist">Minimalist</option>
        <option value="Vintage">Vintage</option>
        <option value="Scandinavian">Scandinavian</option>
        <option value="Traditional">Traditional</option>
      </select>

      <input type="text" name="colorPalette" placeholder="Color Palette (e.g., White, Navy Blue)" onChange={handleChange} className="w-full p-2 border" />

      <input type="text" name="material" placeholder="Material Preference (e.g., Wood, Glass)" onChange={handleChange} className="w-full p-2 border" />

      <input type="text" name="size" placeholder="Size / Dimensions (e.g., 6ft x 4ft)" onChange={handleChange} className="w-full p-2 border" />

      <div className="flex gap-2">
        <input type="number" name="budgetMin" placeholder="Min Budget" onChange={handleChange} className="w-1/2 p-2 border" />
        <input type="number" name="budgetMax" placeholder="Max Budget" onChange={handleChange} className="w-1/2 p-2 border" />
      </div>

      <input type="text" name="placement" placeholder="Placement Info (e.g., under the window)" onChange={handleChange} className="w-full p-2 border" />

      <input type="text" name="location" placeholder="Location (Optional)" onChange={handleChange} className="w-full p-2 border" />

      {/* 🔥 Prompt Preview */}
      <div className="bg-gray-100 p-3 rounded border">
        <strong className="text-gray-700">🧠 AI Prompt Preview:</strong>
        <p className="text-sm text-gray-600 mt-1 italic">{promptPreview}</p>
      </div>

      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Search</button>
    </form>
  );
};

export default Form;
