import {useState} from 'react';
import { Topics } from '../data.js';
import TabButton from './TabButton.jsx';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';
export default function Examples(){
  const [selectedTopic, setSelectedTopic] =useState();
  function handleTabButtons(selectedButton){
    setSelectedTopic(selectedButton);
  
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
    return(
        <Section title="Examples" id="examples">
          <Tabs buttons={<>
            <TabButton isSelected={selectedTopic === 'components'}
              onClick={() => handleTabButtons('components')}>Component</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleTabButtons('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleTabButtons('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleTabButtons('state')}>States</TabButton>
            </>}>
          {tabContent}
          </Tabs>        
       </Section>
    );
}