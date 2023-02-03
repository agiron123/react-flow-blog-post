import './App.css'
import 'reactflow/dist/style.css';
import ReactFlow, { MiniMap, Controls, Background } from "reactflow";
import CustomNode from './CustomNode';
import ELK from 'elkjs/lib/elk.bundled.js';
import { useEffect, useState } from 'react';
import { edges, nodes, ReactFlowNode } from './data';

function App() {
  const [reactFlowNodes, setReactFlowNodes] = useState<ReactFlowNode[]>(nodes);
  useEffect(() => {
    elkToReactFlowNodes();
  }, []);

  const nodeTypes = {
    customNode: CustomNode,
  };

  const reactFlowToElkNodes = () => {
    return nodes.map((node) => {
      return {
        id: node.id,
        width: 150,
        height: 75,
        // Put all nodes in the same place
        // so we can have elk position for us
        position: { x: 0, y: 0 }
      }
    })
  };

  const mappedElkNodes = reactFlowToElkNodes();

  const graph = {
    id: 'root',
    layoutOptions: {
      'elk.algorithm': 'layered',
      'elk.direction': 'RIGHT',
      'elk.alignment': 'CENTER',
      'elk.spacing.nodeNode': '80',
      'elk.layered.spacing.nodeNodeBetweenLayers': '80',
      'crossingMinimization.forceNodeModelOrder': true,
      'nodePlacement.strategy': 'NETWORK_SIMPLEX',
    },
    children: mappedElkNodes,
    edges: edges
  };

  async function getPositionedLayout() {
    try {
      const elk = new ELK();
      const positionedLayout = await elk.layout(graph);
      console.log('positionedLayout: ', positionedLayout);
      return positionedLayout;
    } catch (error) {
      alert('error getting positioned layout!')
    }
  }

  async function elkToReactFlowNodes() {
    const layout = await getPositionedLayout();
    if (!layout || !layout.children) {
      return [];
    }

    const mappedReactFlowNodes = layout.children.map((positionedNode) => {
      // Find the node in the nodes array and update it's position.
      let foundNode = nodes[0];
      for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].id === positionedNode.id) {
          foundNode = nodes[i];

          const { x, y } = positionedNode;
          foundNode.position = { x, y };

          return foundNode;
        }
      }

      return foundNode;
    });

    setReactFlowNodes(mappedReactFlowNodes);
  }

  return (
    <div className="App">
      <div style={{ width: '1000px', height: '1000px' }}>
        <ReactFlow
          nodes={reactFlowNodes}
          edges={edges}
          nodeTypes={nodeTypes}
        >
          <Background />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>
    </div>
  );
}

export default App
