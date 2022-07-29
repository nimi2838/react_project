import React, { useState }from 'react';

function InputTest () {
    const [ text, setText ] = useState(``);

    const onChange = (e) => {
        setText(e.target.value);
    };

    const onReset = () => {
        setText(``);
    };

    return (
        <div>
            <input onChange={onChange} value={text}></input>
            <div>
                값 : {text}
            </div>
            
        </div>
    );
};

export default InputTest;