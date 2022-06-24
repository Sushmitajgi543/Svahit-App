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
flex-direction: column;
text-align: left;
`;

export const Row = styled.div`
display: flex;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 60px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 2rem;
text-decoration: none;

&:hover {
	color: red;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 2.5rem;
color: #fff;
margin-bottom: 40px;
font-weight: bold;
`;

export const Span = styled.div`
font-size: 2rem;

`;
export const Ul = styled.ul`
list-style: none;
margin-bottom: 0;
`;
export const A = styled.a`
color: #fff;
font-size: 2rem;
text-decoration: none;

&:hover {
	color: red;
	transition: 200ms ease-in;
}
`;

export const Li = styled.li`
color: #fff;
`;