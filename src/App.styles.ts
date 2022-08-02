import Styled from "styled-components";
export const Container = Styled.div`
  background-color: red;
  display:flex;
  align-items: center;
  justify-content: space-between;

`;

export const Left = Styled.div`
background-color:black;
width:14.5%;
min-width:6%;
max-width:26%;
min-height: 100vh;
display:flex;
flex-direction: column;
padding:25px;
resize: horizontal;
overflow: hidden;
#list{
    margin-top:20px;
}
img{
    margin-bottom:25px;
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
}
.icon{
    color:#fff;
    font-size:30px;
    margin-right:10px;
}
`;
export const Right = Styled.div`
background-color:blue;
flex:1;
min-height: 100vh;
display:flex;
padding:25px;
`;
