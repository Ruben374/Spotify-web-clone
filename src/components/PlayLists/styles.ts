import Styled from "styled-components";
export const PlaylistContainer = Styled.div`
flex:1;
padding: 0px 10px;
overflow:auto;
`;
export const Playlists = Styled.div`
border-radius:1%;
background: linear-gradient(0deg, #090909,#14c9cb  5000%) no-repeat;
overflow:auto;
height:70vh;
padding: 20px;

::-webkit-scrollbar {
    width: 15px; 
}
::-webkit-scrollbar-thumb {
    background-color: gray;         
}
`;

export const UserPlaylists = Styled.div`
width:100%;
display:flex;
flex-direction:column;
.title{
font-size:35px;
color:#fff;
font-weight:bold;
}
}
`;
export const ItensContainer = Styled.div`
flex:1;
  display:flex;
  flex-direction: row;
  flex-wrap:wrap;
  align-items:center;
justify-content:space-between;
padding-bottom:20px;
`;
export const Item = Styled.div`
min-width:30%;
height:80px;
background-color:#5D5E61;
margin-top:10px;
border-radius:10px;
display:flex;
flex-direction:row;
align-items:center;

img{
  width:80px;
  height:80px;
  border-top-left-radius:10px;
  border-bottom-left-radius:10px;
}
span{
  width:100%;
  color:white;
  margin-left:15px;
  font-weight:bold;
  font-size:15px;
 
  
}


`;

