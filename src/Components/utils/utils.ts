

// Interface os the possible responses
export interface IHouse {
  "url": string,
  "name": string,
  "region": string,
  "coatOfArms": string,
  "words": string,
  "titles": string[],
  "seats": string[],
  "currentLord": string,
  "heir": string,
  "overlord": string,
  "founded": string,
  "founder": string,
  "diedOut": string,
  "ancestralWeapons": string[],
  "cadetBranches": string[],
  "swornMembers": string[],
}

export interface ICharacter {
  "url": string,
  "name": string,
  "gender": string,
  "culture": string,
  "born": string,
  "died": string,
  "titles": string[],
  "aliases": string[],
  "father": string,
  "mother": string,
  "spouse": string,
  "allegiances": string[],
  "books": string[],
  "povBooks": string[],
  "tvSeries": string[],
  "playedBy": string[],
}

export interface IBook {
  "url": string,
  "name": string,
  "isbn": string,
  "authors": string[],
  "numberOfPages": number,
  "publisher": string,
  "country": string,
  "mediaType": string,
  "released": string | Date,
  "characters": string[]
}

// GETTER : function get from url
// https://anapioficeandfire.com/api/books
// https://www.anapioficeandfire.com/api/characters
// https://anapioficeandfire.com/api/houses
// https://anapioficeandfire.com/api/characters/2
// export const getData = async (url: string) => {
//   try {
//     const response = await fetch(url);
//     const json = await response.json();
//     return json
//   } catch (err) {
//     console.error(err.message);
//   }
// };