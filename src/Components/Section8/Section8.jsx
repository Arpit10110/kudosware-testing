import React from 'react';
import './Section8.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import sec8Img from '../../assets/sec8Img.png';

const Section8 = () => {
  // Sample review data
  const reviews = [
  {
    "name": "Priya Mehta",
    "message": "TinyClo has been a lifesaver for us as new parents! Renting clothes for my baby is so convenient and budget-friendly. The outfits are cute, and the fabric is soft and gentle on my baby's skin.",
    "date": "November 5, 2024",
    "image": "https://img.freepik.com/premium-photo/two-indian-parents-holding-their-daughter-generative-ai_849906-8965.jpg?semt=ais_hybrid"
  },
  {
    "name": "Hannah Schmitt",
    "message": "I love TinyClo! Renting clothes for events has made life so much easier. The designs are adorable, and the process was completely hassle-free. Highly recommended!",
    "date": "May 8, 2020",
    "image": "https://img.freepik.com/premium-photo/shot-indian-parents-holding-their-daughter-generative-ai_849906-8966.jpg"
  },
  {
    "name": "Rohit Verma",
    "message": "Great service! The clothes we rented for our baby were stylish and comfortable. The rental process is smooth, and it's an excellent solution for fast-growing kids.",
    "date": "November 12, 2024",
    "image": "https://thumbs.dreamstime.com/b/indian-family-home-happy-asian-parents-piggyback-their-children-adults-kids-indoor-lifestyle-58687481.jpg"
  },
  {
    "name": "Simran Kaur",
    "message": "Renting baby clothes is practical, and TinyClo executes it perfectly. The quality and delivery exceeded my expectations. I am impressed with the service.",
    "date": "November 15, 2024",
    "image": "https://img.freepik.com/free-photo/kid-playing-with-paper-plane_23-2151582294.jpg"
  },
  {
    "name": "Aditi Sharma",
    "message": "TinyClo has been a blessing! The clothes are high-quality and affordable. I never worry about my baby outgrowing outfits anymore.",
    "date": "October 10, 2024",
    "image": "https://thumbs.dreamstime.com/b/first-time-indian-asian-parent-their-baby-21333191.jpg"
  },
  {
    "name": "Arpit Sharma",
    "message": "Fantastic idea and execution! TinyClo saved us from buying clothes that would only fit for a short while. Highly recommend this service.",
    "date": "September 20, 2024",
    "image": "https://fiftyshadesofgay.co.in/wp-content/uploads/2022/04/padma-iyer.webp"
  }
];


  // Split reviews into groups of 2
  const groupedReviews = [];
  for (let i = 0; i < reviews.length; i += 2) {
    groupedReviews.push(reviews.slice(i, i + 2));
  }

  return (
    <div className="section8">
      <h2>Our Happy Parents</h2>
      <div className="sliderIntro">
        <Carousel
          className="caro"
          autoPlay
          infiniteLoop
          showStatus={false}
          showArrows
          showIndicators 
          showThumbs={false}
          interval={3000}
        >
          {groupedReviews.map((group, groupIndex) => (
            <div key={groupIndex} className="groupsecbox">
              {group.map((review, reviewIndex) => (
                <div key={reviewIndex} className="secbox">
                  <img src={review.image} alt={`${review.name}'s review`} />
                  <div className="sec8cont">
                    <h3>{review.name}</h3>
                    <p>{review.message}</p>
                    <h4>{review.date}</h4>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Section8;
