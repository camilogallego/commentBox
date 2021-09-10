import React, { useContext } from "react";
import './Dropdown.css'
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Context } from "../../context/Context";

function Dropdown({ value, handleChange }) {
  const { users } = useContext(Context);

  const onChange = (e) => {
    handleChange(e.target.value)
  }
  return (
    <div className='containerSelect'>
      <p>Usuario</p>
      <FormControl variant="outlined" className='inputSelect' >
        <InputLabel id="">Ej: Pedro Garcia</InputLabel>
        <Select
          label="Ej: Pedro Garcia"
          value={value}
          onChange={onChange}
        >
          {users.map(({ id, firstName, lastName }) => (
            <MenuItem key={id} value={id}>
              {firstName} {lastName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default Dropdown;
