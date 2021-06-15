import {produce} from 'immer';

const book = {
  title: 'Java Fundamental'
};

function publish(book) {
  return produce(book, updatedBook => {
    updatedBook.isPublished = true;
  });
}

const publishedBook = publish(book);

console.log(book);
console.log(publishedBook);