// import serviceItemImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';
import Header  from './components/header.jsx';
import ServiceItems from './components/service-items.jsx';

function App() {
  return (
    <div>
     <Header />
      <main>
       <section id="core-concepts">
        <h2>Service Items</h2>
        <ul>


        {/* This is very short and handy */}
         <ServiceItems {...CORE_CONCEPTS[1]}></ServiceItems>
        

        {/* Another way of doing dynamically 
        <ServiceItems title={CORE_CONCEPTS[0].title} image={CORE_CONCEPTS[0].image} description={CORE_CONCEPTS[0].description}></ServiceItems>
        */}

        
          {/* One way of using props
           <ServiceItems
            image={serviceItemImg}
            title="React Core Concepts"
            description="Learn the core concepts of React that you will need for any React app you are going to build."
          /> */}
         
        </ul>
       </section>
      </main>
    </div>
  );
}

export default App;
