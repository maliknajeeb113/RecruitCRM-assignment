import { AccessTimeRounded, AccountCircleOutlined } from '@mui/icons-material';
import AntSwitch from '../../utils/AntSwitch';
import { sampleJobs } from '../../utils/constants';
import './AssignedJobs.css';

const AssignedJobs = () => {

  return (
    <div className="assigned-jobs">
      <div className="assigned-jobs-header">
        <h3 className="section-title">Assigned Job to William Sample</h3>
        <div className="header-actions">
          <button className="assign-job-btn">Assign To Job</button>
          <button className="view-all-btn">View All Assigned Jobs</button>
        </div>
      </div>

      <div className="jobs-list">
        {sampleJobs.map((job) => (
          <div key={job.id} className="job-card">
            
            <div className="job">
             
             <div className='job-heading'>
                <div className='avatar'>M</div>
             
             <div className='job-details'>
                <div className='job-title'>{job.title}</div>
                <div className='job-company'>{job.company}</div>
             </div>
             </div>

             <div className='candidate-details'>
                <div className='candidate'><AccountCircleOutlined/>{job.candidate}</div>   
                <div className='date'><AccessTimeRounded/>{job.date}</div>                
             </div>

             <div className='job-status'>{job.status}</div>

             <button className='view-files-btn'>View Files</button>
              
            </div>
             <AntSwitch defaultChecked />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignedJobs;
