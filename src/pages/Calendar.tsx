import React, { useEffect, useState } from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../layout/DefaultLayout';

// Define the type for the form data
interface FormData {
  _id: string;
  companySize: string;
  geographicalCoverage: string;
  collaboratedWithExcelia: string;
  recruitmentOptions: string[];
  employerBrandOptions: string[];
  competenceAcquisitionOptions: string[];
  submitted: boolean;
  date: string;
  __v: number;
}

const FoemLayout = () => {
  const [formData, setFormData] = useState<FormData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3030/user/get');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data: FormData[] = await response.json();
        setFormData(data);
      } catch (error) {
        console.error('Error fetching form data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <DefaultLayout>
      <Breadcrumb pageName="FORM" />
      <div className="form-container">
        {formData.map(form => (
          <div key={form._id} className="form-item">
            <h2>Form Data</h2>
            <p>Company Size: {form.companySize}</p>
            <p>Geographical Coverage: {form.geographicalCoverage}</p>
            {/* Render other form fields similarly */}
          </div>
        ))}
      </div>
      <style >{`
        .form-container {
          padding: 20px;
        }
        .form-item {
          border: 1px solid #ccc;
          padding: 10px;
          margin-bottom: 10px;
        }
      `}</style>
    </DefaultLayout>
  );
};

export default FoemLayout;
