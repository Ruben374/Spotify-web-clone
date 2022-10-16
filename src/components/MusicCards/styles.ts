import Styled from "styled-components";

export const Container = Styled.div`
width:100%;
.music--card--top{
    flex:1;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    padding:10px 0px;
    .card--container--name{
        color:white;
        font-weight:bold;
        font-size:25px;
    }
    .see--all{
        color:grey;
        opacity:1;
        text-decoration:none;
        font-size:20px;
        font-weight:bold;
    }
}
.music--cards--cards{
  flex:1; 
  display:flex;
  flex-direction:row;
  justify-content:space-between;
 
  .card{
    elevation: 80deg;
    width:16%;
    height:280px;
    display:flex;
    flex-direction:column;
   background-color:rgba(18, 18, 18,0.7);
    border-radius:8px;
  align-items:center;
    padding:10px 10px;
    .cardTop{
width:100%;
height:50%;
background-color:rgba(18, 18, 18,1);
padding:15px 10px 25px 10px;
border-radius:20px;
display:flex;
align:items:center;
justify-content:center;
    img{
     width:100%; 
     height:100%;
     margin-bottom:10px;
     elevation: 80deg;
    }
    }
    .cardBottom{
        width:100%;
        display:flex;
        flex-direction:column;
        .title{
font-size:17px;
font-weight:bold;
margin-top:5px;
color:#fff;
        }
        .description{
            font-size:15px;
            font-weight:bold;
            margin-top:5px;
                    }
    }
  }
}
`;
