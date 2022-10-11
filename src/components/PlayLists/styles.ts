import styled from "styled-components";
import Styled from "styled-components";
export const PlaylistContainer = Styled.div`
flex:1;
padding: 0px 10px;
overflow:auto;
`;
export const Playlists = Styled.div`
border-radius:1%;
background-color:orange;
overflow:auto;
height:80vh;

::-webkit-scrollbar {
    width: 15px; 
}
::-webkit-scrollbar-thumb {
    background-color: gray;         
  }


`;
