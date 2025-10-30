import React, { useEffect, useState, useMemo } from 'react';
import ReactFlow, { MiniMap, Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';
import { useStore } from '../store/useStore';
import { generateNodesAndEdges } from '../utils/jsonToFlow';

const TreeVisualizer = () => {

  const { jsonData, theme } = useStore(); 
  const [nodes, setNodes] = useState([]); 
  const [edges, setEdges] = useState([]);

  // UseEffect to regenerate nodes and edges when jsonData changes
  useEffect(() => {
    if (jsonData) {
      const { nodes, edges } = generateNodesAndEdges(jsonData);
      setNodes(nodes); 
      setEdges(edges); 
    }
  }, [jsonData]); 

  // Edge style based on theme (light or dark)
  const edgeStyle = theme === 'light' 
    ? { stroke: '#000000', strokeWidth: 2 } 
    : { stroke: '#FFFFFF', strokeWidth: 2 };

  // Apply edge style to each edge
  const themedEdges = edges.map(edge => ({
    ...edge,
    style: edgeStyle, 
  }));

  return (
    <div style={{ width: '100%', height: '90vh' }}>
      <ReactFlow
        nodes={nodes} 
        edges={themedEdges}
        fitView
        minZoom={0.5}
        maxZoom={2}
        fitViewOptions={{ padding: 0.1 }}
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default TreeVisualizer;
