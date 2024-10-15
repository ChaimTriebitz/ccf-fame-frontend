export const Select = ({ field, value, handleChange }) => {

   const { name, internal_name, id, required = false, options } = field

   return (
      <div className="input">
         <label htmlFor={internal_name}>{name}</label>
         <select
            name={internal_name}
            id={id}
            onChange={handleChange}
            value={value || ''}
            className='select'
            required={required}
         >
            <option value='' disabled>{value}</option>
            {
               options.map((option, optionIdx) =>
                  <option
                     key={option.id || optionIdx}
                     value={option.option_value || ''}
                  >
                     {option.option_display}
                  </option>
               )
            }
         </select>
      </div>

   )
}
