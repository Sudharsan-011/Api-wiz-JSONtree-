import React from 'react';
import { ReactFlowProvider } from 'reactflow';
import JsonInput from './components/JsonInput.jsx';
import TreeVisualizer from './components/TreeVisualizer.jsx';
import SearchBar from './components/SearchBar.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';

const App = () => {
  return (
     <ReactFlowProvider>
      <div className="app flex min-h-screen ml-0 ">
        {/* Sidebar (30%) */}
        <div className="sidebar md:w-1/3 w-2xl bg-gray-100 overflow-y-auto items-center p-4">
      <div className="flex flex-col items-center justify-center ">
  <h1 className="text-2xl font-semibold mb-6">JSON Tree Visualizer</h1>
  <JsonInput />
</div>

         
        </div>

        {/* Visualizer (70%) */}
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
