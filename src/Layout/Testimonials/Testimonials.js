import React from "react";
import "./Testimonials.scss";
import Card from "./Card";
import image1 from "./../../assets/images/avatar-anisha.png";
import image2 from "./../../assets/images/avatar-ali.png";
import image3 from "./../../assets/images/avatar-richard.png";
import image4 from "./../../assets/images/avatar-shanai.png";
import AliceCarousel from "react-alice-carousel";

const Testimonials = () => {
  const items = [
    <Card
      img={image1}
      name="Anisha Li"
      content="Manage has supercharged our team’s workflow. The ability to maintain 
  visibility on larger milestones at all times keeps everyone motivated."
    />,
    <Card
      img={image2}
      name="Ali Bravo"
      content="We have been able to cancel so many other subscriptions since using 
  Manage. There is no more cross-channel confusion and everyone is much 
  more focused."
    />,
    <Card
      img={image3}
      name="Richard Watts"
      content="Manage allows us to provide structure and process. It keeps us organized 
  and focused. I can’t stop recommending them to everyone I talk to!"
    />,
    <Card
      img={image4}
      name="Shanai Gough"
      content="Their software allows us to track, manage and collaborate on our projects 
  from anywhere. It keeps the whole team in-sync without being intrusive."
    />,
  ];

  const responsive = {
    0: {
      items: 1,
    },
    800: {
      items: 2,
    },
    1500: {
      items: 3,
    },
  };

  return (
    <div className="testimonials">
      <h2>What they’ve said</h2>
      <div className="cards-container">
        <AliceCarousel
          mouseTracking
          items={items}
          duration={1000}
          autoPlay={false}
          startIndex={1}
          animationType="fadeout"
          fadeOutAnimation={true}
          mouseDragEnabled={true}
          playButtonEnabled={true}
          responsive={responsive}
          disableDotsControls={true}
          infinite={true}
          paddingLeft="1rem"
          paddingRight="1rem"
        />
      </div>
      <button className="rounded-orange-button">Get Started</button>
    </div>
  );
};

export default Testimonials;
