import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    alignText: "center",
  },
}));

export default function SaveProfileBTN({ submit }) {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
        component={Link}
        to="/saved"
        onClick = {submit}
        // onClick={(e) => {
        //   const url = new URL(window.location.origin);
        //   url.port = 3001;
        //   url.pathname = "/api/profile";
        //   axios.post(url.href,
        //     {
        //       first_name: "state.first_name",
        //       middle_name: "state.middle_name",

        //       d_o_b: "state.d_o_b",

        //       sex: "state.sex",

        //       place_of_birth: "state.place_of_birth",

        //       ss_number: "state.ss_number",

        //       email_address: "state.email_address",

        //       phone_number: "state.phone_number",
        //       address_one: "state.address_one",
        //       zipcode: "state.zipcode",
        //       country: "state.country",

        //       other_names_used: "state.other_names_used",
        //       more_names_used: "state.more_names_used",

        //       parent_one_first_and_middle_name: "state.parent_one_first_and_middle_name",
        //       parent_one_last_name: "state.parent_one_last_name",
        //       parent_one_dob: "state.parent_one_dob",
        //       parent_one_place_of_birth: "state.parent_one_place_of_birth",
        //       parent_one_sex: "state.parent_one_sex",
        //       parent_one_citizenship: "state.parent_one_citizenship",
        //       parent_two_first_and_middle_name: "state.parent_two_first_and_middle_name",
        //       parent_two_last_name: "state.parent_two_last_name",
        //       parent_two_dob: "state.parent_two_dob",
        //       parent_two_place_of_birth: "state.parent_two_place_of_birth",
        //       parent_two_sex: "state.parent_two_sex",
        //       parent_two_citizenship: "state.parent_two_citizenship",

        //       been_married: "state.been_married",
        //       full_name_of_spouse: "state.full_name_of_spouse",
        //       current_spouse_dob: "state.current_spouse_dob",
        //       current_spouse_place_of_birth: "state.current_spouse_place_of_birth",
        //       current_spouse_citizenship: "state.current_spouse_citizenship",
        //       date_of_marriage: "state.date_of_marriage",
        //       widowed_or_divorced: "state.widowed_or_divorced",
        //       widow_divorce_date: "state.widow_divorce_date",

        //       additional_phone_number: "state.additional_phone_number",

        //       occupation: "state.occupation",

        //       employer_or_school: "state.employer_or_school",

        //       height: "state.height",

        //       hair_color: "state.hair_color",

        //       eye_color: "state.eye_color",

        //       departure_date: "state.departure_date",
        //       return_date: "state.return_date",
        //       countries_to_be_visited: "state.countries_to_be_visited",

        //       permanent_address: "state.permanent_address",
        //       perm_apartment: "state.perm_apartment",
        //       perm_city: "state.perm_city",
        //       perm_state: "state.perm_state",
        //       perm_zip: "state.perm_zip",

        //       em_contact_name: "state.em_contact_name",
        //       em_contact_address: "state.em_contact_address",
        //       em_contact_apartment: "state.em_contact_apartment",
        //       em_contact_city: "state.em_contact_city",
        //       em_contact_state: "state.em_contact_state",
        //       em_contact_zip_code: "state.em_contact_zip_code",
        //       em_contact_phone: "state.em_contact_phone",
        //       em_contact_relationship: "state.em_contact_relationship",

        //       recent_passport: "state.recent_passport",
        //       recent_passport_printed_name: "state.recent_passport_printed_name",
        //       recent_passport_book_numbner: "state.recent_passport_book_number",
        //       recent_passport_issue_date: "state.recent_passport_issue_date",
        //       recent_passport_card_printed_name: "state.recent_passport_card_printed_name",
        //       recent_passport_card_number: "state.recent_passport_card_number",
        //       recent_passport_card_issue_date: "state.recent_passport_card_issue_date",
        //     }
        //   )
        // }}
      >
        Save
      </Button>
    </div>
  );
}
