import React from "react";

import "./recent-added-books.styles.css";

const RecentAddedBooks = () => {
  return (
    <div className="recentaddedbooks-container">
      <h2 className="recentbooks-title">Recent Uploads</h2>
      <div className="recentbooks">
        <div className="images">
          <img
            className="recent-book"
            src="https://inkinmytea.files.wordpress.com/2011/12/apj.jpg?w=640"
            alt="Book 1"
          />
          <img
            className="recent-book"
            src="https://images-na.ssl-images-amazon.com/images/I/91VokXkn8hL.jpg"
            alt="Book 2"
          />
          <img
            className="recent-book"
            src="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            alt="Book 3"
          />
          <img
            className="recent-book"
            src="https://images-na.ssl-images-amazon.com/images/I/71m-MxdJ2WL.jpg"
            alt="Book 4"
          />
          <img
            className="recent-book"
            src="https://images-na.ssl-images-amazon.com/images/I/71t4GuxLCuL.jpg"
            alt="Book 5"
          />
          <img
            className="recent-book"
            src="https://booksvilla.com.pk/cdn/shop/products/56199402_600x.jpg?v=1678358876"
            alt="Book 6"
          />
          <img
            className="recent-book"
            src="https://images-na.ssl-images-amazon.com/images/I/81mXQdi5x+L.jpg"
            alt="Book 7"
          />
          <img
            className="recent-book"
            src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1498813353l/34267304.jpg"
            alt="Book 8"
          />
          <img
            className="recent-book"
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105"
            alt="Book 9"
          />
        </div>
      </div>
    </div>
  );
};

export default RecentAddedBooks;
