import "../styles1/FeatureCard.css";

function FeatureCard({ img, title, description }) {
  return (
    <div className="featurecard-title" >
      <h3 style={{ color: "#d3caca", fontSize: "28px" }} className="featurecard-title">{title}</h3>
      <p style={{ color: "#d3caca", margin: "20px", fontSize: "20px" }}>
        {description}
      </p>
      <div className="featurecard">
        <div className="featurecard-img">
          <img src={img} alt={title} className="feature-img" />
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
