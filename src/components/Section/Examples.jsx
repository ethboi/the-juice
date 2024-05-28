// Examples.jsx
import React, { Fragment, useState } from 'react';
import TabButton from './TabButton.jsx';
import { EXAMPLES } from '../../data.js';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';
import { Timeline } from 'react-twitter-widgets';
import Discord from './Discord.jsx'; // Import the Discord component

const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState('discord');

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = '';

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        {selectedTopic === 'twitter' && (
          // Render the Twitter feed for Content 2
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
            <p>And</p>
            <Timeline
              dataSource={{
                sourceType: 'profile',
                screenName: 'Mocha_byte', // Replace with your Twitter username
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
        )}
        {selectedTopic === 'discord' && (
          // Render the Discord component for Content 1
          <Fragment>
            <Discord />
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </Fragment>
        )}
        {(selectedTopic === 'props' || selectedTopic === 'state') && (
          // Render code for other tabs
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        )}
      </div>
    );
  }

  return (
    <Section title="" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === 'discord'}
              onSelect={() => handleSelect('discord')}
            >
              Discord Live
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'twitter'}
              onSelect={() => handleSelect('twitter')}
            >
              X/Twitter
            </TabButton>
            
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
};

export default Examples;
