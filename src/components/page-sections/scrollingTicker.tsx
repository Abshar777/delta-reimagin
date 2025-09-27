import React from 'react';

export default function OurScrollingTicker() {
  const items = [
    { type: 'image', text: 'START TRADING NOW' },
    { type: 'text', text: 'START TRADING NOW' },
    { type: 'icon' },
    { type: 'text', text: 'FREE COURSE' },
    { type: 'icon' },
    { type: 'text', text: 'START TRADING NOW' },
    { type: 'icon' },
    { type: 'text', text: 'FREE COURSE' },
    { type: 'image', text: 'START TRADING NOW' },
    { type: 'icon' },
    { type: 'text', text: 'FREE COURSE' },
    { type: 'icon' },
    { type: 'text', text: 'START TRADING NOW' },
    { type: 'icon' },
    { type: 'text', text: 'FREE COURSE' },
  ];

  const renderItems = () =>
    items.map((item, index) => {
      if (item.type === 'image') {
        return (
          <span key={index}>
            <img src="/images/icon-sparkle.svg" alt="" />
          </span>
        );
      }
      if (item.type === 'icon') {
        return (
          <span key={index}>
            <i className="fa fa-graduation-cap"></i>
          </span>
        );
      }
      return <span key={index}>{item.text}</span>;
    });

  return (
    <div className="our-scrolling-ticker">
      {/* Scrolling Ticker Start */}
      <div className="scrolling-ticker-box">
        <div className="scrolling-content">{renderItems()}</div>
        <div className="scrolling-content">{renderItems()}</div>
      </div>
      {/* Scrolling Ticker End */}
    </div>
  );
}
