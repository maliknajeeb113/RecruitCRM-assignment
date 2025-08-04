import React from "react";
import Sidebar from "./components/sideBar/Sidebar";
import TopBar from "./components/topBar/TopBar";
import CandidateHeader from "./components/candidateHeader/CandidateHeader";
import RightSidebar from "./components/rightSidebar/RightSidebar";
import "./App.css";
import CandidateInfo from "./components/candidateInfo/CandidateInfo";
import CandidateDetails from "./components/candidateDetails/CandidateDetails";
import CandidateDetailsForm from "./components/candidateDetails/candidateDetailsForm/CandidateDetailsForm";
import CandidateTabs from "./components/candidateTabs/CandidateTabs";
import AssignedJobs from "./components/assignedJobs/AssignedJobs";
import { EditModeProvider } from "./context/EditModeContext";

function App() {
  return (
    <EditModeProvider>
      <div className="app">
        <Sidebar />

        <div className="main-content">
          <TopBar />

          <div className="content">
            <div className="content-left">
              <CandidateHeader />
              <CandidateInfo />
              <CandidateDetails />
              <CandidateDetailsForm />

              <div className="candidate-tabs-section">
                <CandidateTabs />
                <AssignedJobs />
              </div>
            </div>
            <div className="content-right">
              <RightSidebar />
            </div>
          </div>
        </div>
      </div>
    </EditModeProvider>
  );
}

export default App;
