import React from "react";
import TextField from "@material-ui/core/TextField";

import { Divider, Typography, makeStyles } from "@material-ui/core";
// import Select from '@material-ui/core/Select';
// import FormControl from '@material-ui/core/FormControl';
// import MenuItem from '@material-ui/core/MenuItem';
// import InputLabel from '@material-ui/core/InputLabel';
// import AntSwitch from '../../components/Button/AntSwitch';

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
    form: {
      backgroundColor: "white",
      padding: "4rem",
    },
    personal: {
      background: "#white",
      alignText: "center",
    },
    subHeading: {
      fontSize: "40px",
    },
    BTN: {
      justifyContent: "right",
    },
    formControl: {
      background: "#dee3e2",
    },
  },
}));

const Form = ({ handleInput, state }) => {
  const classes = useStyles();
  
  console.dir(state);
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.personal}>
        <Typography className={classes.subHeading}>
          Personal Information
        </Typography>

        <TextField
          id="first_name"
          label="First Name"
          variant="outlined"
          color="secondary"
          value={state.first_name}
          onChange={handleInput}
          inputProps={{ maxLength: 17 }}
        />
        <TextField
          id="middle_name"
          label="Middle name"
          variant="outlined"
          color="secondary"
          value={state.middle_name}
          onChange={handleInput}
          inputProps={{ maxLength: 16 }}
        />
        <TextField
          id="last_name"
          label="Last Name"
          variant="outlined"
          color="secondary"
          value={state.last_name}
          onChange={handleInput}
          inputProps={{ maxLength: 21 }}
        />

        <TextField
          id="d_o_b"
          label="Date of Birth"
          variant="outlined"
          color="secondary"
          value={state.d_o_b}
          onChange={handleInput}
          inputProps={{ maxLength: 10 }}
        />

        <TextField
          id="place_of_birth"
          label="Place of Birth"
          variant="outlined"
          color="secondary"
          value={state.place_of_birth}
          onChange={handleInput}
          inputProps={{ maxLength: 21 }}
        />

        <TextField
          id="ss_number"
          label="Social Security"
          variant="outlined"
          color="secondary"
          value={state.ss_number}
          onChange={handleInput}
          inputProps={{ maxLength:8 }}
        />

        <TextField
          id="email_address"
          label="Email Address"
          variant="outlined"
          color="secondary"
          value={state.email_address}
          onChange={handleInput}
        />

        <TextField
          id="phone_number"
          label="Phone Number"
          variant="outlined"
          color="secondary"
          value={state.phone_number}
          onChange={handleInput}
          inputProps={{ maxLength:10 }}
       />

        <TextField
          id="address_one"
          label="Address One"
          variant="outlined"
          color="secondary"
          value={state.address_one}
          onChange={handleInput}
          inputProps={{ maxLength:36 }}
        />

        <TextField
          id="address_two"
          label="Address Two"
          variant="outlined"
          color="secondary"
          value={state.address_two}
          onChange={handleInput}
          inputProps={{ maxLength:36 }}
        />

        <TextField
          id="city"
          label="City"
          variant="outlined"
          color="secondary"
          value={state.city}
          onChange={handleInput}
          inputProps={{ maxLength:15 }}
        />

        <TextField
          id="state"
          label="State"
          variant="outlined"
          color="secondary"
          value={state.state}
          onChange={handleInput}
          inputProps={{ maxLength: 2 }}
          />
        

        <TextField
          id="zipcode"
          label="Zip Code"
          variant="outlined"
          color="secondary"
          value={state.zipcode}
          onChange={handleInput}
          inputProps={{ maxLength:6 }}
          
        />

        <TextField
          id="country"
          label="Country"
          variant="outlined"
          color="secondary"
          value={state.country}
          onChange={handleInput}
          inputProps={{ maxLength:11 }}
        />

        <TextField
          id="other_names_used"
          label="Other names used"
          variant="outlined"
          color="secondary"
          value={state.other_names_used}
          onChange={handleInput}
          inputProps={{ maxLength:17 }}
        />

        <TextField
          id="more_names_used"
          label="More names used"
          variant="outlined"
          color="secondary"
          value={state.more_names_used}
          onChange={handleInput}
          inputProps={{ maxLength:17 }}
        />
        <TextField
          id="parent_one_first_and_middle_name"
          label="Parent One - First and Middle Name"
          variant="outlined"
          color="secondary"
          value={state.parent_one_first_and_middle_name}
          onChange={handleInput}
          inputProps={{ maxLength:20 }}
        />

        <TextField
          id="parent_one_last_name"
          label="Parent One - Last Name"
          variant="outlined"
          color="secondary"
          value={state.parent_one_last_name}
          onChange={handleInput}
          inputProps={{ maxLength:16 }}
        />
        <TextField
          id="parent_one_dob"
          label="Parent one date of birth"
          variant="outlined"
          color="secondary"
          value={state.parent_one_dob}
          onChange={handleInput}
          inputProps={{ maxLength:10 }}
        />

        <TextField
          id="parent_one_place_of_birth"
          label="Parent One - Place of Birth"
          variant="outlined"
          color="secondary"
          value={state.parent_place_of_birth}
          onChange={handleInput}
          inputProps={{ maxLength:1 }}
        />
        <TextField
          id="parent_two_first_and_middle_name"
          label="Parent Two - First and Middle Name"
          variant="outlined"
          color="secondary"
          value={state.parent_two_first_and_middle_name}
          onChange={handleInput}
          inputProps={{ maxLength:20 }}
        />

        <TextField
          id="parent_two_last_name"
          label="Parent two - Last Name"
          variant="outlined"
          color="secondary"
          value={state.parent_two_last_name}
          onChange={handleInput}
          inputProps={{ maxLength:16 }}
        />
        <TextField
          id="parent_two_dob"
          label="Parent two Date of birth"
          variant="outlined"
          color="secondary"
          value={state.parent_two_dob}
          onChange={handleInput}
        />

        <TextField
          id="parent_two_place_of_birth"
          label="Parent two - Place of Birth"
          variant="outlined"
          color="secondary"
          value={state.parent_two_place_of_birth}
          onChange={handleInput}
        />

        <TextField
          id="full_name_of_spouse"
          label="Spouse Full Name"
          variant="outlined"
          color="secondary"
          value={state.full_name_of_spouse}
          onChange={handleInput}
          inputProps={{ maxLength:19 }}
        />
        <TextField
          id="spouse_d_o_b"
          label="Spouse Date of Birth"
          variant="outlined"
          color="secondary"
          value={state.spouse_d_o_b}
          onChange={handleInput}
          inputProps={{ maxLength:10 }}
        />
        <TextField
          id="current_spouse_place_of_birth"
          label="Spouse Place of Birth"
          variant="outlined"
          color="secondary"
          value={state.current_spouse_place_of_birth}
          onChange={handleInput}
        />

        <TextField
          id="date_of_marriage"
          label="Date of Marriage"
          variant="outlined"
          color="secondary"
          value={state.date_of_marriage}
          onChange={handleInput}
        />

        <TextField
          id="widow_divorce_date"
          label="Widow/Divorce Date"
          variant="outlined"
          color="secondary"
          value={state.widow_divorce_date}
          onChange={handleInput}
        />
        <TextField
          id="additional_phone_number"
          label="Additional Phone number"
          variant="outlined"
          color="secondary"
          value={state.additional_phone_number}
          onChange={handleInput}
          inputProps={{ maxLength:10 }}
        />

        <TextField
          id="occupation"
          label="Occupation"
          variant="outlined"
          color="secondary"
          value={state.occupation}
          onChange={handleInput}
        />

        <TextField
          id="employer_or_school"
          label="Work or School"
          variant="outlined"
          color="secondary"
          value={state.employer_or_school}
          onChange={handleInput}
        />
        <TextField
          id="height"
          label="height"
          variant="outlined"
          color="secondary"
          value={state.height}
          onChange={handleInput}
        />

        <TextField
          id="hair_color"
          label="Hair Color"
          variant="outlined"
          color="secondary"
          value={state.hair_color}
          onChange={handleInput}
        />

        <TextField
          id="eye_color"
          label="Eye Color"
          variant="outlined"
          color="secondary"
          value={state.eye_color}
          onChange={handleInput}
        />

        <TextField
          id="departure_date"
          label="Date of Departure"
          variant="outlined"
          color="secondary"
          value={state.departure_date}
          onChange={handleInput}
        />

        <TextField
          id="return_date"
          label="Date of Departure"
          variant="outlined"
          color="secondary"
          value={state.return_date}
          onChange={handleInput}
        />

        <TextField
          id="coutries_to_be_visited"
          label="Countries to be visited"
          variant="outlined"
          color="secondary"
          value={state.coutries_to_be_visited}
          onChange={handleInput}
        />

        <TextField
          id="perm_address"
          label="Permanent Address"
          variant="outlined"
          color="secondary"
          value={state.perm_address}
          onChange={handleInput}
          inputProps={{ maxLength:31 }}
        />
        <TextField
          id="perm_apartment"
          label="Apartment"
          variant="outlined"
          color="secondary"
          value={state.perm_apartment}
          onChange={handleInput}
          inputProps={{ maxLength:3 }}
        />
        <TextField
          id="perm_city"
          label="City"
          variant="outlined"
          color="secondary"
          value={state.perm_city}
          onChange={handleInput}
          inputProps={{ maxLength:26 }}
        />

        <TextField
          id="perm_state"
          label="State"
          variant="outlined"
          color="secondary"
          value={state.perm_state}
          onChange={handleInput}
          inputProps={{ maxLength:2 }}
        />

        <TextField
          id="perm_zip"
          label="Zip"
          variant="outlined"
          color="secondary"
          value={state.perm_zip}
          onChange={handleInput}
          inputProps={{ maxLength:6 }}
        />
        <TextField
          id="em_contact_name"
          label="Name of Emergency Contact"
          variant="outlined"
          color="secondary"
          value={state.em_contact_name}
          onChange={handleInput}
        />
        <TextField
          id="em_contact_address"
          label="Address of Emergency Contact"
          variant="outlined"
          color="secondary"
          value={state.em_contact_address}
          onChange={handleInput}
        />
        <TextField
          id="em_contact_apartment"
          label="Ap #"
          variant="outlined"
          color="secondary"
          value={state.em_contact_apartment}
          onChange={handleInput}
        />
        <TextField
          id="em_contact_city"
          label="City"
          variant="outlined"
          color="secondary"
          value={state.em_contact_city}
          onChange={handleInput}
        />
        <TextField
          id="em_contact_state"
          label="State"
          variant="outlined"
          color="secondary"
          value={state.em_contact_state}
          onChange={handleInput}
        />
        <TextField
          id="em_contact_zip_code"
          label="Zip"
          variant="outlined"
          color="secondary"
          value={state.em_contact_zip_code}
          onChange={handleInput}
        />
        <TextField
          id="em_contact_phone"
          label="Phone"
          variant="outlined"
          color="secondary"
          value={state.em_contact_phone}
          onChange={handleInput}
        />
        <TextField
          id="em_contact_relationship"
          label="Relationship"
          variant="outlined"
          color="secondary"
          value={state.em_contact_relationship}
          onChange={handleInput}
        />

        <TextField
          id="recent_passport_printed_name"
          label="Printed Name"
          variant="outlined"
          color="secondary"
          value={state.recent_passport_printed_name}
          onChange={handleInput}
        />
        <TextField
          id="recent_passport_book_number"
          label="Recent Passport Book Number"
          variant="outlined"
          color="secondary"
          value={state.recent_passport_book_number}
          onChange={handleInput}
        />
        <TextField
          id="recent_passport_issue_date"
          label="Passport Issue Date"
          variant="outlined"
          color="secondary"
          value={state.recent_passport_issue_date}
          onChange={handleInput}
        />

        <TextField
          id="recent_passport_card_printed_name"
          label="Passport Card Printed Name"
          variant="outlined"
          color="secondary"
          value={state.recent_passport_card_printed_name}
          onChange={handleInput}
        />
        <TextField
          id="recent_passport_card_number"
          label="Recent Passport Card Number"
          variant="outlined"
          color="secondary"
          value={state.recent_passport_card_number}
          onChange={handleInput}
        />
        <TextField
          id="recent_passport_card_issue_date"
          label="Recent Passport Issue Date"
          variant="outlined"
          color="secondary"
          value={state.recent_passport_card_issue_date}
          onChange={handleInput}
        />
      </div>
      <Divider />
    </form>
  );
};

export default Form;
