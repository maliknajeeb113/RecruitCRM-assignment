import './ActivityTabs.css';

const ActivityTabs = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'notes', label: 'Notes & Calls' },
    { id: 'tasks', label: 'Tasks' },
    { id: 'meetings', label: 'Meeting' },
    { id: 'files', label: 'Files' }
  ];

  return (
    <div className="right-tabs-container">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`right-tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => onTabChange(tab.id)}
          >
            <span className="right-tab-label">{tab.label}</span>
          </button>
        ))}
      </div>
  );
};

export default ActivityTabs;
