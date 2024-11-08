import React,{useState} from "react";


function Buttoncustomecomp(){

    const [count, setCount] = useState(0);

    const incrementIt = () =>{
      setCount(count + 1);
    }

    return (
        <button onClick={incrementIt}>Clicked ! Times {count}</button>
    )

}

export default Buttoncustomecomp;