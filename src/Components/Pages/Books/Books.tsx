import React from 'react'
import { IBook } from '../../utils/utils'
import { StoreContainer } from '../../Store';
import Card from './Card/Card';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

// STYLE material UI
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    book: {
      backgroundColor: "#282c34",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-around",
      backgroundImage: `url("https://pixel.nymag.com/imgs/daily/vulture/2019/04/04/got-recap/02-got-seasons-recap-illo.w1100.h733.2x.jpg")`,
      color: "black",
      textShadow: "1px 1px yellow"
    },
  }),
);

// BOOKS Component - using Card component for display infor of books
export default function Books() {
  const classes = useStyles();
  const unstated = StoreContainer.useContainer();
  const books: IBook[] = unstated.books;

  return (
    <div className={classes.book}>

      {/* Loading */}
      {unstated.loading && (
        <progress className="progress is-small is-primary" max="100">15%</progress>
      )}

      {/* Books : 10 books displayed */}
      {books && (books.map((book: IBook) => (<div>
        <Card book={book} />
      </div>))
      )}
    </div >
  )
}
