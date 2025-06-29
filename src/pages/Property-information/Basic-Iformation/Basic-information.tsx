import React, { useEffect, useState } from 'react';
import './basic-information.css';
import { getBasicInfoById, updateBasicInfo } from './basicInfoService';
import { BasicInfo } from './Inventory.model';
import { useParams } from 'react-router-dom';

const BasicInformation = () => {
  const years = [2022, 2023, 2024, 2025];
  const [formData, setFormData] = useState<BasicInfo | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const id = 1;

  useEffect(() => {
    if (id) {
      getBasicInfoById(Number(id))
        .then((res: { data: BasicInfo }) => setFormData(res.data))
        .catch((err) => console.error('Error fetching data:', err));
    }
  }, [id]);

  if (!formData) return <div>Loading...</div>;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    let newValue: string | boolean = value;

    if (type === 'checkbox') {
      newValue = (e.target as HTMLInputElement).checked;
    }

    setFormData(prev => prev ? { ...prev, [name]: newValue } : prev);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData?.id) {
      alert('Missing ID to update.');
      return;
    }

    setIsSubmitting(true);
    try {
      await updateBasicInfo(formData.id, formData);
      alert('Successfully updated!');
    } catch (err) {
      console.error('Update failed:', err);
      alert('Update failed!');
    }
    setIsSubmitting(false);
  };

  return (
    <div className="container">
      <h2 className="title">Basic Information</h2>

      <div className="tabs">
        <button className="active">Property Details</button>
        <button disabled>Property Contact Details</button>
        <button disabled>How to Reach</button>
      </div>

      <form className="form-grid" onSubmit={handleSubmit}>
        <div>
          <label>Property Name *</label>
          <input name="propertyName" type="text" value={formData.propertyName || ''} onChange={handleChange} />
        </div>

        <div>
          <label>Display Name *</label>
          <input name="displayName" type="text" value={formData.displayName || ''} onChange={handleChange} />
        </div>

        <div className="full-width">
          <label>Property Description (In 100–500 words)</label>
          <textarea name="description" value={formData.description || ''} onChange={handleChange} />
        </div>

        <div>
          <label>Star Rating *</label>
          <input name="starRating" type="number" value={formData.starRating || ''} onChange={handleChange} />
        </div>

        <div>
          <label>Property Type</label>
          <input name="propertyType" type="text" value={formData.propertyType || ''} onChange={handleChange} />
        </div>

        <div>
          <label>Year of Construction *</label>
          <input name="yearOfConstruction" type="text" value={formData.yearOfConstruction || ''} onChange={handleChange} />
        </div>

        <div>
          <label>Hotel Chain</label>
          <input name="hotelChain" type="text" value={formData.hotelChain || ''} onChange={handleChange} />
        </div>

        <div>
          <label>Accepting bookings since *</label>
          <select name="bookingsSince" value={formData.bookingsSince || ''} onChange={handleChange}>
            {years.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

        <div>
          <label>No. of Restaurants</label>
          <input name="numRestaurants" type="number" value={formData.numRestaurants || ''} onChange={handleChange} />
        </div>

        <div>
          <label>No. of Rooms *</label>
          <input name="numRooms" type="number" value={formData.numRooms || ''} onChange={handleChange} />
        </div>

        <div>
          <label>No. of Floors</label>
          <input name="numFloors" type="number" value={formData.numFloors || ''} onChange={handleChange} />
        </div>

        <div>
          <label>Currency</label>
          <input name="currency" type="text" value={formData.currency || ''} onChange={handleChange} />
        </div>

        <div>
          <label>Timezone</label>
          <input name="timezone" type="text" value={formData.timezone || ''} onChange={handleChange} />
        </div>

        <div>
          <label>Check-in Time</label>
          <input name="checkInTime" type="text" value={formData.checkInTime || ''} onChange={handleChange} />
        </div>

        <div>
          <label>Check-out Before</label>
          <input name="checkOutTime" type="text" value={formData.checkOutTime || ''} onChange={handleChange} />
        </div>

        <div className="full-width">
          <label className="checkbox">
            <input name="is24hrCheckIn" type="checkbox" checked={!!formData.is24hrCheckIn} onChange={handleChange} />
            <span>24 Hrs Check In</span>
          </label>
        </div>

        <div className="full-width">
          <label className="checkbox">
            <input name="isAuthorized" type="checkbox" checked={!!formData.isAuthorized} onChange={handleChange} />
            <span>I confirm that I am authorized to make these changes.</span>
          </label>
        </div>

        <div className="full-width text-right">
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Saving...' : 'SAVE'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BasicInformation;
