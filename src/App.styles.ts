import Styled from "styled-components";
export const Container = Styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
`;

export const Right = Styled.div`
background-color:blue;
flex:1;
height:100vh;
display:flex;
flex-direction: column;
overflow: auto;


.navbar{
    overflow: hidden;
    background-color: #333;
    position: fixed;
    top: 0;
    width: 100%;
    height:40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-between;
    padding:10px 30px;
.navbar--leftcontainer{
    display: flex;
    flex-direction: row;
    .navbar--arrowbtn{
        text-decoration: none;
        color:#fff;
        padding:3px;
        border-radius: 50%;
        background-color: grey;
        display: flex;
      justify-content: center;
        align-items: center;
        margin-right:20px;
    }
    .navbar--playlistbtn{
        text-decoration: none;
        color:#fff;
        padding:10px;
        border-radius: 5px;
        background-color: grey;
        display: flex;
      justify-content: center;
        align-items: center;
       margin-left: 10px;
    }
    .navbar--btns{
        text-decoration: none;
        color:#fff;
        display: flex;
      justify-content: center;
        align-items: center;
       margin-left: 30px;
    }
}
   
  .navbar--rightcontainer{
    .navbar--user{
        text-decoration: none;
        color:#fff;
        padding:5px;
        border-radius: 5px;
        background-color: grey;
       
    }
  }
}
`;
