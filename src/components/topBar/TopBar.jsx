import { Box } from '@mui/material';
import {topBarIcons} from '../../utils/Icons'
import './TopBar.css';
import logo from '../../assets/logo.svg' // this is an svg
import { AddCircleRounded } from '@mui/icons-material';

const TopBar = () => {
  const searchIcon = topBarIcons.find(item => item.type === 'search');
  const actionIcons = topBarIcons.filter(item => item.type === 'action' && item.label !== 'Profile');
  const profileIcon = topBarIcons.find(item => item.label === 'Profile');

  return (
    <div className="topbar">
      <div className="topbar-content">
        
        <div className="search-container">
          <div className="search-icon">
            {searchIcon?.icon}
          </div>
          <input
            type="text"
            className="search-input"
            placeholder="Search Pipedrive"
          />
        </div>
        
        
        <div className="topbar-center">
          <img src={logo} alt="Company Logo" className="company-logo" />
        </div>
        
        



        <div className="topbar-right">
          <button className="action-button add">
            <AddCircleRounded/>
            </button>
          

          <div className="topbar-divider"></div>
          

          
          <Box className="topbar-actions" sx={{ display: 'flex', gap: 2 }}>
            {actionIcons.map((item, index) => (
              <button key={index} className="action-button" title={item.label}>
                {item.icon}
              </button>
            ))}
          </Box>
          
          
          <div className="profile-section">
            <div className="profile-icon">
              {profileIcon?.icon}
            </div>
            <div className="profile-info">
              <div className="profile-name">John Doe</div>
              <div className="profile-title">Senior Recruiter</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
