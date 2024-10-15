import React from 'react'
import { Input } from './Input';
import { Select } from './Select';

export const Inputs = ({ handleChange, value, field }) => {
   switch (field.element) {
      case 'input':
         return <Input
            value={value}
            field={field}
            handleChange={handleChange}
         />
      case 'select':
         return <Select
            value={value}
            field={field}
            handleChange={handleChange}
         />
      default:
         break;
   }
}
