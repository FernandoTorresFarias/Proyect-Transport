
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css';

const MySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay : true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed : 3000,

    responsive: [
      {
        breakpoint: 1024, // Pantallas más grandes
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600, // Pantallas medianas
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480, // Pantallas pequeñas
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="media/SLIDER-1.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="media/SLIDER-2.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="media/SLIDER-3.jpg" alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default MySlider;
