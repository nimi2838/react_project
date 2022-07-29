import React from 'react';

const MyBtn = ( { text, isChecked } ) => {
    return (
            <button style={{
                backgroundColor: `tomato`,
                color: `white`,
                padding: `10px 20px`,
                border: 0,
                berderRadius:10,
                margin: `10px`,
                textDecoration: isChecked ? "line-through" : "none"
            }}>
                {text}
                </button>
    );
};

export default MyBtn;