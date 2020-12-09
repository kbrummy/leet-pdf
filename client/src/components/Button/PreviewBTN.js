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

export default function PreviewBTN() {
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
          url.pathname = "/createpdf/" + escape("Your First Name")
          window.open(url.href, '_blank');
          // const url = "https://production-formapi-docs.s3.amazonaws.com/store/acc_3652YkpJXmjNEGkcbR/templates/tpl_aD7H2ZgJRE54nLMCb9/submissions/sub_tfbCaX92Mdxbz7edm5.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJESVN6QC4ACN3XSQ%2F20201208%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20201208T045541Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=cbaf77bdc533ee49c0ad51063423c13d6d638846883678b3512fee948aa02015"
          // window.location.href=url
        }}
      >
        Print/Preview
      </Button>
    </div>
  );
}
