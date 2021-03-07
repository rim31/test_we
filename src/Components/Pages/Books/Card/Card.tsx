import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { Link } from 'react-router-dom'
// import { StoreContainer } from '../../Store';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minWidth: 245,
    marginTop: 15,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));


export default function MyCard(props: any) {
  // const unstated = StoreContainer.useContainer();
  const classes = useStyles();

  // console.log("debug", props)
  return (
    <Card className={classes.root}>

      {/* Title of the card */}
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            OS
          </Avatar>
        }
        title={props.book.name}
      />

      {/* Image */}
      <CardMedia
      // className={classes.media}
      // image={`./${props.item.name}.jpg`} // named my images this way
      // title={props.item.name}
      />

      {/* content : products */}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {/* color <span style={{ color: `${props.item?.color[0]}`, backgroundColor: `${props.item?.color[0]}`, border: '1px solid grey' }}>color</span> */}
        </Typography>
        <h2 style={{ fontWeight: "bold", marginTop: "9px" }}>{props.book.name} </h2>
        <div>From : {props.book.authors} </div>
        <div>Number of page : {props.book.numberOfPages} </div>
        <div className="card-category" ><div> Date : {props.book.released.slice(0, 10)}</div> </div>
      </CardContent>

      <CardActions disableSpacing>
        <Link className="navbar-item" to="/characters" style={{ textDecoration: 'inherit' }}>
          <span className="tag is-primary is-light" >number of characters : {props.book.characters.length}</span>
        </Link>
      </CardActions>
    </Card>
  );
}
