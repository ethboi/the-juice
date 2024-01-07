// Examples.jsx
import React, { Fragment, useState } from 'react';
import TabButton from './TabButton.jsx';
import { EXAMPLES } from '../../data.js'
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';
import { Timeline } from 'react-twitter-widgets'

const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        {selectedTopic === 'state' ? (
          // Render the Timeline component for Content 4
          <Fragment>
            <Timeline
              dataSource={{
                sourceType: 'profile',
                screenName: 'EthBoi_', // Replace with your Twitter username
              }}
              options={{
                height: '400',
                width: '500',
              }}
            />
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </Fragment>
        ) : (
          // Render code for other tabs
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        )}
      </div>
    );
  }

  return (
    <Section title="Content" id="examples">
      <Tabs buttons={
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
            Twitter/X
          </TabButton>
        </>
      }>
        {tabContent}
      </Tabs>
    </Section>
  );
};

export default Examples;
