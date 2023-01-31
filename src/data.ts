export type ReactFlowNode = {
    id: string;
    type: string;
    data: {
        label: string;
    };
    position: {
        x: number;
        y: number;
    };
};

export type ReactFlowEdge = {
    id: string;
    source: string;
    target: string;
};

export const nodes: ReactFlowNode[] = [
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

export const edges: ReactFlowEdge[] = [
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
        source: "2",
        target: "4"
    },
    {
        id: "edge-4",
        source: "2",
        target: "5"
    },
    {
        id: "edge-5",
        source: "3",
        target: "6"
    },
    {
        id: "edge-6",
        source: "4",
        target: "6"
    },
    {
        id: "edge-7",
        source: "5",
        target: "6"
    },
    {
        id: "edge-8",
        source: "6",
        target: "7"
    },
    {
        id: "edge-9",
        source: "7",
        target: "8"
    }
];