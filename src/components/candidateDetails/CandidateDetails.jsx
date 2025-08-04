import './CandidateDetails.css'
import { AccountCircleOutlined, HistoryRounded, MailOutlineRounded, PhoneInTalkOutlined } from '@mui/icons-material';

const CandidateDetails = () => {
    return  <div className="candidate-details-container">
            <div className="candidate-details-left">
                <div className="detail-item blue">
                    <MailOutlineRounded />
                    <span>williamsample@gmail.com</span>
                </div>
                <div className="detail-item blue">
                    <PhoneInTalkOutlined />
                    <span>+91 9021232326</span>
                </div>
            </div>

            <div className="candidate-details-right">
                <div className="detail-item">
                    <AccountCircleOutlined />
                    <span>Phyllis Yang</span>
                </div>
                <div className="detail-item">
                    <HistoryRounded />
                    <span>Jul 14, 2023, 4:04 pm</span>
                </div>
            </div>
        </div>;
};

export default CandidateDetails;