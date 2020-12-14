import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    alignText: "center",
  },
}));

export default function PreviewBTN({ state }) {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
        onClick={(e) => {
          e.preventDefault();
          const url = new URL(window.location.origin);
          url.port = 3001;
          url.pathname = "/createpdf";

          fetch(url.href, {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(state),
            headers: { "Content-Type": "application/json" },
          }).then((res) => {
            res.json().then((json) => {
              console.log(json);
              window.open(json.href, "_blank");
            }).catch(error => alert(error.message));
          });
        }}
      >
        Print/Preview
      </Button>
    </div>
  );
}
