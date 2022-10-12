import Styled from "styled-components";
export const NavBar = Styled.div`
    overflow: hidden;
    background-color: black;
    position: sticky; 
    top: 0;
    width: 100%;
    height:50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-between;
    padding:10px 0px;
  .navbar--container{
    display:flex;
    flex-direction:row;
    width:100%;
    background-color:red;
    .search--input{

    }
    .navbar--btns{
      text-decoration: none;
      color:#fff;
      display: flex;
    justify-content: center;
      align-items: center;
     margin-left: 30px;
    
  }
  .navbar--user{
    text-decoration: none;
    color:#fff;
    padding:5px;
    border-radius: 5px;
    background-color: grey;
    margin-right:10px;
    align-self:flex-end;
}
  }

`;
