import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import passport from "../../static/img/passport.jpg";
import nameChange from "../../static/img/nameChange.jpg";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    // maxWidth: ,
  },
});

function DeveloperCard(props) {
  const classes = useStyles();
  //   const { id, name, body } = useContext(DeveloperContext);
  return (
    <div>
      {/* card 1 */}
      <Card className={classes.passport}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={"passport pdf or ds 11"}
            height="260"
            image={passport}
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
              Passport PDF
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
            ></Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* onClick={() => openPDF("{name}")}  */}
          <Button
            className="btn btn-danger"
            size="small"
            color="secondary"
            component={Link}
            to="/create"
          >
            Create PDF
          </Button>
        </CardActions>
      </Card>
      {/* Name Change */}
      <Card className={classes.nameChange}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={"Name change pdf or ds 30"}
            height="260"
            image={nameChange}
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
              Name Change PDF
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
            ></Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* onClick={() => openPDF("{name}")}  */}
          <Button
            className="btn btn-danger"
            size="small"
            color="secondary"
            component={Link}
            to="/create"
          >
            Create PDF
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
export default DeveloperCard;
