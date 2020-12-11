import React from "react";
import TextField from "@material-ui/core/TextField";

import { Divider, Typography, makeStyles } from "@material-ui/core";

// import MenuItem from '@material-ui/core/MenuItem';
// import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    header: {
      fontSize: "30px",
      color: "black",
    },
  },
}));

const Form = ({handleInput, state}) => {

    const classes = useStyles();
    // const [gender, setGender] = React.useState('Male');
    // const handleChange = (event) => {
    //     setGender(event.target.value);
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <Typography varient="h4" className={classes.heading}>Personal Information</Typography>
          <TextField
            required
            id="first_name"
            label="First Name"
            variant="outlined"
            color="secondary"
            value = {state.first_name}
            onChange = {handleInput}
          />
          <TextField
            id="middle_name"
            label="Middle name"
            variant="outlined"
            color="secondary"
            value = {state.middle_name}
            onChange = {handleInput}
          />
          <TextField
            required
            id="last_name"
            label="Last Name"
            variant="outlined"
            color="secondary"
            value = {state.last_name}
            onChange = {handleInput}
          />
          <TextField
            required
            id="d_o_b"
            label="Date of Birth"
            type="number"
            placeholder="**/**/****"
            variant="outlined"
            color="secondary"
          />
          {/* GENDER */}
          {/* <TextField
                id="gender"
                select
                label="Gender"
                value={gender}
                onChange={handleChange}
                helperText="Please select your gender"
                variant="outlined"
                >
                {gender.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
                </TextField> */}
          <TextField
            required
            id="ss_number"
            label="Social Security"
            type="number"
            placeholder="***-**-****"
            variant="outlined"
            color="secondary"
          />
          {/* CITIZENSHIP */}
          <TextField
            required
            id="place_of_birth"
            label="Place of birth (city, state, or country)"
            variant="outlined"
            placeholder="**********"
            color="secondary"
          />
          {/* RELATIONSHIP */}
          <TextField
            required
            id="phone_number"
            label="Phone Number"
            type="number"
            placeholder="***-***-****"
            variant="outlined"
            color="secondary"
          />
          {/* ADD AUTOFILL */}
          <TextField
            required
            id="email_address"
            label="Email Address"
            type="email"
            placeholder="abc@abc.com"
            variant="outlined"
            color="secondary"
          />
          <TextField
            required
            id="address_one"
            label="Address One"
            variant="outlined"
            color="secondary"
          />
          {/* USE FOR LARGER ADDRESS */}
          {/* <TextField
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                defaultValue="Default Value"
                variant="outlined"
                /> */}
          <TextField
            id="address_two"
            label="Address Two"
            variant="outlined"
            color="secondary"
          />
          <TextField
            id="apartment_number"
            label="Apt #"
            type="number"
            variant="outlined"
            color="secondary"
          />
          <TextField
            id="city"
            label="City"
            variant="outlined"
            color="secondary"
          />
          <TextField
            id="state"
            label="State"
            variant="outlined"
            color="secondary"
          />
          <TextField
            required
            id="zipcode"
            label="Zip Code"
            type="number"
            placeholder="*****"
            variant="outlined"
            color="secondary"
          />
        </div>
        <Divider />

        <div>
          {/* MAKE A CHECKBOX FOR THIS BEING TRUE FALSE */}
          <Typography className={classes.subheader}>Spouse Information</Typography>
          <TextField
            id="spouse_first_name"
            label="Spouse Fist Name"
            variant="outlined"
            color="secondary"
          />
          <TextField
            id="spouse_middle_inital"
            label="Spouse Middle Inital"
            variant="outlined"
            color="secondary"
          />
          <TextField
            id="spouse_last_name"
            label="Spouse Last Name"
            variant="outlined"
            color="secondary"
          />
          <TextField
            id="spouse_d_o_b"
            label="Spouse Date of Birth"
            type="number"
            placeholder="**/**/****"
            variant="outlined"
            color="secondary"
          />
          <TextField
            id="spouse_ss_number"
            label="Spouse Social Security"
            type="number"
            placeholder="***-**-****"
            variant="outlined"
            color="secondary"
          />
          <TextField
            id="spouse_place_of_birth"
            label="Spouse Place of Birth"
            variant="outlined"
            color="secondary"
          />
          <TextField
            id="spouse_phone_number"
            label="Spouse Phone Number"
            type="number"
            placeholder="***-***-****"
            variant="outlined"
            color="secondary"
          />
          {/* MAKE A CHECKBOX FOR THIS BEING TRUE FALSE */}
          <TextField
            id="spouse_address_one"
            label="Spouse Address One"
            variant="outlined"
            color="secondary"
          />
          <TextField
            id="spouse_address_two"
            label="Spouse Address Two"
            variant="outlined"
            color="secondary"
          />
          <TextField
            id="spouse_apt_number"
            label="Spouse Apt #"
            type="number"
            variant="outlined"
            color="secondary"
          />
          <TextField
            id="spouse_city"
            label="Spouse City"
            variant="outlined"
            color="secondary"
          />
          <TextField
            id="spouse_state"
            label="Spouse State"
            variant="outlined"
            color="secondary"
          />
          <TextField
            id="spouse_zip_code"
            label="Spouse Zip Code"
            type="number"
            placeholder="*****"
            variant="outlined"
            color="secondary"
          />
        </div>
        <Divider />
        <div>
          {/* MAKE A CHECKBOX FOR THIS BEING TRUE FALSE */}
          <Typography className={classes.subheader}>Foreign ADDRESS</Typography>
          <TextField
            id="foreign_address_one"
            label="Foreign Address One"
            variant="outlined"
            color="secondary"
          />
          <TextField
            id="foreign_address_two"
            label="Foreign Address Two"
            variant="outlined"
            color="secondary"
          />
          <TextField
            id="foreign_apt_number"
            label="Foreign Apt#"
            type="number"
            variant="outlined"
            color="secondary"
          />
          <TextField
            id="foreign_country_name"
            label="Foreign Country Name"
            variant="outlined"
            color="secondary"
          />
          <TextField
            id="foreign_state/prov"
            label="Foreign State or Province"
            variant="outlined"
            color="secondary"
          />
          <TextField
            id="foreign_postal_code"
            label="Foreign Postal Code"
            type="number"
            placeholder="*****"
            variant="outlined"
            color="secondary"
          />
        </div>
        <Divider />
        <div></div>
      </form>
    );
  }

export default Form;
