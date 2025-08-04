
import React from 'react';
import './CandidateInfo.css';
import { useEditMode } from '../../context/EditModeContext';

// Import custom social media icons
import FacebookIcon from '../../assets/icons/Facebook.svg';
import TwitterIcon from '../../assets/icons/Twitter.svg';
import LinkedInIcon from '../../assets/icons/LinkedIn.svg';
import GitHubIcon from '../../assets/icons/Github.svg';
import Xapp from '../../assets/icons/Xapp.svg';
import { EditRounded, MoreVert, Person, StarRounded, WhatshotRounded } from '@mui/icons-material';


const CandidateInfo = () => {
    // Clean, simple access to context via custom hook
    const { isEditMode, setIsEditMode } = useEditMode();

    const socialMedia = [
        {
            icon: <img src={FacebookIcon} alt="Facebook" className="social-icon" />,
            link: "https://www.facebook.com/william.samuels"
        },
        {
            icon: <img src={TwitterIcon} alt="Twitter" className="social-icon" />,
            link: "https://www.twitter.com/william_samuels"
        },
        {
            icon: <img src={LinkedInIcon} alt="LinkedIn" className="social-icon" />,
            link: "https://www.linkedin.com/in/william-samuels-1234567890"
        },
        {
            icon: <img src={GitHubIcon} alt="GitHub" className="social-icon" />,
            link: "https://www.github.com/william-samuels"
        },
        {
            icon: <img src={Xapp} alt="Xapp" className="social-icon" />,
            link: "https://www.abc.com/william-samuels"
        },
    ]
    return <div className="candidate-info-container">
            <div className="candidate-info-header-left">
                <div className="avatar-div">
                    <Person />
                </div>
                <div className="candidate-info-header-left-info">
                    <div id="name">William Sample
                    <div id="social-media">{socialMedia.map((item) => item.icon)}</div>
                    </div>
                    <div id="info">
                        <span>Senior Product Manager</span>
                        <span>United States</span>
                        <span>Dallas</span>
                    </div>

                </div>
            </div>
            <div className="candidate-info-header-right">
                <button className='contact-button'>
                    Contact Linked
                </button>
                <button className='button-icon'>
                    <StarRounded/>
                </button>
                <button className='button-icon'>
                    <WhatshotRounded />
                </button>
                <button className={`button-icon ${isEditMode?"active":""}`}>
                    <EditRounded onClick={() => setIsEditMode(prev => !prev)} />
                </button>
                <button className='button-icon'>
                    <MoreVert />
                </button>
            </div>
        </div>;
};

export default CandidateInfo;