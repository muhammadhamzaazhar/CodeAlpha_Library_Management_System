import React from "react";

import About from "../../components/about/about.component";
import Footer from "../../components/footer/footer.component";
import ImageSlider from "../../components/image-slider/image-slider.component";
import PhotoGallery from "../../components/photo-gallery/photo-gallery.component";
import PopularBooks from "../../components/popular-books/popular-books.component";
import RecentAddedBooks from "../../components/recent-added-books/recent-added-books.component";
import ReservedBooks from "../../components/reserved-books/reserved-books.component";
import Stats from "../../components/stats/stats.component";
import WelcomeBox from "../../components/welcome-box/welcome-box.component";

const Home = () => {
  return (
    <div id="home">
      <ImageSlider />
      <WelcomeBox />
      <About />
      <Stats />
      <RecentAddedBooks />
      <PopularBooks />
      <ReservedBooks />
      <PhotoGallery />
      <Footer />
    </div>
  );
};

export default Home;
