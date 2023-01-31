import { memo } from "react";
import { Position, Handle } from "reactflow";

const nodeStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '75px',
    width: '150px',
    backgroundColor: 'aliceblue',
    border: '1px black solid',
    borderRadius: '8px'
};

const labelStyles = {
    maxWidth: '125px',
    overflow: 'clip',
    textOverflow: 'ellipsis',
    textAlign: 'center',
}

export default memo(({ data }) => {
    return (
        <div style={nodeStyles}>
            <div style={labelStyles}>{data.label}</div>
            <Handle
                id="source-handle-id"
                type="source"
                position={Position.Left}
                isConnectable={false}
            />
            <Handle
                id="target-handle-id"
                type="target"
                position={Position.Right}
                isConnectable={false}
            />
        </div>
    )
});
