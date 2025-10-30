import React from 'react';
import { ReactFlowProvider } from 'reactflow';
import JsonInput from './components/JsonInput.jsx';
import TreeVisualizer from './components/TreeVisualizer.jsx';
import SearchBar from './components/SearchBar.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';
import { useStore } from './store/useStore';
const App = () => {
    const { theme } = useStore();

  return (
<ReactFlowProvider>
 
<div className={`app flex flex-col md:flex-row min-h-screen ml-0 ${theme === 'light' ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'}`}>


    {/* Sidebar (Responsive) */}
    <div className={`sidebar w-full md:w-1/3 ${theme==='light'?'bg-gray-100':'bg-gray-800'}   overflow-y-auto items-center p-4`}>
      <div className="flex flex-col items-center justify-center">
<h1 className={`text-2xl font-semibold mb-6 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
  JSON Tree Visualizer
</h1>
        <JsonInput />
      </div>
    </div>

    {/* Visualizer (Responsive) */}
    <div className="visualizer flex-1 p-4">
      {/* Wrapper for Search Bar and Theme Toggle */}
      <div className="flex flex-col space-y-4 mb-6">
        <div className="flex justify-between items-center">
          <SearchBar />
          <ThemeToggle />
        </div>
        <div className="flex-1">
          <TreeVisualizer />
        </div>
      </div>
    </div>
  </div>
</ReactFlowProvider>


  );
};

export default App;
