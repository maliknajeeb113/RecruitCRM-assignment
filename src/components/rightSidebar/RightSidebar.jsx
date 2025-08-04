import React, { useState } from 'react';
import ActivityHeader from './ActivityHeader';
import ActivityTabs from './ActivityTabs';
import ActivityList from './ActivityList';
import './RightSidebar.css';

const RightSidebar = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="right-sidebar">
      <ActivityHeader />
      <ActivityTabs activeTab={activeTab} onTabChange={setActiveTab} />
      <ActivityList activeTab={activeTab} />
    </div>
  );
};

export default RightSidebar;
