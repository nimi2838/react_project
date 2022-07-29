import React, { useState } from 'react';

function NameChange () {
    const [name, setName] = useState("사용자");

    const changeName = () => {
        setName("홍길동");
    };
    return (
        <div>
            <div>환영합니다 {name}님</div>
            <button onClick={changeName}>이름 변경</button>
        </div>
    );
};

export default NameChange;