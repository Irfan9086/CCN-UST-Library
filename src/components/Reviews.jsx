import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      name: 'Adrey Pachai',
      role: 'Student',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna magna.',
      image: 'path_to_image1.jpg',
    },
    {
      name: 'Maria B',
      role: 'Student',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna magna.',
      image: 'path_to_image2.jpg',
    },
    {
      name: 'John Doe',
      role: 'Student',
      quote: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.',
      image: 'path_to_image3.jpg',
    },
    {
      name: 'Jane Smith',
      role: 'Student',
      quote: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
      image: 'path_to_image4.jpg',
    },
  ];

  return (
    <div className="py-16  text-center">

      <h2 className="text-4xl font-semibold  text-white ">Words From Our Community</h2>
      <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-4"> {/* horizontal gap between cards */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md"> {/* card styling */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <p className="text-lg text-gray-700 mb-4">{testimonial.quote}</p>
              <h4 className="text-xl font-bold text-gray-800">{testimonial.name}</h4>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Reviews;
