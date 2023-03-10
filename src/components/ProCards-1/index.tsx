import { StyledCard } from "./style";
import { Carousel } from "react-bootstrap";
import { IProcedureObj } from "../../data";
import { useContext } from "react";
import { GlobalContext } from "../../context";

const Card = (proceObj: IProcedureObj, index: number) => {
	const { setCurrentProcedure, setSliderModal, setTextModal, textModal } =
		useContext(GlobalContext);

	return (
		<StyledCard key={index}>
			<Carousel fade>
				{proceObj.img.map((img, index) => (
					<Carousel.Item interval={7000} key={index}>
						<img className="slideImg" src={img} alt="" />
					</Carousel.Item>
				))}
			</Carousel>
			<div className="cardInfo">
				<h3>{proceObj.name}</h3>
			</div>
			<div className="btnBox">
				<button
					onClick={() => {
						setCurrentProcedure(proceObj);
						setSliderModal(true);
					}}
				>
					Fotos
				</button>
				<button
					onClick={() => {
						setCurrentProcedure(proceObj);
						setTextModal(true);
						console.log(textModal);
					}}
				>
					Sobre
				</button>
			</div>
		</StyledCard>
	);
};

export default Card;
