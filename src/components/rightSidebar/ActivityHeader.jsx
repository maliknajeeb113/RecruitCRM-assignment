import { StickyNote2Rounded, PhoneInTalkRounded, CheckCircleRounded, InsertInvitationRounded } from '@mui/icons-material';
import './ActivityHeader.css';

const ActivityHeader = () => {
  return (
    <div className="activity-header-icons">
        <button className="activity-action-btn" title="sticky">
            <StickyNote2Rounded className='action-icon'/>
          </button>
          <button className="activity-action-btn" title="call">
            <PhoneInTalkRounded className='action-icon'/>
          </button>
          <button className="activity-action-btn" title="check">
            <CheckCircleRounded className='action-icon'/>
          </button>
          <button className="activity-action-btn" title="calendar">
            <InsertInvitationRounded className='action-icon'/>
          </button>
    </div>
  );
};

export default ActivityHeader;
