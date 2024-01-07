// TwitterFeed.jsx
import React from 'react';
import { Timeline } from 'react-twitter-widgets';
import { EXAMPLES } from '../../data'; // Import Twitter timeline data

const TwitterFeed = () => {
  return (
    <div>
      <h2>{EXAMPLES.state.title}</h2>
      <p>{EXAMPLES.state.description}</p>
      {/* Render the Timeline component */}
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
    </div>
  );
};

export default TwitterFeed;
