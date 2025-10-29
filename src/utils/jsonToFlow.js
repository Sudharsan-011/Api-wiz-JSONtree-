const generateNodeColor = (nodeType) => {
  switch (nodeType) {
    case "object":
      return "bg-blue-500"; // Blue for objects
    case "array":
      return "bg-green-500"; // Green for arrays
    case "primitive":
      return "bg-yellow-500"; // Yellow for primitives
    default:
      return "bg-gray-300"; // Default gray for unknown types
  }
};

export const generateNodesAndEdges = (
  data,
  parentId = null,
  prefix = "",
  level = 0
) => {
  const nodes = [];
  const edges = [];

  if (!data || typeof data !== "object") return { nodes, edges };

  Object.entries(data).forEach(([key, value], index) => {
    const nodeId = `${prefix}${key}-${index}`;
    const nodeType = typeof value;

    // Generate node color dynamically based on node type (object, array, primitive)
    const nodeColor = generateNodeColor(nodeType);

    // Position nodes on the canvas with better spacing
    const position = {
      x: level * 300 + (index % 3) * 350 + 50, // Adjust horizontal spacing
      y: level * 250 + Math.floor(index / 3) * 200, // Adjust vertical spacing for more hierarchy
    };

    // Create node object with label and position
    nodes.push({
      id: nodeId,
      data: { label: key }, // Set label as the key
      position,
      className: `${nodeColor} hover:bg-opacity-80 transition-all duration-300 ease-in-out`, // Add hover effect and color
    });

    // Create an edge from parent node to current node (if parent exists)
    if (parentId) {
      edges.push({
        id: `e${parentId}-${nodeId}`, // Unique edge ID based on parent and node ID
        source: parentId, // Source node ID
        target: nodeId, // Target node ID
        animated: true, // Animated edges for better flow
        style: { strokeWidth: 2, stroke: "black" }, // Edge style
      });
    }

    // Recursively process child nodes (objects or arrays)
    if (nodeType === "object") {
      const { nodes: childNodes, edges: childEdges } = generateNodesAndEdges(
        value,
        nodeId,
        `${prefix}${key}-`,
        level + 1
      );
      nodes.push(...childNodes); // Add child nodes to the current level
      edges.push(...childEdges); // Add child edges
    } else if (Array.isArray(value)) {
      value.forEach((item, idx) => {
        const { nodes: childNodes, edges: childEdges } = generateNodesAndEdges(
          item,
          nodeId,
          `${prefix}${key}[${idx}]-`,
          level + 1
        );
        nodes.push(...childNodes); // Add child nodes
        edges.push(...childEdges); // Add child edges
      });
    }
  });

  return { nodes, edges };
};
