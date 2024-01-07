import { Fragment, useState } from 'react';
import TabButton from './TabButton.jsx';
import { EXAMPLES } from '../../data.js'
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

const Examples = () => {

    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
      setSelectedTopic(selectedButton);
    }
  
    console.log('APP COMPONENT EXECUTING');
  
    let tabContent = <p>Please select a topic.</p>;
  
    if (selectedTopic) {
      tabContent = (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      );
    }


return(
<Section title="Content" id="examples">
            <Tabs 
                buttons={
                <>
                    <TabButton
                    isSelected={selectedTopic === 'components'}
                    onSelect={() => handleSelect('components')}
                >
                    Content 1
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === 'jsx'}
                    onSelect={() => handleSelect('jsx')}
                >
                    Content 2
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === 'props'}
                    onSelect={() => handleSelect('props')}
                >
                    Content 3
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === 'state'}
                    onSelect={() => handleSelect('state')}
                >
                    Content 4
                </TabButton>
                </>
                }>
                    {tabContent}
            </Tabs>
            

          
        </Section>
)}

export default Examples;