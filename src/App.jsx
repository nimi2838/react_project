import React, { useState } from "react";
import Counter from "./components/Counter";
import Converter from "./components/Converter";
import MyBtn from "./components/MyBtn";
import NameChange from "./components/NameChange";
import Plusarticle from "./components/Plusarticle";
import InputTest from "./components/InputTest";


function App() {
  const [counter, setCounter ] = useState(0);
  return (
    <>
    
    <Counter counter={counter} setCounter={setCounter} />
    <Converter counter={counter} />

    <MyBtn text={"1번 버튼"} isChecked={true} />
    <MyBtn text={"2번 버튼"} isChecked={false} />
    <MyBtn text={"3번 버튼"} isChecked={true} />
    <NameChange />
    <Plusarticle />
    <InputTest />
    </>
  );

};
export default App;
