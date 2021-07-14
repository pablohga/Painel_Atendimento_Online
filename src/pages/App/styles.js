import styled from "styled-components";
import bg_menu from '../../assets/images/bg_menu1.jpg';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  
`;



export const Main = styled.div`
  width: 100%;
  flex: 1;
  overflow: auto;
  display: flex;
  color: #0b2031;
  background: #fff;
`;

export const HeaderMain = styled.div`
width: 100%;
justify-content: space-between;
display: inline-flex;
/*flex-direction: row;*/
flex-wrap:wrap;


`;

export const LogoContainer = styled.div`

display: inline-block;
/*background-color: red;*/
font-size: 3vw;
text-align: center;
/*padding: 5vw 0vw 5vw 0vw;
min-width:40vw;*/
  
  img {
    width: 250px;
    /*height: 120px;*/
  }

  h1 {
    font-size: 18px;
    margin-left: 20px;
  }
`;

export const LogoutContainer = styled.div`

/*background-color: green;*/
display: inline-block;
margin-right: 0vw;
font-size: 3vw;
text-align: center;
/*padding: 1vw 0vw 5vw 0vw;*/
/*min-width:40vw;*/

  div {
    display: flex;
    flex-direction: column;
    margin-right: 20px;

    h3 {
      font-size: 16px;
    }

    button {
      background: none;
      font-size: 14px;
      opacity: 0.6;
      color: #fff;
      text-align: right;
      transition: all 0.2s;

      &:hover {
        opacity: 0.9;
	  }
	p {
		color: #3d3f42;
	}  
	
    }
  }
`;

export const SubMenu = styled.div`
display: flex;
flex-flow: row wrap;
	height: 10px;
background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)), ${`url(${bg_menu})`};
background-repeat: no-repeat;
background-size: 100%;  
background-position: center; /* Center the image */

justify-content: center;
	  align-content: center;
	/*  flex-grow: 1;*/
	/*width: 50%;*/
	height: 100px;
	background-color: #blue;
	color: #ccc;
	#button1 {
		background-color: #e05353;
		border: none;
		color: white;
		padding: 5px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		margin: 4px 2px;
		cursor: pointer;
		border-radius: 8px;
	  }
	

`;
