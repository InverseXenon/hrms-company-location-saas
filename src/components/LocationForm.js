import React, { useState } from 'react';
import './LocationForm.css';
import dropdownIcon from '../assets/dd.svg';
import Status from '../assets/status.svg';

const LocationForm = ({ data, onChange }) => {
  const [locations, setLocations] = useState(data.length > 0 ? data : [{
    locationId: 'CLTD/01',
    locationRegistrationDate: '',
    locationDisplayName: 'CLTD/01/State',
    status: '',
    country: 'Select Country (Default India)',
    stateProvince: 'Select State',
    pinCode: '',
    cityDistrict: '',
    addressLine1: '',
    addressLine2: '',
    addressLine3: '',
    addressLine4: ''
  }]);

  const handleLocationChange = (index, field, value) => {
    const updatedLocations = [...locations];
    updatedLocations[index] = {
      ...updatedLocations[index],
      [field]: value
    };
    setLocations(updatedLocations);
    onChange(updatedLocations);
  };

  const addLocation = () => {
    const newLocation = {
      locationId: `CLTD/0${locations.length + 1}`,
      locationRegistrationDate: '',
      locationDisplayName: `CLTD/0${locations.length + 1}/State`,
      status: '',
      country: 'Select Country (Default India)',
      stateProvince: 'Select State',
      pinCode: '',
      cityDistrict: '',
      addressLine1: '',
      addressLine2: '',
      addressLine3: '',
      addressLine4: ''
    };
    const updatedLocations = [...locations, newLocation];
    setLocations(updatedLocations);
    onChange(updatedLocations);
  };

  return (
    <div className="location-form">
      {locations.map((location, index) => (
        <div key={index} className="location-section">
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">
                Location ID <span className="required">*</span>
              </label>
              <input
                type="text"
                className="form-input"
                value={location.locationId}
                onChange={(e) => handleLocationChange(index, 'locationId', e.target.value)}
                placeholder="CLTD/01"
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Location Registration Date <span className="required">*</span>
              </label>
              <input
                type="text"
                className="form-input"
                value={location.locationRegistrationDate}
                onChange={(e) => handleLocationChange(index, 'locationRegistrationDate', e.target.value)}
                placeholder="dd-mm-yyyy"
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Location Display Name <span className="required">*</span>
              </label>
              <input
                type="text"
                className="form-input"
                value={location.locationDisplayName}
                onChange={(e) => handleLocationChange(index, 'locationDisplayName', e.target.value)}
                placeholder="CLTD/01/State"
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Status <span className="required">*</span>
              </label>
              <div className="status-wrapper">
                <select
                  className="form-select"
                  value={location.status}
                  onChange={(e) => handleLocationChange(index, 'status', e.target.value)}
                >
                  <option value="">Select Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="pending">Pending</option>
                </select>
                <div className="status-star-12"></div>
                <img src={Status} alt="Status" className="status-icon-svg" />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">
                Country <span className="required">*</span>
              </label>
              <div className="select-wrapper">
                <select
                  className="form-select"
                  value={location.country}
                  onChange={(e) => handleLocationChange(index, 'country', e.target.value)}
                >
                  <option value="">Select Country (Default India)</option>
                  <option value="india">India</option>
                  <option value="usa">USA</option>
                  <option value="uk">UK</option>
                </select>
                <img src={dropdownIcon} alt="Dropdown" className="dropdown-icon-svg" />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">
                State/Province <span className="required">*</span>
              </label>
              <div className="select-wrapper">
                <select
                  className="form-select"
                  value={location.stateProvince}
                  onChange={(e) => handleLocationChange(index, 'stateProvince', e.target.value)}
                >
                  <option value="">Select State</option>
                  <option value="maharashtra">Maharashtra</option>
                  <option value="karnataka">Karnataka</option>
                  <option value="delhi">Delhi</option>
                  <option value="gujarat">Gujarat</option>
                </select>
                <img src={dropdownIcon} alt="Dropdown" className="dropdown-icon-svg" />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">
                PIN Code <span className="required">*</span>
              </label>
              <input
                type="text"
                className="form-input"
                value={location.pinCode}
                onChange={(e) => handleLocationChange(index, 'pinCode', e.target.value)}
                placeholder="6-Digit Code"
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                City/District <span className="required">*</span>
              </label>
              <input
                type="text"
                className="form-input"
                value={location.cityDistrict}
                onChange={(e) => handleLocationChange(index, 'cityDistrict', e.target.value)}
                placeholder="Enter City/District Name"
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Address Line 1 <span className="required">*</span>
              </label>
              <input
                type="text"
                className="form-input"
                value={location.addressLine1}
                onChange={(e) => handleLocationChange(index, 'addressLine1', e.target.value)}
                placeholder="Enter Address Line 1"
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Address Line 2 <span className="required">*</span>
              </label>
              <input
                type="text"
                className="form-input"
                value={location.addressLine2}
                onChange={(e) => handleLocationChange(index, 'addressLine2', e.target.value)}
                placeholder="Enter Address Line 2"
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Address Line 3 <span className="required">*</span>
              </label>
              <input
                type="text"
                className="form-input"
                value={location.addressLine3}
                onChange={(e) => handleLocationChange(index, 'addressLine3', e.target.value)}
                placeholder="Enter Address Line 3"
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Address Line 4 <span className="required">*</span>
              </label>
              <input
                type="text"
                className="form-input"
                value={location.addressLine4}
                onChange={(e) => handleLocationChange(index, 'addressLine4', e.target.value)}
                placeholder="Enter Address Line 4"
              />
            </div>
          </div>
        </div>
      ))}
      
      <button className="add-location-btn" onClick={addLocation}>
        + Location
      </button>
    </div>
  );
};

export default LocationForm; 