import React from 'react';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

 function SelectPdf() {
    const classes = useStyles();
    const [Pdf, setPdf] = React.useState('');

    const handleChange = (event) => {
    setPdf(event.target.value);
  };
    return (
        <div>
            <FormControl variant="outlined"  color="secondary"
            className={classes.formControl}
            >
                <InputLabel id="Pdf">PDF</InputLabel>
                <Select
                labelId="Pdf"
                id="Pdf"
                value={Pdf}
                onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Male"}>Male</MenuItem>
                    <MenuItem value={"Female"}>Female</MenuItem>
                    <MenuItem value={"Other"}>Other</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default SelectPdf;
