import Styled from "styled-components";
export const Right = Styled.div`
background-color:blue;
flex:1;
height:100vh;
display:flex;
flex-direction: column;
overflow: hidden;
.playlist--container{
  .navbar{
    overflow: hidden;
    background-color: #333;
    position: sticky; 
    top: 0;
    width: 100%;
    height:40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-between;
    padding:10px 0px;
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

  overflow: auto;
  background-color:red;
 flex:1;
 align-items:center;
 justify-content:center;
 
 .playlist--card--container--top{

 }
 .playlist--card--container{
  background-color:green;
  .playlist--card{
    width:200px;
    height:500px;
    background-color:white;
  }
}

}

`;
