import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "./photo-gallery.styles.css";

const PhotoGallery = () => {
  return (
    <div className="photogallery-container">
      <h1 className="photogallery-title">Photo Gallery</h1>
      <div className="photogallery-images">
        <img
          src="https://images.unsplash.com/photo-1604866830893-c13cafa515d5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="books"
        />
        <img
          src="https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="books"
        />
        <img
          src="https://plus.unsplash.com/premium_photo-1682284548106-3e589faff54f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="books"
        />
        <img
          src="https://plus.unsplash.com/premium_photo-1682284352941-58dceb6cd601?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="books"
        />
        <img
          src="https://plus.unsplash.com/premium_photo-1682284079685-657fb4f33de5?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="books"
        />
        <img
          src="https://plus.unsplash.com/premium_photo-1682284353501-e98ddb4f7357?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="books"
        />
        <img
          src="https://images.unsplash.com/photo-1494809610410-160faaed4de0?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="books"
        />
        <img
          src="https://images.unsplash.com/photo-1536985576470-b7e4a0363a19?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="books"
        />
      </div>
      <button>
        VIEW MORE
        <ArrowForwardIosIcon style={{ fontSize: 20 }} />
      </button>
    </div>
  );
};

export default PhotoGallery;
