import {Map} from 'immutable';

const book = Map({
  title: 'Java Fundamental'
});

function publish(book) {
  return book.set('isPublish', true);
}

const publishedBook = publish(book);

console.log(book.toJS());
console.log(publishedBook.toJS());