import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(5),
    },
    "&:focus": {
      backgroundColor: theme.palette.secondary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const useStyles = makeStyles((theme) => ({
  header: {
    fontWeight: "bold",
    fontSize: "40px",
    margin: "20px",
    padding: "20px",
  },
  button: {
    padding: "20px",
    paddingBottom: "5px",
  },
}));

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  return (
    <div className={classes.header}>
      <Container variant="h2">Welcome to Leet!</Container>
      <div className={classes.button}>
        <Button
          aria-controls="customized-menu"
          aria-haspopup="true"
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          Please Select Client
        </Button>
        <StyledMenu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <StyledMenuItem>Client 1</StyledMenuItem>
          <StyledMenuItem>Client 2</StyledMenuItem>
          <StyledMenuItem>Client 3</StyledMenuItem>
        </StyledMenu>
      </div>
    </div>
  );
}

//Original Header code
// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";
// import Button from "@material-ui/core/Button";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(3),
//     },
//   },
//   input: {
//     display: "none",
//   },
//   margin: {
//     margin: theme.spacing(1),
//   },
//   extendedIcon: {
//     marginRight: theme.spacing(1),
//   },
//   header: {
//     fontWeight: "bold",
//     fontSize: "40px",
//     padding: "2rem",
//   },
// }));

// const Header = () => {
//   const classes = useStyles();
//   return (
//     <div>
//       <Container variant="h2" className={classes.header}>
//         Welcome to Leet!
//       </Container>
//       <div className={classes.root}>
//         {/* <Button
//           variant="contained"
//           size="medium"
//           color="primary"
//           className={classes.btn}
//         >
//           Select Client
//         </Button>
//         <Button
//           variant="contained"
//           size="medium"
//           color="primary"
//           className={classes.btn}
//         >
//           Create a new Client
//         </Button> */}
//         <Button
//           variant="contained"
//           size="medium"
//           color="primary"
//           className={classes.btn}
//         >
//           Select a PDF
//         </Button>
//         <input
//           accept="image/*"
//           className={classes.input}
//           id="contained-button-file"
//           multiple
//           type="file"
//         />
//         <label htmlFor="contained-button-file">
//           <Button variant="contained" color="primary" component="span">
//             Upload
//           </Button>
//         </label>
//       </div>
//     </div>
//   );
// };

// export default Header;
