// import serviceItemImg from './assets/components.png';
import {useState} from 'react';
import { CORE_CONCEPTS, Topics } from './data.js';
import Header  from './components/header.jsx';
import ServiceItems from './components/service-items.jsx';
import TabButton from './components/TabButton.jsx';
function App() {
  const [selectedTopic, setSelectedTopic] =useState();
  function handleTabButtons(selectedButton){
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
    }
    let tabContent = <p>Please select a Topic</p>;
  if(selectedTopic){
    tabContent = (
      <div id="tab-content">
        <h3>{Topics[selectedTopic].title}</h3>
        <p>{Topics[selectedTopic].description}</p>
        <pre>
          <code>{Topics[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <div>
     <Header />
      <main>
       <section id="core-concepts">
        <h2>Service Items</h2>
        <ul>

        {/* Another way of doing dynamically  */}
        <ServiceItems title={CORE_CONCEPTS[0].title} image={CORE_CONCEPTS[0].image} description={CORE_CONCEPTS[0].description}></ServiceItems>
              
        {/* This is very short and handy */}
         <ServiceItems {...CORE_CONCEPTS[1]}></ServiceItems>
         <ServiceItems {...CORE_CONCEPTS[2]}></ServiceItems>
         <ServiceItems {...CORE_CONCEPTS[3]}></ServiceItems>
          {/* One way of using props
           <ServiceItems
            image={serviceItemImg}
            title="React Core Concepts"
            description="Learn the core concepts of React that you will need for any React app you are going to build."
          /> */}
         
        </ul>
       </section>
       <section id="examples">
        <h2>Examples</h2>
           <menu>
            <TabButton onSelect={() => handleTabButtons('components')}>Component</TabButton>
            <TabButton onSelect={() => handleTabButtons('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleTabButtons('props')}>Props</TabButton>
            <TabButton onSelect={() => handleTabButtons('state')}>States</TabButton>
           </menu>
          {tabContent}
       </section>
      </main>
    </div>
  );
}

export default App;
