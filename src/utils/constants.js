
export const candidateFields = [

  { name: "currentOrganization", label: "Current Organization" },
  { name: "summary", label: "Summary" },
  
  { name: "skills", label: "Skills" },
  { name: "currentEmploymentStatus", label: "Current Employment Status" },
  
  { name: "availableFrom", label: "Available From", type: "date" },
  { name: "dateOfBirth", label: "Date of Birth", type: "date" },
  
  { name: "currentSalary", label: "Current Salary" },
  { name: "relevantExperience", label: "Relevant Experience" },
  
  { name: "noticePeriod", label: "Notice Period" },
  { name: "salaryExpectation", label: "Salary Expectation" },
  
  { name: "fullAddress", label: "Full Address" },
  { name: "status", label: "Status" },
  
  { name: "resume", label: "Resume" },
  { name: "salaryType", label: "Salary Type" },
  
  { name: "totalExperience", label: "Total Experience" },
  { name: "languageSkills", label: "Language Skills" },
];

export const defaultCandidateData = {
    currentOrganization: "World Bank Group",
    summary: "Current Organization",
    skills: "HTML, CSS, Javascript",
    currentEmploymentStatus: "Employed",
    availableFrom: "2023-07-14",
    dateOfBirth: "1993-06-15",
    currentSalary: "6000",
    relevantExperience: "7",
    noticePeriod: "90",
    salaryExpectation: "9000",
    fullAddress: "9400 Ashton Rd, Philadelphia",
    status: "Submitted to Client",
    resume: "Resume",
    salaryType: "Annual",
    totalExperience: "5",
    languageSkills: "English (Elementary proficiency)",
};

export const sampleNotes = [
  {
    id: 1,
    type: 'notes',
    content: 'Lorem dolore sit et aute cupidatat eu Lorem tempor proident consequat. In dolore mollit laborum ex cillum laboris occaecat ipsum Lorem cupidatat.',
    author: 'John Doe',
    date: 'Jul 14, 2023, 4:04 pm',
    associations: '1 Association(s)',
    category: 'Note',
    badge: 'To Do'
  },
  {
    id: 2,
    type: 'notes',
    content: 'Lorem dolore sit et aute cupidatat eu Lorem tempor proident consequat. In dolore mollit laborum ex cillum laboris occaecat ipsum Lorem cupidatat.',
    author: 'John Doe',
    date: 'Jul 12, 2023, 11:54 am',
    associations: '1 Association(s)',
    category: 'Note',
    badge: 'To Do'
  },
  {
    id: 3,
    type: 'notes',
    content: 'Lorem dolore sit et aute cupidatat eu Lorem tempor proident consequat. In dolore mollit laborum ex cillum laboris occaecat ipsum Lorem cupidatat.',
    author: 'John Doe',
    date: 'Jul 12, 2023, 11:54 am',
    associations: '1 Association(s)',
    category: 'Note',
    badge: 'To Do'
  }
];

export const sampleJobs = [
  {
    id: 1,
    title: 'Senior Product Manager',
    company: 'Recruit CRM',
    candidate: 'William Sample',
    date: 'Jul 10, 2023',
    status: 'Assigned',
  },
  {
    id: 2,
    title: 'Senior Product Manager',
    company: 'Recruit CRM',
    candidate: 'William Sample',
    date: 'Jul 10, 2023',
    status: 'Assigned',
  },
  {
    id: 3,
    title: 'Senior Product Manager',
    company: 'Recruit CRM',
    candidate: 'William Sample',
    date: 'Jul 10, 2023',
    status: 'Assigned',
  }
];
