import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    home: {
      backgroundColor: "#282c34",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundImage: `url("https://pixel.nymag.com/imgs/daily/vulture/2019/04/04/got-recap/02-got-seasons-recap-illo.w1100.h733.2x.jpg")`,
      color: "black",
      textShadow: "1px 1px yellow"
    },
  }),
);

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.home} style={{
    }}>
      <div style={{ height: "100%" }}>
        <h1>Welcome</h1>
        <h2>Select between BOOKS, (HOUSES and CHARACTERS in progress) in tabs</h2>
      </div>
    </div >
  )
}
