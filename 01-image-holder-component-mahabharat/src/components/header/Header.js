//1. we will get the image (react) - > we willdo with relative path
import reactImg from '../../assets/react-core-concepts.png'

//3. declare a array which will contain dynmaic message 
const messageDescription = ['fundamental', 'important lession', 'core']

//4. we will create a function to loop through the array everytime page reloads 
    //4. Step 1 -> will take 2 parameter a)max number b)array
    //4. Step 2 -> we will create random rumber but it will generate random rumber till 2 (from max param)
    //4. Step 3 -> that function will resturn the randomize message asccesing the array index

    function rotateDescriptionmessage(max,array){
        let rotateNum = Math.floor(Math.random() * (max + 1));
        return array[rotateNum];
    }

function Headercomponent(){

    const description = rotateDescriptionmessage(2,messageDescription)
    
    return (
        <header>
            {/* 2. create image html tag and we will assign the image url to image src */}
            <img src={reactImg}></img>
            <h1>Avatars Of Mahabaratha</h1>
            <p>Bhagavad gita is the {description} of life</p>
        </header>
    )
}
export default Headercomponent;