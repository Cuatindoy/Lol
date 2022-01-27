import styled from "styled-components";

export const NavbarContainer = styled.div`
    margin: 0;
    padding: 0;
    margin-left: -0px;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-right: 0px;


text-decoration: none;
width: 100%;
height: 80px;
position: sticky;
top: 0;
z-index: 99;
background-color: #fd7272;
`;
export const NavbarWrapper = styled.div`
margin: auto;
width: 100%;
max-width: 1300px;
height: 100%;
align-items: center;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;

export const IconLogo = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
align-items: center;
font-family: "Oswald";
font-size: 1.2rem;
color: #000000;
paddin-left: 2rem; 
`;

export const Menu = styled.ul`
height: 100%;
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 960px){
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    flex-direction: column;
    transition: 0.5s all ease-in;
    background-color: rgba(212, 128, 128, 0.5);
}
`;

export const MenuItem = styled.li`

height: 100%;
padding: 0.5rem 1.5rem;
display: flex;
justify-content: center;
align-items: center;
font-family: 1.2rem;
font-size: 'Oswald';
font-weight: 400;

&:hover{
    background:	#ffb6c1;
    border-bottom: 0.3rem solid #000000;
    transition: 0.4s ease-in;
    border-radius: 5px; 
}

@media screen and (max-width: 960px){
    width: 100%;
    height: 75px;
}

`;

export const MenuItemLink = styled.a`
text-decoration: none;
color: #000000;
text-transform: uppercase;
`;

export const IconLogoMobile = styled.div`
display: none;

@media screen and (max-width: 960px){
    display: flex;
    color: #000000;
    font-size: 2rem;
    padding-right: 1rem;
}
`;