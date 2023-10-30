import React from 'react';
import "./Tabs.css"

function Tab(props) {
  const onClick = (e) => {
    props.onClick(e.currentTarget.getAttribute("data-key"));
  };

  const tabs = props.tabs.map((tab, index) => {
    if (index === props.activeTab) {
      return (
        <div className="cus-tab active-tab" key={index} data-key={index} onClick={onClick}>
          <span className="light-heading">{tab.lightHeading}</span>
          {tab.darkHeading}
        </div>
      );
    }
    return (
      <div className="cus-tab" key={index} data-key={index} onClick={(e) => onClick(e)}>
        <span className="light-heading">{tab.lightHeading}</span>
        {tab.darkHeading}
      </div>
    );
  });

  return (
    <div className="tabs-con">
      {tabs}
    </div>
  );
}

export default Tab;
