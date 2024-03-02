import React, {useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Card, Modal} from "react-bootstrap";
import {certificationData} from '../Data/certificationData';
import '../assets/css/Certification.css';
import '../assets/css/Sliders.css';


const GalleryPrevArrow = ({ currentSlide, slideCount, ...props }) => {
    const { onClick } = props;

    return (
      <div {...props} className="custom-prevArrow" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        </svg>
      </div>
    );
  };
  const GalleryNextArrow = ({ currentSlide, slideCount, ...props }) => {
    const { onClick } = props;

    return (
      <div {...props} className="custom-nextArrow" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
        </svg>
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <GalleryNextArrow />,
    prevArrow: <GalleryPrevArrow />,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3 
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        }
      ]
  };



const Certification = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    
    const openModal = (imageName) => {
        setShowModal(true);
        setSelectedImage(imageName);
      };

      const closeModal = () => {
        setShowModal(false);
        setSelectedImage(null);
      };

   
    return (
        <section id="third" className="special  separator">
        <header className="major"><h2>Certificates & Badges</h2></header>
        <Slider {...settings}>
      {certificationData.map((cert, index) => (
        <>
    <div className="card reactive" key={cert.id}>
      <Card className="cardBody" onClick={() => openModal(cert.image)}>
      {cert.badge?  (
      <>
       <Card.Body>
      <Card.Img src={cert.badge} /></Card.Body></>) : (
              <Card.Body>
              <Card.Title className='title'>{cert.certification}</Card.Title>
              <Card.Subtitle className="mb-3 text-muted">{cert.institution}</Card.Subtitle>
              <Card.Text>{cert.completed}</Card.Text>
             </Card.Body>
      ) }
</Card>
  </div>

  <Modal show={showModal}  onHide={closeModal} className="customModal" backdrop="false">
      <Modal.Body className='modal-body'>

       <img
                    src={selectedImage}
                    alt={'img'}                 
                  />
                  <button className="modal-close" onClick={closeModal}>&times;</button>

      </Modal.Body>
  </Modal>
</>
    ))}
    </Slider>
</section>
    );
};  

export default Certification;