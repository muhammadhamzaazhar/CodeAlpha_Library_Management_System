import React from "react";

import "./reserved-books.styles.css";

const ReservedBooks = () => {
  return (
    <div className="reservedbooks-container">
      <h className="reservedbooks-title">Books On Hold</h>
      <table className="reservedbooks-table">
        <tr>
          <th>Name</th>
          <th>Book</th>
          <th>Date</th>
        </tr>
        <tr>
          <td>John</td>
          <td>Rich Dad Poor Dad</td>
          <td>12/7/2023</td>
        </tr>
        <tr>
          <td>Michael</td>
          <td>The Subtle Art</td>
          <td>10/7/2023</td>
        </tr>
        <tr>
          <td>Kurt</td>
          <td>Wings Of Fire</td>
          <td>15/9/2023</td>
        </tr>
        <tr>
          <td>Smith</td>
          <td>The Secret</td>
          <td>02/9/2023</td>
        </tr>
        <tr>
          <td>Arnold</td>
          <td>Bad Guys</td>
          <td>21/7/2023</td>
        </tr>
        <tr>
          <td>Benn</td>
          <td>Giovanni Rovelli</td>
          <td>02/7/2023</td>
        </tr>
      </table>
    </div>
  );
};

export default ReservedBooks;
