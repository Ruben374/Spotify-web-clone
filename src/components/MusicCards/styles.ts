import Styled from "styled-components";

export const Container = Styled.div`
width:100%;
.music--card--top{
    flex:1;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    padding:15px 0px;
    .card--container--name{
        color:white;
        font-weight:bold;
        font-size:25px;
    }
    .see--all{
        color:grey;
        opacity:1;
        text-decoration:none;
        font-size:15px;
    }
}
.music--cards--cards{
  flex:1;
  background-color:blue;  
  .card{
    width:20%;
    background-color:red;
    height:250px;
  }
}
`;
