import './App.css'
import 'reactflow/dist/style.css';
import ReactFlow, { MiniMap, Controls, Background } from "reactflow";
import CustomNode from './CustomNode';

function App() {
  const nodes = [
    {
      id: "1",
      type: "customNode",
      data: {
        label: "query_database"
      },
      position: {
        x: 0,
        y: 0
      }
    },
    {
      id: "2",
      type: "customNode",
      data: {
        label: "query_artifact"
      },
      position: {
        x: 200,
        y: 0
      }
    },
    {
      id: "3",
      type: "customNode",
      data: {
        label: "classifier_1"
      },
      position: {
        x: 400,
        y: 0
      }
    },
    {
      id: "4",
      type: "customNode",
      data: {
        label: "classifier_2"
      },
      position: {
        x: 400,
        y: -175
      }
    },
    {
      id: "5",
      type: "customNode",
      data: {
        label: "classifier_3"
      },
      position: {
        x: 400,
        y: 175
      }
    },
    {
      id: "6",
      type: "customNode",
      data: {
        label: "predict_ensemble"
      },
      position: {
        x: 600,
        y: 0
      }
    },
    {
      id: "7",
      type: "customNode",
      data: {
        label: "predict_ensemble_artifact"
      },
      position: {
        x: 800,
        y: 0
      }
    },
    {
      id: "8",
      type: "customNode",
      data: {
        label: "save_pred_to_db"
      },
      position: {
        x: 1000,
        y: 0
      }
    }
  ];

  const edges = [
    {
      id: "edge-1",
      source: "1",
      target: "2"
    },
    {
      id: "edge-2",
      source: "2",
      target: "3"
    },
    {
      id: "edge-3",
      source: "4",
      target: "2"
    },
    {
      id: "edge-4",
      source: "5",
      target: "2"
    },
    {
      id: "edge-5",
      source: "6",
      target: "5"
    },
    {
      id: "edge-6",
      source: "6",
      target: "4"
    },
    {
      id: "edge-7",
      source: "6",
      target: "3"
    },
    {
      id: "edge-7",
      source: "6",
      target: "7"
    },
    {
      id: "edge-7",
      source: "7",
      target: "8"
    },
  ];

  const nodeTypes = {
    customNode: CustomNode,
  };

  return (
    <div className="App">
      <div style={{ width: '1000px', height: '1000px' }}>
        <ReactFlow
          nodes={nodes}
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
