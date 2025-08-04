import React, { useState } from 'react';
import './CandidateTabs.css';

const CandidateTabs = () => {
  const [activeTab, setActiveTab] = useState('assigned-jobs');

  const tabs = [
    { id: 'all-details', label: 'All Details' },
    { id: 'assigned-jobs', label: 'Assigned Jobs' },
    { id: 'related-emails', label: 'Related Emails' },
    { id: 'candidate-questions', label: 'Candidate Questions' },
    { id: 'hotlists', label: 'Hotlists' },
    { id: 'related-deals', label: 'Related Deals' },
    { id: 'contacts-pitched', label: 'Contact(s) Pitched' }
  ];

  return (
    <div className="candidate-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
  );
};

export default CandidateTabs;
