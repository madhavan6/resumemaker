import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './Final.css'

function Final (){
    const navigate = useNavigate();
    const [checkboxes, setCheckboxes] = useState({
        spellCheck: false,
        formatting: false,
        contactInfo: false,
        education: false,
        experience: false,
        skills: false,
        finished: false
    });
    
    const handleCheckboxChange = (name) => {
        setCheckboxes({
            ...checkboxes,
            [name]: !checkboxes[name]
        });
    };
    
    return(
        <div className="tips-container">
            <Sidebar activeStep={5} />
            <button onClick={() => navigate(-1)} className="back-button">
                <span>←</span>Go Back
            </button>
            
            <h1 className="final-title">Finalize Your Resume</h1>
            <p className="final-text">Review your resume and make any final adjustments</p>
            
            <div className="final-content">
                <div className="checklist-container">
                    
                    <div className="checkbox-item">
                        <input 
                            type="checkbox" 
                            id="spellCheck" 
                            checked={checkboxes.spellCheck}
                            onChange={() => handleCheckboxChange('spellCheck')}
                        />
                        <label htmlFor="spellCheck">Personal details</label>
                    </div>
                    
                    <div className="checkbox-item">
                        <input 
                            type="checkbox" 
                            id="formatting" 
                            checked={checkboxes.formatting}
                            onChange={() => handleCheckboxChange('formatting')}
                        />
                        <label htmlFor="formatting">Website,Portfolios,Profiles</label>
                    </div>
                    
                    <div className="checkbox-item">
                        <input 
                            type="checkbox" 
                            id="contactInfo" 
                            checked={checkboxes.contactInfo}
                            onChange={() => handleCheckboxChange('contactInfo')}
                        />
                        <label htmlFor="contactInfo">Certifications</label>
                    </div>
                    
                    <div className="checkbox-item">
                        <input 
                            type="checkbox" 
                            id="education" 
                            checked={checkboxes.education}
                            onChange={() => handleCheckboxChange('education')}
                        />
                        <label htmlFor="education">Language</label>
                    </div>
                    
                    <div className="checkbox-item">
                        <input 
                            type="checkbox" 
                            id="experience" 
                            checked={checkboxes.experience}
                            onChange={() => handleCheckboxChange('experience')}
                        />
                        <label htmlFor="experience">Accomplishment</label>
                    </div>
                    
                    <div className="checkbox-item">
                        <input 
                            type="checkbox" 
                            id="skills" 
                            checked={checkboxes.skills}
                            onChange={() => handleCheckboxChange('skills')}
                        />
                        <label htmlFor="skills">Additional Information</label>
                    </div>
                    
                    <div className="checkbox-item">
                        <input 
                            type="checkbox" 
                            id="finished" 
                            checked={checkboxes.finished}
                            onChange={() => handleCheckboxChange('finished')}
                        />
                        <label htmlFor="finished">Affiliation</label>
                    </div>
                </div>
                
                <div className="navigation-buttons">
                    <button 
                        className="preview-btn"
                        onClick={() => navigate('/summary')}
                    >
                        Preview
                    </button>
                    <button 
                        className="next-btn"
                        onClick={() => navigate('/download')}
                    >
                        Finalize
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Final;

