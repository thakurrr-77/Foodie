function Carousel() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="../assets/corousel/burger.jpg" style={{objectFit:"cover"}}  className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="../assets/corousel/pizza.jpg" style={{objectFit:"contain",height:"60vh !important",width:"100vw"}} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="../assets/corousel/chicken.jpg" style={{objectFit:"cover"}} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
