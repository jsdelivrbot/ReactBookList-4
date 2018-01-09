// create a single action creator called selectBook
// this function takes a single argument which is an object with a title
// call this function whenever a user actually clicks on the book
export function selectBook(book) {
    console.log('A book has been selected: ', book.title);
}