import React from 'react';
import './CredentialsForm.css';
import dropdownIcon from '../assets/dd.svg';
import Status from '../assets/status.svg';

const CredentialsForm = ({ data, onChange }) => {
  const handleChange = (field, value) => {
    onChange({
      ...data,
      [field]: value
    });
  };

  return (
    <div className="credentials-form">
      <div className="form-grid">
        <div className="form-group">
          <label className="form-label">
            Location Display Name <span className="required">*</span>
          </label>
          <input
            type="text"
            className="form-input readonly-field"
            value={data.locationDisplayName || 'Plant 1, Thane, 400601, MH'}
            readOnly
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            GSTIN <span className="required">*</span>
          </label>
          <input
            type="text"
            className="form-input readonly-field"
            value={data.gstin || '27AAGCD4662E1ZP'}
            readOnly
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            Status <span className="required">*</span>
          </label>
          <div className="status-wrapper">
            <input
              type="text"
              className="form-input readonly-field with-separator"
              value={data.status || 'Active'}
              readOnly
            />
            <div className="input-separator"></div>
            <img src={Status} alt="Status" className="status-icon-svg" />
          </div>
        </div>

        <div className="form-group new-row">
          <label className="form-label">
            PF Act Applicability <span className="required">*</span>
          </label>
          <div className="select-wrapper">
            <select
              className="form-select with-separator"
              value={data.pfActApplicability || ''}
              onChange={(e) => handleChange('pfActApplicability', e.target.value)}
            >
              <option value="">DD/Yes, No</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <div className="input-separator"></div>
            <img src={dropdownIcon} alt="Dropdown" className="dropdown-icon-svg" />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">
            PF Registration No. <span className="required">*</span>
          </label>
          <input
            type="text"
            className="form-input smart-field"
            value={data.pfRegistrationNo || ''}
            onChange={(e) => handleChange('pfRegistrationNo', e.target.value)}
            placeholder="Smart Field"
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            ESI Act Applicability <span className="required">*</span>
          </label>
          <div className="select-wrapper">
            <select
              className="form-select with-separator"
              value={data.esiActApplicability || ''}
              onChange={(e) => handleChange('esiActApplicability', e.target.value)}
            >
              <option value="">DD/Yes, No</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <div className="input-separator"></div>
            <img src={dropdownIcon} alt="Dropdown" className="dropdown-icon-svg" />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">
            ESI Registration No. <span className="required">*</span>
          </label>
          <input
            type="text"
            className="form-input smart-field"
            value={data.esiRegistrationNo || ''}
            onChange={(e) => handleChange('esiRegistrationNo', e.target.value)}
            placeholder="Smart Field"
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            PT Act Applicability <span className="required">*</span>
          </label>
          <div className="select-wrapper">
            <select
              className="form-select with-separator"
              value={data.ptActApplicability || ''}
              onChange={(e) => handleChange('ptActApplicability', e.target.value)}
            >
              <option value="">DD/Yes, No</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <div className="input-separator"></div>
            <img src={dropdownIcon} alt="Dropdown" className="dropdown-icon-svg" />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">
            PT Registration No. <span className="required">*</span>
          </label>
          <input
            type="text"
            className="form-input smart-field"
            value={data.ptRegistrationNo || ''}
            onChange={(e) => handleChange('ptRegistrationNo', e.target.value)}
            placeholder="Smart Field"
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            LWF Act Applicability <span className="required">*</span>
          </label>
          <div className="select-wrapper">
            <select
              className="form-select with-separator"
              value={data.lwfActApplicability || ''}
              onChange={(e) => handleChange('lwfActApplicability', e.target.value)}
            >
              <option value="">DD/Yes, No</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <div className="input-separator"></div>
            <img src={dropdownIcon} alt="Dropdown" className="dropdown-icon-svg" />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">
            LWF Registration No. <span className="required">*</span>
          </label>
          <input
            type="text"
            className="form-input smart-field"
            value={data.lwfRegistrationNo || ''}
            onChange={(e) => handleChange('lwfRegistrationNo', e.target.value)}
            placeholder="Smart Field"
          />
        </div>
      </div>
    </div>
  );
};

export default CredentialsForm; 