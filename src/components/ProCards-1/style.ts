import styled from "styled-components";

export const StyledCard = styled.li`
	width: 45%;
	min-width: 165px;
	max-width: 300px;
	border-radius: 10px;
	overflow: visible;
	background-color: #fff;
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding: 10px;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

	@media (min-width: 720px) {
		height: 388px;
	}

	.carousel {
		width: 150px;
		height: 150px;
		border-radius: 8px;
		overflow: hidden;
		box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

		@media (min-width: 720px) {
			width: 280px;
			height: 280px;
		}
	}

	.carousel-control-prev,
	.carousel-control-next,
	.carousel-indicators {
		display: none;
	}

	.carousel-slide {
		overflow: hidden;
		border-radius: 8px;
	}

	.carousel-item {
		overflow: hidden;
		width: 100%;
		height: 100%;
		max-height: 300px;
		border-radius: 8px;
	}

	.slideImg {
		width: 150px;
		height: 150px;
		position: relative;
		border-radius: 8px;

		@media (min-width: 720px) {
			width: 280px;
			height: 280px;
		}
	}

	.cardInfo {
		height: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		h3 {
			width: 100%;
			height: 80px;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 2px;
			font-size: 1.25rem;
			text-align: center;
			font-family: var(--font-secundary);
			text-transform: uppercase;
			color: var(--dark-brown);
		}
	}

	.btnBox {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		margin: 0 auto;
		gap: 2px;
		border-radius: 8px;
		overflow: hidden;

		button {
			padding: 5px;
			width: 50%;
			border: none;
			color: #fff;
			background-color: var(--pink);
			transition: 0.5s;

			&:nth-child(1) {
				border-radius: 8px 0px 0px 8px;
			}

			&:nth-child(2) {
				border-radius: 0px 8px 8px 0px;
			}
		}

		button:hover {
			background-color: rgba(212, 158, 141, 0.8);
		}
	}
`;
