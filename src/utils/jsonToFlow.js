export const generateNodesAndEdges = (
  data,
  parentId = null,
  prefix = "",
  level = 0
) => {
  const nodes = [];
  const edges = [];

  if (!data || typeof data !== "object") return { nodes, edges };

  // Iterate over the entries of the data object
  Object.entries(data).forEach(([key, value], index) => {
    const nodeId = `${prefix}${key}-${index}`;
    const nodeType = typeof value;

    // Position nodes on the canvas
    const position = {
      x: level * 300 + (index % 3) * 350 + 50,
      y: level * 250 + Math.floor(index / 3) * 150,
    };

    // Create node object with label, color, and position
    nodes.push({
      id: nodeId,
      data: { label: key },
      position,
    });

    if (parentId) {
      edges.push({
        id: `e${parentId}-${nodeId}`,
        source: parentId,
        target: nodeId,
        animated: true,
        style: { strokeWidth: 2, stroke: "black" },
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
      nodes.push(...childNodes);
      edges.push(...childEdges);
    } else if (Array.isArray(value)) {
      value.forEach((item, idx) => {
        const { nodes: childNodes, edges: childEdges } = generateNodesAndEdges(
          item,
          nodeId,
          `${prefix}${key}[${idx}]-`,
          level + 1
        );
        nodes.push(...childNodes);
        edges.push(...childEdges);
      });
    }
  });

  return { nodes, edges };
};
