import React, { useState } from 'react';
import { useStore } from '../store/useStore';

const JsonInput = () => {
  const [input, setInput] = useState('');
  const { setJsonData,theme } = useStore();

  const handleGenerate = () => {
    try {
      const parsed = JSON.parse(input);
      setJsonData(parsed);
    } catch (e) {
      alert('Invalid JSON');
    }
  };
  const handleReset=()=>{
    setInput("");
    setJsonData({});
  }

  return (
    <div       className={`p-6 rounded-lg shadow-lg flex-row w-full sm:max-w-xl mx-auto ${theme === 'light' ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'}`}
>
  <textarea
    value={input}
    onChange={(e) => setInput(e.target.value)}
    placeholder="Paste or type JSON data here..."
    rows="10"
     className={`w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none ${
          theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'
        }`}
/>

<div className="flex flex-col justify-items-center md:ml-15  md:flex-row gap-4">
  <button
    onClick={handleGenerate}
    className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors"
  >
    Generate Tree
  </button>
  <button
    onClick={handleReset}
    className="mt-4 px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors"
  >
    Reset
  </button>
</div>

  

</div>

  );
};

export default JsonInput;
