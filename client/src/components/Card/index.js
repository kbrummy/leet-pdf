// import React, { useContext } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import DeveloperContext from './DeveloperContext';



// const useStyles = makeStyles({
//   root: {
//     // maxWidth: ,
//   },
// });

// function DeveloperCard(props) {
//   const classes = useStyles();
//   // const { id, name, body } = useContext(DeveloperContext);
//   return (

//     <Card className={classes.root}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           alt={name}
//           height="200"
//           image={props.id}
//           />
//         <CardContent>
//           <Typography gutterBottom variant="h4" component="h2">
//           {props.name}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//           {props.body}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//       {/* onClick={() => openPDF("{name}")}  */}
//         <Button 
//        className="btn btn-danger" size="small" color="secondary">
//           Create PDF
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }
// export default DeveloperCard;