import styled from 'styled-components';

export const Box = styled.div`
padding: 80px 60px;
background: #212121;

width: 100%;


@media (max-width: 1000px) {
	padding: 50px 10px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	max-width: 100%;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: row;
text-align: left;
width: 100%;
justify-content: space-between;
align-items: center;
@media  (min-width:200px) and (max-width:419px) {
	width: 100%;
	padding: 0 10px;
	}
`;

export const Row = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));

@media (min-width:406px) and (max-width:767px) {
flex-direction: column;
}
@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
@media  (min-width:200px) and (max-width:419px) {
display: flex;
flex-direction: row;
grid-gap: 20px;
flex-wrap: wrap;
}
`;

export const FooterLink = styled.a`
color: #fff;
font-size: 2rem;
text-decoration: none;
margin-left: 20px;
&:hover {
	color: red;
	transition: 200ms ease-in;
}
@media (min-width:406px) and (max-width:767px) {
	font-size: 1.5rem;
}
`;

export const Heading = styled.h1`
font-size: 6.5rem;
color: #fff;
margin-bottom: 0px;
font-family: 'Roboto', sans-serif;
@media  (min-width:420px) and (max-width:768px) {
	font-size: 6.5rem;
}
@media (min-width:406px) and (max-width:767px) {
	margin-bottom: 15px;
}
`;

export const Span = styled.div`
font-size: 2rem;

`;
export const Ul = styled.ul`
text-align: left;
padding: 0;
list-style-type: none;
margin-bottom: 0;
display: flex;
flex-direction: row;
@media  (min-width:200px) and (max-width:419px) {
	display: flex;
	flex-direction: row;
	}
`;
export const A = styled.a`
text-align: left;
color: #9A9A9A;
font-size: 2rem;	
font-weight: 400;
text-decoration: none;

@media (min-width:406px) and (max-width:767px) {
	font-size: 6rem;
}
`;

export const Li = styled.li`
color: #9A9A9A;
padding:0;
margin: 0;
margin-left	: 20px;
@media  (min-width:200px) and (max-width:419px) {
	
	font-size: 4rem;
}
@media (min-width:406px) and (max-width:767px) {
	margin-bottom: 20px;
}
`;

export const P = styled.p`
color: #9A9A9A;
font-size: 2rem;
font-weight: 400;
`;