import qrCode from "../../images/image-qr-code.png";

const CardImage = () => {
  return (
    <div className="card__image">
      <img src={qrCode} alt="le qr code" />
    </div>
  );
};

export default CardImage;
