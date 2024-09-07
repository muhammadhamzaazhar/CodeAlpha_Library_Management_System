import React from "react";

import "./all-books.styles.css";

const Allbooks = () => {
  return (
    <div className="books-page">
      <div className="books">
        <div className="book-card">
          <img
            src="https://books.google.com.pk/books/publisher/content?id=vYRbDwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71wlMsxsytvG1T1fLWNeBv0q7rx5ICmAxHZsnG-_RWtedC7VrNQZTuH3g4YQCLe9oYR_kjz-5PLMyBVzG-r9hXxUcnegCFTC0nZYiR0Z2vHyXfWYm83f8D7n_JZO83j2cJ10dIx"
            alt=""
          ></img>
          <p className="bookcard-title">In His Own Words</p>
          <p className="bookcard-author">Nelson Mandela</p>
          <div className="bookcard-category">
            <p>Auto Biography</p>
          </div>
          <div className="bookcard-emptybox"></div>
        </div>
        <div className="book-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Rb2t6jA5ml7n57qdTZbAOWX1qSfsLCbaOA&usqp=CAU"
            alt=""
          ></img>
          <p className="bookcard-title">The Power Of Your Subconscious Mind</p>
          <p className="bookcard-author">By Joseph</p>
          <div className="bookcard-category">
            <p>Psychology</p>
          </div>
          <div className="bookcard-emptybox"></div>
        </div>
        <div className="book-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRFiDRQ7a-Oo-CnMmnbIMApP1Cq9B5bYx-UA&usqp=CAU"
            alt=""
          ></img>
          <p className="bookcard-title">Elon Musk</p>
          <p className="bookcard-author">By Elon</p>
          <div className="bookcard-category">
            <p>Auto Biography</p>
          </div>
          <div className="bookcard-emptybox"></div>
        </div>
        <div className="book-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Rb2t6jA5ml7n57qdTZbAOWX1qSfsLCbaOA&usqp=CAU"
            alt=""
          ></img>
          <p className="bookcard-title">The Subtle Art Of Not Giving A Fuck</p>
          <p className="bookcard-author">By Mark Manson</p>
          <div className="bookcard-category">
            <p>COMIC</p>
          </div>
          <div className="bookcard-emptybox"></div>
        </div>
      </div>
    </div>
  );
};

export default Allbooks;
