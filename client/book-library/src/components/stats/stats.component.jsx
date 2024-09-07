import React from "react";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import BookIcon from "@mui/icons-material/Book";

import "./stats.styles.css";

const Stats = () => {
  return (
    <div className="stats">
      <div className="stats-block">
        <LibraryBooksIcon className="stats-icon" style={{ fontSize: 80 }} />
        <p className="stats-title">Total Books</p>
        <p className="stats-count">3,254</p>
      </div>
      <div className="stats-block">
        <LocalLibraryIcon className="stats-icon" style={{ fontSize: 80 }} />
        <p className="stats-title">Total Members</p>
        <p className="stats-count">254</p>
      </div>
      <div className="stats-block">
        <BookIcon className="stats-icon" style={{ fontSize: 80 }} />
        <p className="stats-title">Reservations</p>
        <p className="stats-count">54</p>
      </div>
    </div>
  );
};

export default Stats;
