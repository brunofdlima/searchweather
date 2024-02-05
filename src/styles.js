import styled from 'styled-components';
import img from './pictures/wallpapper.jpg';

export const Content = styled.div`
height: 100vh;
background: url(${img});
background-size: cover;
font-family: 'Roboto Slab', serif;
color: white;
display: flex;
justify-content: center;
align-items: center;
`;

export const Form = styled.div`
width: 50rem;
padding: 40px 15px;
background-color: #386179;
font-family: 'Roboto Slab', serif;
border-radius: 0.625rem;
align-items: center;
`;

export const Before = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export const Title = styled.h1`
margin: 0.625rem 0.625rem;
font-size: 1.6rem;
font-weight: bold;
justify-content: center;
`;

export const Input = styled.input`
width: 15.5rem;
height: 2.188rem;
margin-left: 0.625rem;
border: none;
border-radius: 0.625rem;
`;

export const Button = styled.button`
width: 2.188rem;
height: 2.188rem;
margin: 0.625rem 0;
cursor: pointer;
margin-left: 0.313rem;
border: none;
border-radius: 3.125rem;
`;

export const Response = styled.div`
margin: 1.25rem 10px;
`;

export const ResponseTitle = styled.div`
font-weight: bold;
text-transform: uppercase;
font-size: 1.25rem;
margin: 1.25rem;
`;

export const ResponseTemp = styled.div`
display: flex;
justify-content: space-between;
@media (max-width: 680px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Left = styled.div`
display: flex;
margin-top: 0.2rem;
`;

export const Equal = styled.div`
font-weight: bold;
align-items: start;
display: flex;
align-items: center;
justify-content: space-between;
@media (max-width: 680px) {
  margin-top: 30px;
}
`;

export const Temp = styled.div`
display: flex;
flex-direction: column;
margin-top: 0.25rem;
`;

export const Temp1 = styled.div`
font-weight: bold;
font-size: 2.5rem;
`;