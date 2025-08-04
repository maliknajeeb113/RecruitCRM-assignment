import React, { createContext, useContext, useState } from 'react';
import { defaultCandidateData } from '../utils/constants';

export const EditModeContext = createContext();

export const useEditMode = () => {
  const context = useContext(EditModeContext);

  if (!context) {
    throw new Error('useEditMode must be used within an EditModeProvider');
  }
  
  return context;
};

export const EditModeProvider = ({ children }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  
  const [candidateData, setCandidateData] = useState(defaultCandidateData);

  const value = {
    isEditMode,
    setIsEditMode,
    candidateData,
    setCandidateData
  };
  
  return (
    <EditModeContext.Provider value={value}>
      {children}
    </EditModeContext.Provider>
  );
};
