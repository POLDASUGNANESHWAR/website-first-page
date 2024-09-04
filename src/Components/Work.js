import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "When I'm on a location,I pick a restaurant that's close and private and eat all my meals there.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Healthy eating is a way of life, so it's important to establish routines that are simple,realistically,and ultimately livable",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "The customer is very happy to be followed.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Understand,when you eat meat, that something did die, You have an obligation to value it-not just the sirloin but also all those wonderful tough little bits.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;