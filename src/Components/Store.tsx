// eslint-disable-next-line
import * as React from 'react';
import { createContainer } from "unstated-next";
import { IBook, ICharacter, IHouse, getData } from "./utils/utils";

export const useStore = () => {
  const [books, setBooks] = React.useState<IBook[] | any>([]);
  const [houses, setHouses] = React.useState<IHouse[] | any>([]);
  const [characters, setCharacters] = React.useState<ICharacter[] | any>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<boolean>(false);



  // https://www.anapioficeandfire.com/api/books
  // https://www.anapioficeandfire.com/api/characters
  // https://www.anapioficeandfire.com/api/houses

  const fetchData = (type: string) => {
    fetch(`https://anapioficeandfire.com/api/${type}`)
      .then((res: any) => res.json())
      .then(
        (result) => {
          switch (type) {
            case "books":
              setBooks(result);
              break;
            case "houses":
              setHouses(result)
              break;
            case "characters":
              setCharacters(result)
              break;
            default:
              setError(true)
              break;
          }
        },
        (error) => {
          console.error(error)
        }
      ).catch((err: any) => setError(true))
    setLoading(false);
  };



  //order a list : i wanted to do a serach bar for books, characters, houses
  // eslint-disable-next-line
  function dynamicSort(property: any) {
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (b: any, a: any) {
      /* next line works with strings and numbers, 
       * and you may want to customize it to your needs
       */
      var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
    }
  }

  return {
    // ATTRIBUTES
    books,
    characters,
    houses,
    loading,
    error,
    // METHODS : Actions
    fetchData,
    dynamicSort,
    setLoading,
    setError
  };
}
export const StoreContainer = createContainer(useStore)
