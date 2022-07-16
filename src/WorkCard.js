import "./WorkCard.css";

function WorkCard(props) {
  return (
    <div
      className="work-card-container">
      <h1 className="work-card-title">
        {props.name ? props.name : "Project Name"}
      </h1>
      <div
        className="work-card-image-container"
        onClick={props.onClick}>
        <img alt={props.name} className="work-card-image" src={props.img[0]}></img>
      </div>
    </div>
  );
}

export default WorkCard;


      // <h2 className="work-card-subtitle">
      //   {props.description ? props.description : "Description"}
      // </h2>