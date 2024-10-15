import React, { useState } from 'react';
import axios from 'axios';
import { Input, Inputs } from '../../cmps';
import { DOCTORS_FORM } from '../../data';
import { useForm } from '../../hooks';
import { objects } from '../../functions';

export const DoctorForm = () => {

   const { values, handleChange, changedValues, isValuesChanged, restart } = useForm(objects.emptyFormFields(DOCTORS_FORM, 'internal_name'))

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const res = await axios.post('https://cff-fame-backend.onrender.com/api/doctors', values);
         console.log('Appointment booked:', res.data);
      } catch (err) {
         console.error(err);
      }
   };

   return (
      <main className='page'>
         <form className='form' onSubmit={handleSubmit}>
            <h1>Form</h1>
            <div className="fields">
            {
               DOCTORS_FORM.map(field =>
                  <Inputs
                     key={field.internal_name}
                     value={values[field.internal_name]}
                     field={field}
                     handleChange={handleChange}
                  />
               )
            }
            </div>

            <button className='btn' type="submit">Submit</button>
         </form>
      </main>

   );
};

