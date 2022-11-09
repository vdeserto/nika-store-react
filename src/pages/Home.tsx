import React from "react";

const cards = [
  {
    image: require("../assets/prime.png"),
    title: "Test title 1",
    text: "Text 1",
    footer: "Footer 1",
  },
  {
    image: require("../assets/eletronics_amazon.png"),
    title: "Test title 2",
    text: "Text 2",
    footer: "Footer 2",
  },
  {
    image: require("../assets/young_on_phone.png"),
    title: "Test title 3",
    text: "Text 3",
    footer: "Footer 3",
  },
];
const carouselItems = [
  {
    pathImage: require("../assets/ebook_amazon_cover.jpg"),
    alt: "Consulte o ebook da Amazon",
  },
  {
    pathImage: require("../assets/amazon_dia_das_maes.jpg"),
    alt: "Veja as ofertas para o dia das mães",
  },
];
class Home extends React.Component {
  render() {
    return (
      <main className="container">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={require("../assets/alexa_amazon_cover.jpg")}
                className="d-block w-100"
                alt="Itens da Alexa"
              />
            </div>
            {carouselItems.map((carouselItem) => (
              <div className="carousel-item">
                <img
                  src={carouselItem.pathImage}
                  className="d-block w-100"
                  alt={carouselItem.alt}
                />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Próximo</span>
          </button>
        </div>

        <div className="align-items-center row row-cols-1 row-cols-md-3 row-cols-sm-2 text-center justify-content-center row-cols-lg-3">
            {cards.map((card) => (
          <div className="col mb-3 mt-5">
              <div className="card">
                <img
                  src={card.image}
                  className="card-img-top rounded"
                  alt="..."
                />
                <div className="card-body align-items-stretch">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">{card.text}</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
          </div>
          ))}
        </div>
      </main>
    );
  }
}
export default Home;
