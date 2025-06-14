import React, { useState } from 'react';
import CompanyForm from './CompanyForm';
import LocationForm from './LocationForm';
import CredentialsForm from './CredentialsForm';
import './CompanyRegistration.css';
import saveIcon from '../assets/save.svg';
import save1Icon from '../assets/save_1.svg';
import companyIcon from '../assets/company.svg';
import locationsIcon from '../assets/locations.svg';
import credentialsIcon from '../assets/Asset 455.svg';
import separatorIcon from '../assets/separator_1.svg';

const CompanyRegistration = () => {
  const [activeTab, setActiveTab] = useState('Company');
  const [formData, setFormData] = useState({
    company: {
      registrationNo: 'D0001',
      registrationDate: '',
      companyLegalName: '',
      companyNickName: '',
      constitutionOfBusiness: '',
      corporateIdentificationNo: '',
      dateOfIncorporation: '',
      natureOfBusiness: '',
      companyPAN: '',
      tanTaxDeduction: 'D0001',
      msmeClassification: '',
      udyamRegistrationNo: 'D0001',
      gstClassification: '',
      totalNoOfLocations: '7',
      noOfLocationsServed: '5',
      status: ''
    },
    locations: [],
    credentials: {}
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleFormDataChange = (section, data) => {
    setFormData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  const renderActiveForm = () => {
    switch (activeTab) {
      case 'Company':
        return (
          <CompanyForm
            data={formData.company}
            onChange={(data) => handleFormDataChange('company', data)}
          />
        );
      case 'Locations':
        return (
          <LocationForm
            data={formData.locations}
            onChange={(data) => handleFormDataChange('locations', data)}
          />
        );
      case 'Credentials':
        return (
          <CredentialsForm
            data={formData.credentials}
            onChange={(data) => handleFormDataChange('credentials', data)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="company-registration">
      <div className="form-container">
        <div className="form-header">
          <div className="title-section">
            <h2 className="form-title">Company Registration</h2>
            <img
              src={separatorIcon}
              alt="Separator"
              className="vertical-separator"
            />
            <div className="tabs">
              <img
                src={companyIcon}
                alt="Company"
                className={`tab-svg ${activeTab === 'Company' ? 'active' : ''}`}
                onClick={() => handleTabChange('Company')}
              />
              <img
                src={locationsIcon}
                alt="Locations"
                className={`tab-svg ${activeTab === 'Locations' ? 'active' : ''}`}
                onClick={() => handleTabChange('Locations')}
              />
              <img
                src={credentialsIcon}
                alt="Credentials"
                className={`tab-svg ${activeTab === 'Credentials' ? 'active' : ''}`}
                onClick={() => handleTabChange('Credentials')}
              />
            </div>
          </div>
        </div>
        
        <div className="form-content">
          {renderActiveForm()}
        </div>

        <div className="form-actions">
          <img
            src={save1Icon}
            alt="Save 1"
            className="save-btn-svg"
            onClick={() => console.log('Save 1 clicked')}
          />
          <img
            src={saveIcon}
            alt="Save"
            className="save-btn-svg"
            onClick={() => console.log('Save clicked')}
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyRegistration;