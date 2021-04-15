import { useState } from "react";
import Head from "next/head";
import IconShop from "../components/IconShop";
import Carousel from 'react-elastic-carousel'

const Home = () => {

  const [imagenPrincipal, setImagenPrincipal] = useState("https://res.cloudinary.com/petportrait/image/upload/v1618489930/carlosenriquedev/Orange-Isofrane-Style-Rubber-Diving-watch-bands-strap_stiojb.jpg")

  return (  

    <section className="contenedor__movil">
      <picture className="imagen-principal">
        <img src={imagenPrincipal} alt="Isofrane Watch Strap" />
      </picture>
      <div className="fotos-personas">
        <Carousel itemsToScroll={1} itemsToShow={3}>
          <picture>
            <img 
              src="https://res.cloudinary.com/petportrait/image/upload/v1618489930/carlosenriquedev/Orange-Isofrane-Style-Rubber-Diving-watch-bands-strap_stiojb.jpg" 
              alt="Isofrane Watch Strap"
              onClick={() => setImagenPrincipal("https://res.cloudinary.com/petportrait/image/upload/v1618489930/carlosenriquedev/Orange-Isofrane-Style-Rubber-Diving-watch-bands-strap_stiojb.jpg")}
            />
          </picture>
          <picture>
            <img 
              src="https://res.cloudinary.com/petportrait/image/upload/v1618489930/carlosenriquedev/Black-Isofrane-Style-Rubber-Diving-watch-bands-strap_tkfz2y.jpg" 
              alt="Isofrane Watch Strap" 
              onClick={() => setImagenPrincipal("https://res.cloudinary.com/petportrait/image/upload/v1618489930/carlosenriquedev/Black-Isofrane-Style-Rubber-Diving-watch-bands-strap_tkfz2y.jpg")}
            />
          </picture>
          <picture>
            <img 
              src="https://res.cloudinary.com/petportrait/image/upload/v1618489930/carlosenriquedev/Orange-Isofrane-Style-Rubber-Diving-watch-bands-strap_stiojb.jpg" 
              alt="Isofrane Watch Strap"
              onClick={() => setImagenPrincipal("https://res.cloudinary.com/petportrait/image/upload/v1618489930/carlosenriquedev/Orange-Isofrane-Style-Rubber-Diving-watch-bands-strap_stiojb.jpg")}
            />
          </picture>
        </Carousel>
      </div>
      <div className="titulo">
        <h1>ISOFRANE STYLE</h1>
        <h2>Watch Strap</h2>
      </div>

      <div className="contenedor__cta">
        <a href="https://www.luxwatchstraps.com/products/lux-black-rubber-diving-watch-band-steel-buckle-strap-isofrane-style">
        <div className="precio">
          <p>$59.99</p>
          <h3><sup>$</sup>26</h3>
          <a href="https://www.luxwatchstraps.com/products/lux-black-rubber-diving-watch-band-steel-buckle-strap-isofrane-style">
            Buy
          </a>
        </div>
        </a>
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
        <Carousel itemsToScroll={1} itemsToShow={1}>
          <picture>
            <img src="https://res.cloudinary.com/petportrait/image/upload/v1618475860/carlosenriquedev/lux_isofrane_style_watch_band-black_hgtsqn.jpg" alt="isofrane style watch straps" />
          </picture>
          <picture>
            <img src="https://res.cloudinary.com/petportrait/image/upload/v1618475860/carlosenriquedev/lux_isofrane_style_watch_band-orange_flfrsp.jpg" alt="isofrane style watch straps" />
          </picture>
          <picture>
            <img src="https://res.cloudinary.com/petportrait/image/upload/v1618475860/carlosenriquedev/lux_isofrane_style_watch_band-blue_ijcpne.jpg" alt="isofrane style watch straps" />
          </picture>
          <picture>
            <img src="https://res.cloudinary.com/petportrait/image/upload/v1618475860/carlosenriquedev/lux_isofrane_style_watch_band-yellow_yho2wi.jpg" alt="isofrane style watch straps" />
          </picture>
        </Carousel>
      </div>

      <div className="texto-detalles">
        <h2>Especifications</h2>
        <p>
          <span>Material:</span><br></br>
          High-Quality Silicone Rubber
        </p>
        <p>
          <span>Strap Length:</span><br></br>
          Standard length of approx. 133mm / 
          77mm (excluding buckle) Approx 8 1/4"
        </p>
        <p>
          <span>Physical Strap Length:</span><br></br>
          Approx 210mm (excluding buckle)  
        </p>
        <p>
          <span>Effective Strap Length:</span><br></br>
          Approx 195mm 
        </p>
        <p>
          <span>Thickness:</span><br></br>
          At Lug: 5.5mm & at End: 3.5mm
          316L Stainless Steel  Buckle / Double keeper
        </p>
        <p>
          <span>Sizes:</span><br></br>
          18mm, 20mm, 22mm, 24mm
        </p>
        <p>
          100% Waterproof / Water- Resistant 
          Non-Allergenic/Hypoallergenic
        </p>
      </div>

      <div className="contenedor__cta">
        <a href="https://www.luxwatchstraps.com/products/lux-black-rubber-diving-watch-band-steel-buckle-strap-isofrane-style">
        <div className="precio">
          <p>$59.99</p>
          <h3><sup>$</sup>26</h3>
          <a href="https://www.luxwatchstraps.com/products/lux-black-rubber-diving-watch-band-steel-buckle-strap-isofrane-style">
            Buy
          </a>
        </div>
        </a>
      </div>

      <div className="footer">
        <picture className="badgets">
          <img src="https://res.cloudinary.com/petportrait/image/upload/v1617635144/carlosenriquedev/badgets_cy2j5q.png" alt="badgets" />
        </picture>
        <h3><sup>$</sup>2 Shipping USA</h3>
        <p>3-5 Business days for delivery</p>
        <h3>International Shipping</h3>
      </div>
      <div className="logo">
        <picture>
          <img src="https://res.cloudinary.com/petportrait/image/upload/v1617635781/carlosenriquedev/Logo-Lux_igiqop.png" alt="Lux Watch Straps" />
        </picture>
      </div>
      <div className="copyright">
        <picture>
          <img src="https://res.cloudinary.com/petportrait/image/upload/v1616406476/yourpetisart/secure-checkout-bw_jjkxgu.jpg" alt="payments" />
        </picture>
        <p>© Since 2013 - LUX Watch Straps</p>
      </div>
    </section>

  );
}
 
export default Home;