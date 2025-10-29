import React, { useEffect, useState } from 'react';
import ReactFlow, { MiniMap, Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';
import { useStore } from '../store/useStore';
import { generateNodesAndEdges } from '../utils/jsonToFlow';

const TreeVisualizer = () => {
  const { jsonData } = useStore(); // Fetch the JSON data from your store
  const [nodes, setNodes] = useState([]); // Store nodes in state
  const [edges, setEdges] = useState([]); // Store edges in state

  // UseEffect to regenerate nodes and edges when jsonData changes
  useEffect(() => {
    if (jsonData) {
      const { nodes, edges } = generateNodesAndEdges(jsonData);
      setNodes(nodes); // Update nodes state
      setEdges(edges); // Update edges state
          console.log("Generated Edges:", edges);  // Debug log for edges

    }
  }, [jsonData]); // Re-run whenever jsonData changes

  return (
    <div style={{ width: '100%', height: '90vh' }}>
      <ReactFlow
        nodes={nodes} // Pass nodes to React Flow
        edges={edges} // Pass edges to React Flow
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
