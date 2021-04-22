import { useState } from "react";
import Head from "next/head";
import IconShop from "../components/IconShop";
import Carousel from 'react-elastic-carousel'

const CORREAS = {
  naranja: {
    url: "https://res.cloudinary.com/petportrait/image/upload/v1618489930/carlosenriquedev/Orange-Isofrane-Style-Rubber-Diving-watch-bands-strap_stiojb.jpg"
  },
  naranja2: {
    url: "https://res.cloudinary.com/petportrait/image/upload/v1619017765/carlosenriquedev/Isofrane-Style-Rubber-Diving-watch-bands-strap-6_ry9iti.jpg"
  },
  negra : {
    url: "https://res.cloudinary.com/petportrait/image/upload/v1618489930/carlosenriquedev/Black-Isofrane-Style-Rubber-Diving-watch-bands-strap_tkfz2y.jpg"
  },
  negra2 : {
    url: "https://res.cloudinary.com/petportrait/image/upload/v1619017765/carlosenriquedev/Isofrane-Style-Rubber-Diving-watch-bands-strap-10_j2sclk.jpg"
  },
  azul: {
    url: "https://res.cloudinary.com/petportrait/image/upload/v1618491558/carlosenriquedev/Blue-Isofrane-Style-Rubber-Diving-watch-bands-strap_j554qt.jpg"
  },
  azul2: {
    url: "https://res.cloudinary.com/petportrait/image/upload/v1619022953/carlosenriquedev/Isofrane-Style-Rubber-Diving-watch-bands-strap-1_orwvec.jpg"
  },
  amarilla: {
    url: "https://res.cloudinary.com/petportrait/image/upload/v1619023094/carlosenriquedev/Isofrane-Style-Rubber-Diving-watch-bands-strap-2_pz4t6z.jpg"
  },
  amarilla2: {
    url: "https://res.cloudinary.com/petportrait/image/upload/v1619017766/carlosenriquedev/Isofrane-Style-Rubber-Diving-watch-bands-strap-12_kttgnt.jpg"
  }
}

const Home = () => {

  const [imagenPrincipal, setImagenPrincipal] = useState(CORREAS.naranja.url)

  return (  

    <section className="contenedor__movil">
      <picture className="imagen-principal">
        <img src={imagenPrincipal} alt="Isofrane Watch Strap" />
      </picture>
      <div className="fotos-personas">
        <Carousel itemsToScroll={1} itemsToShow={3}>
          <picture>
            <img 
              src={CORREAS.naranja.url} 
              alt="Isofrane Watch Strap"
              onClick={() => setImagenPrincipal(CORREAS.naranja.url)}
            />
          </picture>
          <picture>
            <img 
              src={CORREAS.naranja2.url} 
              alt="Isofrane Watch Strap"
              onClick={() => setImagenPrincipal(CORREAS.naranja2.url)}
            />
          </picture>
          <picture>
            <img 
              src={CORREAS.negra.url} 
              alt="Isofrane Watch Strap" 
              onClick={() => setImagenPrincipal(CORREAS.negra.url)}
            />
          </picture>
          <picture>
            <img 
              src={CORREAS.negra2.url} 
              alt="Isofrane Watch Strap" 
              onClick={() => setImagenPrincipal(CORREAS.negra2.url)}
            />
          </picture>
          <picture>
            <img 
              src={CORREAS.azul.url} 
              alt="Isofrane Watch Strap"
              onClick={() => setImagenPrincipal(CORREAS.azul.url)}
            />
          </picture>
          <picture>
            <img 
              src={CORREAS.azul2.url} 
              alt="Isofrane Watch Strap"
              onClick={() => setImagenPrincipal(CORREAS.azul2.url)}
            />
          </picture>
          <picture>
            <img 
              src={CORREAS.amarilla.url}
              onClick={() => setImagenPrincipal(CORREAS.amarilla.url)}
            />
          </picture>
          <picture>
            <img 
              src={CORREAS.amarilla2.url}
              onClick={() => setImagenPrincipal(CORREAS.amarilla2.url)}
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
        <h2>Best Rubber Watch Strap</h2>
        <p>The 1968 is a modern take on the famous 1960s ISOfrane watch straps. It has contemporary touches like silicone-free rubber that’s far softer and more durable than the strap of old.
        </p>
        <p>This strap material and design has become very popular in water sports, this Rubber adapts, it does not damage when it spends a long time exposed to different factors such as salt water, fresh water and the sun.
        </p>
        <p>Lux Watch Straps provides you with this ISOfrane Style model, it is resistant, durable and flexible. This silicone rubber is very durable and overall, has good mechanical properties.</p>
      </div>

      <div className="video">
        <video loop controls>
          <source src="https://res.cloudinary.com/petportrait/video/upload/v1619077363/carlosenriquedev/20210421161258_HD_comprimido_m4rckm.mp4" type="video/mp4"/>
        </video>
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
          20mm, 22mm, 24mm
        </p>
        <p>
          100% Waterproof / Water- Resistant 
        </p>
        <p>
          Non-Allergenic/Hypoallergenic
        </p>
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