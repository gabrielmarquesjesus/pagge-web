import React from 'react';

export default function SquareButton(props) {
    const { icon, className, type, callback } = props;

    return (
        <button 
            className={`btn ${className}`} 
            style={style.btn}
            type={type}
            onSubmit={(event)=>callback(event)}>
            {icon}
        </button>
    )
}

const style = {
    btn: {
        width: 40,
        height: 40,
        borderRadius: 10,
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
        cursor: 'pointer'
    },
    
}
