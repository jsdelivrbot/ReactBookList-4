// create a single action creator called selectBook
// this function takes a single argument which is an object with a title
// call this function whenever a user actually clicks on the book
// selectBook is an ActionCreator, it needs to return an action, an object with a type property
export function selectBook(book) {
	// the returned object is the actual action
	// Actions usually have two values, a type and a payload. The payload further describes 
  // or clarifies the conditions of the action that's being triggered.
  // Every action must have a type that describes the purpose of the action
  return {
		type: 'BOOK_SELECTED',
		payload: book
  };
}