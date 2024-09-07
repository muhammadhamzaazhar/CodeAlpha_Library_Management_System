import React from "react";
import "./about.styles.css";

const About = () => {
  return (
    <div className="about-box">
      <h2 className="about-title">About the Library</h2>
      <div className="about-data">
        <div className="about-img">
          <img
            src="https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=913&q=80"
            alt="Library"
          />
        </div>
        <div>
          <p className="about-text">
            Our library offers a diverse collection of books, ranging from
            timeless classics to the latest bestsellers. We strive to provide a
            space where knowledge meets tranquility, allowing you to immerse
            yourself in a world of stories, research, and discovery.
            <br />
            <br />
            Whether you're here to explore academic resources, dive into a
            captivating novel, or simply enjoy a quiet reading session, our
            library is the perfect place for you. We also provide digital
            resources, including e-books and journals, so you can access the
            knowledge you seek at any time.
            <br />
            <br />
            Your feedback is essential to us, and we constantly work towards
            enhancing your experience. Join us on this journey of learning and
            exploration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
