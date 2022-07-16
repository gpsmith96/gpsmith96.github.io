import data from "./Data";
import "./WorkCard.css";

function Quiz_App(props) {
  return (
    <div className="work-card-container">
    <h1>{data.projects[0].title}</h1>
    <h3>{data.projects[0].description}</h3>
    {data.projects[0].imageSrc.map((image,index) => (
      <div key={index} className="work-card-image-container">
        <img alt={image} className="work-card-image" src={"../" + image}></img>
      </div>
      ))}
    </div>
  );
}

export default Quiz_App;
