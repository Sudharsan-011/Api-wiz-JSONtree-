import React, { useState } from 'react';
import { useStore } from '../store/useStore';

const JsonInput = () => {
  const [input, setInput] = useState('');
  const { setJsonData } = useStore();

  const handleGenerate = () => {
    try {
      const parsed = JSON.parse(input);
      setJsonData(parsed);
    } catch (e) {
      alert('Invalid JSON');
    }
  };

  return (
    <div className="json-input p-6 bg-gray-100 rounded-lg shadow-lg max-w-xl mx-auto">
  <textarea
    value={input}
    onChange={(e) => setInput(e.target.value)}
    placeholder="Paste or type JSON data here..."
    rows="10"
    className="w-full p-4 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
  />
  <button
    onClick={handleGenerate}
    className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors"
  >
    Generate Tree
  </button>
</div>

  );
};

export default JsonInput;
