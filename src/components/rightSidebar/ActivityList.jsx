import { AccessTime, AccountCircleOutlined, StickyNote2Rounded } from '@mui/icons-material';
import { sampleNotes } from '../../utils/constants';
import './ActivityList.css';

const ActivityList = ({ activeTab }) => {

  // Filter activities based on active tab
  const filteredActivities = activeTab === 'all' 
    ? sampleNotes 
    : sampleNotes.filter(activity => activity.type === activeTab);

  return (
    <div className="activity-list">
      {filteredActivities.map((activity) => (
        <div key={activity.id} className="activity-card">
          <div className="activity-header">
            <span className="activity-category">
              <StickyNote2Rounded className='icon'/> {activity.category}
            </span>
            <span className="activity-badge">{activity.badge}</span>
          </div>
          
          <div className="activity-content">{activity.content}</div>
          
          <div className="association-tag">{activity.associations}</div>
          
          <div className="activity-footer">
            <span className="activity-author">
              <AccountCircleOutlined />
              {activity.author}
            </span>
            <span className="activity-date">
              <AccessTime />
              {activity.date}
            </span>
          </div>
        </div>
        
      ))}
    </div>
  );
};
export default ActivityList;
