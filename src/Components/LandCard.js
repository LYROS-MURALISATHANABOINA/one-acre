import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../App.css";

const LandCard = ({ land }) => {

  const {
    land_media,
    division_info,
    price_per_acre_crore,
    total_land_size_in_acres,
  } = land;

  const landImages = land_media
    .filter((media) => media.media_type === "image")
    .map((media) => media.image);

  const locationDetails = () => {
    const mandal = division_info.find((info) => info.division_type === "mandal")?.name;
    const district = division_info.find((info) => info.division_type === "district")?.name;

    if (mandal && district) {
      return `${mandal}, ${district} (dt)`;
    }
    return "Location not available";
  };

  const formatLandSize = (acres, guntas) => {
    if (acres === 0) {
      return `${guntas} Guntas`;
    } else {
      const totalAcres = acres + guntas / 40;
      return `${totalAcres.toFixed(2)} Acres`;
    }
  };

  const formatPrice = (crore, lakh) => {
    if (crore === 0) {
      return `${lakh} lakh`;
    } else {
      const totalcrore = crore + lakh / 100;
      return `${totalcrore.toFixed(2)} crore`;
    }
  };



  return (
    <div className="land-card">
      <Carousel
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
     >
        {landImages.length > 0 ? (
          landImages.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`Land Image ${index + 1}`} />
            </div>
          ))
        ) : (
          <div>
            <img
              src="https://via.placeholder.com/500"
              alt="No Image Available"
            />
          </div>
        )}
      </Carousel>
      <div className="land-details">
        <strong><p>₹ {formatPrice(price_per_acre_crore.crore, price_per_acre_crore.lakh)} • {formatLandSize(total_land_size_in_acres.acres, total_land_size_in_acres.guntas)}</p></strong>
        <p> {locationDetails()}</p>
      </div>
    </div>
  );
};

export default LandCard;
