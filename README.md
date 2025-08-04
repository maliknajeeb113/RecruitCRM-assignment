# Candidate Details Page - Senior UI Developer Assignment

## Assignment Overview
Single-page candidate details interface for recruitment agency web app based on provided Figma wireframe.

**Project Brief:** Develop a candidate's detail page emphasizing HTML, CSS, and React.js to create responsive and performant user interfaces with well-organized, extensible codebase.

**Figma Design:** https://www.figma.com/file/NOT1wBWGCLfQY221Rmfpcm/Untitled?type=design&node-id=0-1&mode=design  
**Password:** RCRM$Test

## Tech Stack & Framework Choice
- **React.js with Vite** (approved alternative to Vue.js as per assignment)
- **Context API** for state management (equivalent to Pinia)
- **Custom Hooks** (`useEditMode`) equivalent to Vue composables
- **Material-UI (MUI)** for icons only (component libraries allowed per requirements)
- **Vanilla CSS** with CSS custom properties (no CSS frameworks as per requirements)
- **ESLint** for code quality

## Assignment Requirements Compliance

### ✅ UI/UX Development
- **Visually appealing interfaces** based on provided wireframe
- **Responsive design** across various devices and screen sizes  
- **Vanilla CSS implementation** with no framework dependencies
- **Enhanced user experience** through custom styling and interactions

### ✅ Front-end Development
- **Edit Details Functionality:**
  - Pencil icon triggers edit mode as required
  - Custom-designed inline edit form
  - Form submission updates page data via state management
  - Context API used instead of component variables
- **State Management:** Context API with custom hooks (React equivalent of Vue Pinia + composables)
- **Mocked API/Data:** Complete mock candidate data with realistic information
- **Professional Implementation:** Industry-standard React patterns

## Dependencies
```json
{
  "@emotion/react": "^11.14.0",
  "@emotion/styled": "^11.14.1", 
  "@mui/icons-material": "^7.2.0",
  "@mui/material": "^7.2.0",
  "react": "^17.0.0 || ^18.0.0 || ^19.0.0",
  "react-dom": "^17.0.0 || ^18.0.0 || ^19.0.0"
}
```

## Key Features

### ✅ Completed Functionality
- **Edit Details Feature:** Click pencil icon → inline edit form → Context API state management
- **Tab Navigation:** Functional tabs for different sections
- **Responsive Design:** Clean, modern interface matching design requirements
- **State Management:** Context API with custom hooks for global state
- **Data Management:** Centralized constants and mock data

### Core Components
- **Sidebar Navigation:** Fixed sidebar with icons
- **Candidate Header:** Profile information and action buttons  
- **Candidate Info:** Contact details and social links
- **Candidate Details:** Key information with edit functionality
- **Form Management:** Inline editing with save/cancel actions
- **Activity Sidebar:** Notes and activity tracking
- **Job Assignments:** Assigned jobs with status tracking

## Project Structure

```
src/
├── components/
│   ├── assignedJobs/           # Job assignments with status tracking
│   ├── candidateDetails/       # Candidate information display
│   │   └── candidateDetailsForm/ # Inline edit form component
│   ├── candidateHeader/        # Profile header with actions
│   ├── candidateInfo/          # Contact and social information
│   ├── candidateTabs/          # Tab navigation system
│   ├── rightSidebar/           # Activity and notes sidebar
│   ├── sideBar/               # Main navigation sidebar
│   └── topBar/                # Top navigation bar
├── context/
│   └── EditModeContext.jsx    # Global edit state management
├── utils/
│   ├── constants.js           # Application constants and mock data
│   └── icons.jsx             # Custom icon components
├── App.jsx                    # Main application component
├── index.css                  # Global styles and CSS variables
└── main.jsx                   # Application entry point
```

## Design System

### CSS Architecture
- **CSS Custom Properties:** Centralized color system in `index.css`
- **Consistent Colors:** All components use standardized color variables
- **Responsive Design:** Mobile-first approach with flexible layouts
- **Component Isolation:** Each component has its own CSS file

### Color Palette
```css
:root {
  /* Primary Colors */
  --primary-blue: #2570CA;
  --primary-blue-dark: #1e40af;
  --primary-blue-light: #3b82f6;
  
  /* Text Hierarchy */
  --text-dark: #1e293b;      /* Headings */
  --text-body: #495057;      /* Body text */
  --text-light: #64748b;     /* Secondary text */
  --text-muted: #868e96;     /* Muted text */
  
  /* Backgrounds */
  --bg-white: #ffffff;
  --bg-light: #f8fafc;
  --bg-section: #E9ECEF;
  
  /* Status Colors */
  --success: #31A171;
  --error: #E03131;
  --warning: #F08C00;
}
```


## Technical Implementation

### State Management
- **Context API:** `EditModeContext` for global edit state
- **Custom Hook:** `useEditMode()` for accessing edit functionality
- **Local State:** Form inputs maintain local state until save/cancel

### Form Management
- **Inline Editing:** Click edit → form fields appear in place
- **Data Formatting:** Automatic formatting for dates, currency, experience
- **Validation:** Form validation with save/cancel actions
- **Persistence:** Changes saved to context state on form submission

### Performance Optimizations
- **Component Isolation:** Each component manages its own styling
- **Efficient Re-renders:** Context changes only affect edit-related components
- **Minimal Dependencies:** Focused use of MUI for icons only

## Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
# or
npm start
```

### Build
```bash
npm run build
```

### Lint
```bash
npm run lint
```

## Key Features Implemented

### ✅ Edit Functionality
- Pencil icon triggers edit mode
- Inline form with proper input styling
- Save/Cancel functionality with Context API
- Formatted display values (dates, currency, units)

### ✅ Data Management
- Centralized constants in `utils/constants.js`
- Mock candidate data with realistic information
- Field configuration for dynamic form generation
- Sample data for notes and job assignments

### ✅ UI Components
- Material-UI icons throughout the application
- Custom CSS with design system approach
- Responsive layout with sidebar navigation
- Tab-based content organization
- Activity tracking sidebar

### ✅ Technical Excellence
- Clean React component architecture
- Context API for state management
- Custom hooks for reusable logic
- Consistent code formatting with ESLint
- CSS custom properties for maintainable styles

## Development Notes
- All colors centralized in CSS custom properties
- MUI used primarily for icons and basic components
- Vanilla CSS for all custom styling
- Context API handles edit state globally
- Form validation and data persistence implemented
- Responsive design considerations throughout

## Approach, Challenges & Solutions

### **Approach Taken**
1. **Component-First Architecture:** Built reusable, isolated components matching the wireframe structure
2. **State Management Strategy:** Implemented Context API with custom hooks for global edit state
3. **CSS Design System:** Created centralized color variables for consistency and maintainability
4. **Progressive Enhancement:** Started with basic layout, then added edit functionality and styling

### **Key Challenges Faced**
1. **Edit Mode Implementation:** 
   - **Challenge:** Creating seamless inline editing without modal overlays
   - **Solution:** Implemented conditional rendering with local state buffer and Context API persistence

2. **CSS Framework Restriction:**
   - **Challenge:** No CSS frameworks allowed, but needed professional styling
   - **Solution:** Built custom CSS design system with variables and reusable patterns

3. **Data Formatting:**
   - **Challenge:** Displaying formatted values (dates, currency, units) while editing raw values
   - **Solution:** Created formatting functions that display nicely but maintain editability

4. **State Synchronization:**
   - **Challenge:** Keeping edit form state separate from display state until save
   - **Solution:** Local state buffer pattern with save/cancel functionality

### **Technical Solutions Implemented**
- **Context API + Custom Hooks:** Clean state management without prop drilling
- **CSS Custom Properties:** Maintainable design system without frameworks
- **Conditional Rendering:** Smooth edit/view mode transitions
- **Data Transformation:** Smart formatting for dates, currency, and units
- **Component Isolation:** Each component manages its own styling and logic

## Submission Details
- **Repository:** GitHub with collaborator access for shreyask@recruitcrm.io and akshay@recruitcrm.io
- **Documentation:** Comprehensive README with approach and technical decisions
- **Code Quality:** ESLint configuration and industry best practices
- **Testing:** Manual testing of all functionality including responsive behavior