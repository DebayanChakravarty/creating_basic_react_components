
function RandomIndex(max){
    return Math.floor(Math.random() * (max + 1));
}

function Dynamicparagraph(){

   const greetings = ['Good Morning !', 'Have a Good Day !', 'Welcome !'];

    return (
        <span>
            {greetings[RandomIndex(2)]}
        </span>
    )
}

export default Dynamicparagraph;