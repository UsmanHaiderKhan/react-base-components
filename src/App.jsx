const reactDescription = ['Base', 'Main', 'Core'];
function getRandomIndex(max){
  return Math.floor(Math.random() * (max+1));
}
function App() {
  const randomIndex = reactDescription[getRandomIndex(2)];
  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
         <b> {randomIndex} </b>React concepts you will need for almost any app you are
          going to build!
        </p>
      </header> 
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
