import Head from "next/head";

const Home = () => {
  return (  

    <section className="contenedor__movil">
      <picture className="imagen-principal">
        <img src="https://res.cloudinary.com/petportrait/image/upload/v1617372924/carlosenriquedev/Orange-Isofrane-Style-Rubber-Diving-watch-bands-strap_clry78.jpg" alt="Isofrane Watch Strap" />
      </picture>
      <div className="titulo">
        <h1>ISOFRANE STYLE</h1>
        <h2>Watch Strap</h2>
      </div>
      <div className="contenedor__cta">
        <div className="precio">
          <p>$59.99</p>
          <h3>$26</h3>
          <div className="boton">+</div>
        </div>
      </div>
      <div className="texto-principal">
        <h2>Best Diving Watch Strap</h2>
        <p>The silicone strap has a vintage OMEGA look from the 60s and 70s with a bevy of modern features like the high-end heavy buckle and safety handle.
        </p>
        <p>This strap material and design has become very popular in water sports, this rubber-Silicon adapts, it does not damage when it spends a long time exposed to different factors such as salt water, fresh water and the sun. Heat resistant waterproofing material.
        </p>
        <p>LUX WACTH STRAPS provides you with this Isofrane Style model, it is resistant, durable and flexible. This Silicone Rubber is very durable and overall, has good mechanical properties.</p>
      </div>
      <div className="imagenes-correa">
        <picture>
          <img src="https://res.cloudinary.com/petportrait/image/upload/v1617378910/carlosenriquedev/lux_isofrane_style_watch_band-orange_uhfmfw.png" alt="isofrane style watch straps" />
        </picture>
      </div>
    </section>

  );
}
 
export default Home;