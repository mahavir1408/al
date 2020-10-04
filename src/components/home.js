import React from "react";
import Jumbotron from "./jumbotron";
const imagesPath = process.env.PUBLIC_URL + "/images";

const Home = () => {
  const arr = [...Array(15).keys()].map((i) => i + 1);
  const images = [
    { id: 1, name: "image1", url: `${imagesPath}/1.png` },
    { id: 2, name: "image2", url: `${imagesPath}/1.png` },
    { id: 3, name: "image3", url: `${imagesPath}/1.png` },
    { id: 4, name: "image4", url: `${imagesPath}/1.png` },
    { id: 5, name: "image5", url: `${imagesPath}/1.png` },
  ];
  return (
    <main role="main">
      <Jumbotron />
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            {arr.map((item, i) => (
              <div key={i} className="col-md-3">
                <div className="card mb-4 shadow-sm">
                  <img
                    src={`${imagesPath}/1.png`}
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="400"
                    focusable="false"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                  />
                  <div className="card-body">
                    <p className="card-text">Test image</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
