import { ChevronRight } from '@mui/icons-material';
import './CandidateHeader.css';

const CandidateHeader = () => {
  return (
    <div className="candidate-header">
      <div className="candidate-header-content">
        
        <div className="breadcrumb">
          <span className="breadcrumb-item current">Candidates</span>
          <ChevronRight className="breadcrumb-separator" />
          <span className="breadcrumb-item">Robert Hardy</span>
          <span className="breadcrumb-id">ID - 231</span>
        </div>

        
        <div className="header-actions">
          <button className="action-btn">
            Request Profile Update
          </button>
          <button className="action-btn" title="Previous">
            Previous
          </button>
          <button className="action-btn" title="Next">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CandidateHeader;
