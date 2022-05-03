import CardBody from "./components/CardBody";
import CardImage from "./components/CardImage";
import CardTitle from "./components/CardTitle";

const Card = () => {
  return (
    <div className="card">
      <CardImage />
      <CardTitle />
      <CardBody />
    </div>
  );
};

export default Card;
