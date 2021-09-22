import { v1 as uuidv1 } from 'uuid';
export function reducer(state, action) {
    switch (action.type) {
      case 'add_book':
        return [...state,{title : action.book.title,author : action.book.author,id: uuidv1()}];
      case "delecte_book":
        return state.filter(book =>book.id !== action.id)
      default:
        return state
    }
  }