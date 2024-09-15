import {useState} from 'react';
import { Topics } from '../data.js';
import TabButton from './TabButton.jsx';

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
        <section id="examples">
        <h2>Examples</h2>
           <menu>
            <TabButton isSelected={selectedTopic === 'components'}
              onSelect={() => handleTabButtons('components')}>Component</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleTabButtons('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleTabButtons('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleTabButtons('state')}>States</TabButton>
           </menu>
          {tabContent}
       </section>
    );
}