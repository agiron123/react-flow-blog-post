import './App.css'
import 'reactflow/dist/style.css';
import ReactFlow, { MiniMap, Controls, Background } from "reactflow";

function App() {
  const nodes = [
    {
      id: "1",
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
      data: {
        label: "classifier_1"
      },
      position: {
        x: 400,
        // y: -100, // set this back after screenshotting.
        y: 0
      }
    },
    // {
    //   id: "4",
    //   data: {
    //     label: "classifier_2"
    //   },
    //   position: {
    //     x: 400,
    //     y: 0
    //   }
    // },
    // {
    //   id: "5",
    //   data: {
    //     label: "classifier_3"
    //   },
    //   position: {
    //     x: 400,
    //     y: 100
    //   }
    // },
    // {
    //   id: "7",
    //   data: {
    //     label: "predict_ensemble"
    //   },
    //   position: {
    //     x: 1000,
    //     y: 0
    //   }
    // },
    // {
    //   id: "8",
    //   data: {
    //     label: "predict_ensemble_artifact"
    //   },
    //   position: {
    //     x: 300,
    //     y: -200
    //   }
    // },
    // {
    //   id: "9",
    //   data: {
    //     label: "save_pred_to_db"
    //   },
    //   position: {
    //     x: 300,
    //     y: -200
    //   }
    // }
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
      source: "3",
      target: "4"
    },
    {
      id: "edge-4",
      source: "4",
      target: "5"
    }
  ];

  // const edges = [
  //   {
  //     id: "edge-1",
  //     source: "1",
  //     target: "2"
  //   },
  //   {
  //     id: "edge-2",
  //     source: "2",
  //     target: "3"
  //   },
  //   {
  //     id: "edge-3",
  //     source: "2",
  //     target: "4"
  //   },
  //   {
  //     id: "edge-4",
  //     source: "2",
  //     target: "5"
  //   }
  // ];

  return (
    <div className="App">
      <div style={{ width: '1000px', height: '1000px' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
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
