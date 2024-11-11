import React,{useState} from 'react'
import './Btncomponent.css';



function Btncomponent(){

    const [counter,setcounter] = useState(0);

   
    

   const handleClick = () =>{
    setcounter(counter+1)
   };

   const changeColor = (c) => {
        return c % 2 === 0 ? 'blue' : 'green';
    };

    return (
        <button 
        onClick={handleClick}
        style={{backgroundColor:changeColor(counter)}}>Click Me!{counter}</button>
    )
}

export default Btncomponent;