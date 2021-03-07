import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import LinkURL from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import { withStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import { StoreContainer } from "../Store";

// Material UI style
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    subTitle: {
      color: 'white',
      textDecoration: 'inherit',
      paddingLeft: '15px'
    },
  }),
);

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);

/**
 * Footer : stateless functionnal component
 */
function Copyright() {
  return (
    <WhiteTextTypography variant="body2" color="textSecondary" align="center" >
      {'Copyright © '}
      <LinkURL href="https://github.com/rim31">https://rim31.github.io/</LinkURL>{' '}
      {new Date().getFullYear()}
    </WhiteTextTypography>
  );
}

/**
 * NavBar : Routing to pages
 * @props : type = could be "books, characters, houses"
 */
function NavLink(props: any) {
  const classes = useStyles();
  return (
    <Typography className={classes.title} variant="h6" noWrap>
      <Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
        style={{ color: 'white', textDecoration: 'inherit', paddingLeft: '15px' }} to={`/${props.type}`} >{props.type}</Link>
    </Typography>
  );
}

/**
 * Nav Bar - Layout - main component here
 * @param props : child for layout
 */
export default function NavBar(props: any) {
  const classes = useStyles();
  const unstated = StoreContainer.useContainer();


  React.useEffect(() => {
    unstated.fetchData("books")
    // unstated.fetchData("characters")
    // unstated.fetchData("houses")
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">

          {/* Links - Routing */}
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              <Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger classes.subTitle"
                style={{ color: 'white', textDecoration: 'inherit', paddingLeft: '15px' }} to="/" >GOT</Link>
            </Typography>
            <NavLink type={"books"} />
            <NavLink type={"characters"} />
            <NavLink type={"houses"} />
          </Toolbar>
        </AppBar>
      </div>

      {/* Component */}
      {props.children}

      {/* Footer */}
      <Box pt={4} style={{ bottom: 0, position: 'fixed', right: 0 }}>
        <Copyright />
      </Box>
    </>
  );
}