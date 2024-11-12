import React,{useState} from "react";
import reactImage01 from '../src/assets/image-01.png';
import reactImage02 from '../src/assets/image-02.png';
import reactImage03 from '../src/assets/image-03.png';

function Imagebtn(){

    let array = [reactImage01,reactImage02,reactImage03]

    const [counter,setCounter] = useState(0);

    const handleImagebtn = () =>{
       setCounter(counter + 1);

       resetCounter(counter);
    }

    const resetCounter = (c) =>{
        if(c >= 2){
            setCounter(0);
        }
    }



    return (
        <div>
           <button 
           onClick={handleImagebtn}> Click to change Image!! {counter}</button>
            <div>
                <img src={array[counter]} style={{width:"200px"}} />
            </div>
        </div>
    )

}

export default Imagebtn;