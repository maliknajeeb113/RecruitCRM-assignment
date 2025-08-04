import { sidebarIcons, sidebarSecondaryIcons } from '../../utils/Icons'
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      
      {sidebarIcons.map((item, index) => (
        <button
          key={index}
          className={`sidebar-item ${item.active ? 'active' : ''}`}
          title={item.label}
        >
          <span className="sidebar-icon">{item.icon}</span>
        </button>
      ))}
      
      
      <div className="sidebar-divider"></div>
      
      
      {sidebarSecondaryIcons.map((item, index) => (
        <button
          key={`secondary-${index}`}
          className={`sidebar-item ${item.active ? 'active' : ''}`}
          title={item.label}
        >
          <span className="sidebar-icon">{item.icon}</span>
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
