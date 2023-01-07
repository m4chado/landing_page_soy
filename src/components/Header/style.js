import styled from "styled-components";

export const StyledHeader = styled.header`
	position: fixed;
	z-index: 100;
	width: 100%;
	top: 0;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 1rem;
	background-color: ${({ scroll }) => (scroll ? "rgba(255, 255, 255, 0.7)" : "transparent")};
	transition: 0.5s;

	ul {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 20px;
	}

	a {
		position: relative;
		color: ${({ scroll }) => (scroll ? "black" : "white")};
		padding-bottom: 5px;
		transition: 0.5s;
	}

	a::after {
		content: "";
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 1px;
		bottom: 0;
		left: 0;
		background-color: #000000;
		transform-origin: bottom right;
		transition: transform 0.25s ease-out;
	}

	li:hover a::after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}

	button {
		display: none;
	}

	@media (max-width: 768px) {
		ul {
			display: none;
		}
		button {
			display: unset;
		}
	}
`;

export const StyledBurger = styled.div`
	width: 2rem;
	height: 2rem;
	right: 20px;
	z-index: 20;
	display: none;
	@media (max-width: 768px) {
		display: flex;
		justify-content: space-around;
		flex-flow: column nowrap;
	}
	div {
		width: 2rem;
		height: 2px;
		background-color: var(--black);
		transform-origin: 1px;
		transition: all 0.3s linear;
		&:nth-child(1) {
			transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
		}
		&:nth-child(2) {
			transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
			opacity: ${({ open }) => (open ? 0 : 1)};
		}
		&:nth-child(3) {
			transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
		}
	}
`;

export const StyledNav = styled.ul`
	list-style: none;
	display: none;
	flex-flow: row nowrap;

	@media (max-width: 768px) {
		top: 71px;
		display: flex;
		flex-flow: column nowrap;
		background-color: var(--black);
		position: fixed;
		transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
		right: 0;
		height: 100vh;
		width: 80%;
		padding-top: 1rem;
		transition: transform 0.3s ease-in-out;

		li {
			height: 50px;
			width: 100%;
		}
		li a {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 100%;
			color: #fff;
		}
	}
`;
