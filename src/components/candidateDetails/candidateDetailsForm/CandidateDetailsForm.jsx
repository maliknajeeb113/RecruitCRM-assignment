import React, { useState } from "react";
import "./CandidateDetailsForm.css";
import { candidateFields } from '../../../utils/constants';
import { useEditMode } from "../../../context/EditModeContext";

const CandidateDetailsForm = () => {
    const { isEditMode, setIsEditMode, candidateData, setCandidateData } = useEditMode();
    
    const [localFormValues, setLocalFormValues] = useState(candidateData);

    const formatDate = (dateString) => {
        if (!dateString) return "—";
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const formatValueWithUnit = (fieldName, value) => {
        if (!value) return "—";
        
        switch (fieldName) {
            case 'totalExperience':
            case 'relevantExperience':
                return `${value} year${value === '1' ? '' : 's'}`;
            case 'noticePeriod':
                return `${value} day${value === '1' ? '' : 's'}`;
            case 'currentSalary':
            case 'salaryExpectation':
                return `$${parseInt(value).toLocaleString()}`;
            default:
                return value;
        }
    };

    const formatDisplayValue = (field, value) => {
        if (field.type === 'date') {
            return formatDate(value);
        }
        return formatValueWithUnit(field.name, value);
    };

    const handleLocalChange = (e) => {
        const { name, value } = e.target;
        setLocalFormValues(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setCandidateData(localFormValues);
        setIsEditMode(false);
    };

    const handleCancel = () => {
        setLocalFormValues(candidateData);
        setIsEditMode(false);
    };

    return (
        <div className="candidate-details-form">
            <form onSubmit={handleSubmit}>
                <div className="form-grid">
                    {candidateFields.map((field) => (
                        <div key={field.name} className="field-row">
                            <div className="form-cell label">
                                {field.label}
                            </div>
                            <div className="form-cell value">
                                {isEditMode ? (
                                    <input
                                        className="form-input"
                                        name={field.name}
                                        type={field.type || "text"}
                                        value={localFormValues[field.name] || ""}
                                        onChange={handleLocalChange}
                                    />
                                ) : (
                                    <span
                                        className={`form-value ${!candidateData[field.name] ? 'empty' : ''}`}
                                    >
                                        {formatDisplayValue(field, candidateData[field.name])}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                {isEditMode && (
                    <div className="form-actions">
                        <button type="submit" className="form-btn save">
                            Save
                        </button>
                        <button type="button" className="form-btn cancel" onClick={handleCancel}>
                            Cancel
                        </button>
                    </div>
                )}
            </form>
        </div>
    );
};

export default CandidateDetailsForm;
