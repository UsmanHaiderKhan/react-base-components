import reactImage from '../assets/react-core-concepts.png';


const reactDescription = ['Base', 'Main', 'Core'];
function getRandomIndex(max){
  return Math.floor(Math.random() * (max+1));
}
// if we want to use header file in another components then we need to use the export keyword.
export default function Header(){
    const randomIndex = reactDescription[getRandomIndex(2)];
    return ( 
        <header>
        <img src={reactImage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
         <b> {randomIndex} </b>React concepts you will need for almost any app you are
          going to build!
        </p>
      </header> 
    )
}