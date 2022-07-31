import Styled from "styled-components";
export const Container = Styled.div`
  background-color: red;
  min-height: 100vh;
`;

export const Left = Styled.div`
background-color:black;
width:14.3%;
min-height: 100vh;
display:flex;
flex-direction: column;
padding:25px;
img{
    margin-bottom:25px;
}
.icons{
    text-decoration: none;
    color:#fff;
    display:flex;
    align-items: center;
    margin-bottom:13px;
  
}
.icon{
    color:#fff;
    font-size:30px;
    margin-right:10px;
}
`;
