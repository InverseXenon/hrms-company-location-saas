# Company Registration Form

A React application that replicates a company registration form with tabbed interface, featuring interconnected Company and Location forms.

## Features

- **Tabbed Interface**: Navigate between Company, Locations, and Credentials tabs
- **Interconnected Forms**: Data is shared between tabs and maintained in state
- **Responsive Design**: Form layout adapts to different screen sizes
- **Modern UI**: Clean, professional design matching the provided mockups
- **Form Validation**: Required field indicators and proper form handling

## Components

- `Header`: Top navigation with logo and user info
- `CompanyRegistration`: Main container with tab navigation
- `CompanyForm`: Company details form (first tab)
- `LocationForm`: Location management with add/edit functionality (second tab)
- `CredentialsForm`: Placeholder for credentials (third tab)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or ensure you're in the project directory
2. Install dependencies:

```bash
npm install
```

### Running the Application

Start the development server:

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

### Building for Production

```bash
npm run build
```

## Form Structure

### Company Tab
- Registration details (Number, Date)
- Company information (Legal Name, Nick Name)
- Business details (Constitution, CIN, Nature)
- Tax information (PAN, TAN, GST)
- Classification (MSME, Udyam)
- Location counts and status

### Location Tab
- Dynamic location entries
- Address information (Country, State, PIN, City)
- Multiple address lines
- Status indicators
- Add new locations functionality

### Credentials Tab
- Placeholder for future credential management

## Styling

The application uses CSS modules for component-specific styling:
- Modern color scheme with blue and pink accents
- Grid-based form layouts
- Consistent spacing and typography
- Interactive elements with hover states
- Form validation styling

## Data Management

The application maintains form data in a centralized state structure:
- Company data object
- Locations array for multiple location entries
- Credentials object for future use
- Real-time updates between interconnected forms 