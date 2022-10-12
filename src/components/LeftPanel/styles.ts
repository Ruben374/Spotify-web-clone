import Styled from "styled-components";


export const Left = Styled.div`

background-color:bla
width:20%;
height: 100vh;

display:flex;
flex-direction: column;
overflow: hidden;
.Left{
    padding:20px 25px;
    border-radius:10px;
    background-color:#212121;
    height:70vh;
}
#list{
    margin-top:20px;
}
img{
}
.icons{
    text-decoration: none;
    color:#fff;
    display:flex;
    align-items: center;
    margin-bottom:13px;
    flex-wrap:nowrap;
    flex-direction:row;
    flex-wrap:nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 13px;
    font-weight: bold;
}
.icon{
    color:#fff;
    font-size:30px;
    margin-right:10px;
}
.playlists--container{
    display:flex;
    align-items: flex-start;
    flex-direction:column;
    padding:10px 0; 
    border-top:1px solid grey;
    height:200px;
    overflow: auto;
}
.playlists--container::-webkit-scrollbar {
    width: 5px;             
  }
  .playlists--container::-webkit-scrollbar-thumb {
    background-color: blue;   
    border-radius: 25px;       
  }
.playlists--container a{
    text-decoration: none;
    color:#fff;
    margin-bottom:10px;
    font-size: 14px;
}
`;

