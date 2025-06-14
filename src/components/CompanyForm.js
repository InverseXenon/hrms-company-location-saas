import React from 'react';
import './CompanyForm.css';
import dropdownIcon from '../assets/dd.svg';

const CompanyForm = ({ data, onChange }) => {
  const handleChange = (field, value) => {
    onChange({
      ...data,
      [field]: value
    });
  };

  return (
    <div className="company-form">
      <div className="form-grid">
        <div className="form-group">
          <label className="form-label">
            Registration No. <span className="required">*</span>
          </label>
          <input
            type="text"
            className="form-input"
            value={data.registrationNo}
            onChange={(e) => handleChange('registrationNo', e.target.value)}
            placeholder="D0001"
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            Registration Date <span className="required">*</span>
          </label>
          <input
            type="text"
            className="form-input"
            value={data.registrationDate}
            onChange={(e) => handleChange('registrationDate', e.target.value)}
            placeholder="dd-mm-yyyy"
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            Company Legal Name <span className="required">*</span>
          </label>
          <input
            type="text"
            className="form-input"
            value={data.companyLegalName}
            onChange={(e) => handleChange('companyLegalName', e.target.value)}
            placeholder="Enter Legal Entity Name"
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            Company Nick Name
          </label>
          <input
            type="text"
            className="form-input"
            value={data.companyNickName}
            onChange={(e) => handleChange('companyNickName', e.target.value)}
            placeholder="Enter Company Nick Name"
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            Constitution of Business <span className="required">*</span>
          </label>
          <div className="select-wrapper">
            <select
              className="form-select"
              value={data.constitutionOfBusiness}
              onChange={(e) => handleChange('constitutionOfBusiness', e.target.value)}
            >
              <option value="">Select Constitution of Business</option>
              <option value="private-limited">Private Limited</option>
              <option value="public-limited">Public Limited</option>
              <option value="partnership">Partnership</option>
              <option value="proprietorship">Proprietorship</option>
            </select>
            <img src={dropdownIcon} alt="Dropdown" className="dropdown-icon-svg" />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">
            Corporate Identification No. <span className="required">*</span>
          </label>
          <input
            type="text"
            className="form-input"
            value={data.corporateIdentificationNo}
            onChange={(e) => handleChange('corporateIdentificationNo', e.target.value)}
            placeholder="Enter CIN"
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            Date of Incorporation <span className="required">*</span>
          </label>
          <input
            type="text"
            className="form-input"
            value={data.dateOfIncorporation}
            onChange={(e) => handleChange('dateOfIncorporation', e.target.value)}
            placeholder="dd-mm-yyyy"
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            Nature of Business <span className="required">*</span>
          </label>
          <div className="select-wrapper">
            <select
              className="form-select"
              value={data.natureOfBusiness}
              onChange={(e) => handleChange('natureOfBusiness', e.target.value)}
            >
              <option value="">Select Nature of Business</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="trading">Trading</option>
              <option value="service">Service</option>
              <option value="retail">Retail</option>
            </select>
            <img src={dropdownIcon} alt="Dropdown" className="dropdown-icon-svg" />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">
            Company PAN <span className="required">*</span>
          </label>
          <input
            type="text"
            className="form-input"
            value={data.companyPAN}
            onChange={(e) => handleChange('companyPAN', e.target.value)}
            placeholder="Enter CIN"
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            TAN (Tax Deduction & Collection) <span className="required">*</span>
          </label>
          <input
            type="text"
            className="form-input"
            value={data.tanTaxDeduction}
            onChange={(e) => handleChange('tanTaxDeduction', e.target.value)}
            placeholder="D0001"
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            MSME Classification
          </label>
          <div className="select-wrapper">
            <select
              className="form-select"
              value={data.msmeClassification}
              onChange={(e) => handleChange('msmeClassification', e.target.value)}
            >
              <option value="">Select MSME Classification</option>
              <option value="micro">Micro</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
            </select>
            <img src={dropdownIcon} alt="Dropdown" className="dropdown-icon-svg" />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">
            Udyam Registration No.
          </label>
          <input
            type="text"
            className="form-input"
            value={data.udyamRegistrationNo}
            onChange={(e) => handleChange('udyamRegistrationNo', e.target.value)}
            placeholder="D0001"
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            GST Classification <span className="required">*</span>
          </label>
          <div className="select-wrapper">
            <select
              className="form-select"
              value={data.gstClassification}
              onChange={(e) => handleChange('gstClassification', e.target.value)}
            >
              <option value="">Select GST Classification</option>
              <option value="regular">Regular</option>
              <option value="composition">Composition</option>
              <option value="exempt">Exempt</option>
            </select>
            <img src={dropdownIcon} alt="Dropdown" className="dropdown-icon-svg" />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">
            Total No. of Locations <span className="required">*</span>
          </label>
          <input
            type="text"
            className="form-input"
            value={data.totalNoOfLocations}
            onChange={(e) => handleChange('totalNoOfLocations', e.target.value)}
            placeholder="7"
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            No. of Locations Served <span className="required">*</span>
          </label>
          <input
            type="text"
            className="form-input"
            value={data.noOfLocationsServed}
            onChange={(e) => handleChange('noOfLocationsServed', e.target.value)}
            placeholder="5"
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            Status <span className="required">*</span>
          </label>
          <div className="status-wrapper">
            <select
              className="form-select"
              value={data.status}
              onChange={(e) => handleChange('status', e.target.value)}
            >
              <option value="">Select Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="pending">Pending</option>
            </select>
            <div className="status-star-12"></div>
            <img src={dropdownIcon} alt="Dropdown" className="dropdown-icon-svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyForm; 