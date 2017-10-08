import styled from 'styled-components';

const WrapperSide = styled.div`
top:119px;
position: relative;
   ul{
    margin: 0;
    list-style: none;
    width:250px;
    padding: 0;
   }
   ul li {
    height: 5.5vh;
    line-height: 5.5vh;
    font-size: 3.5vh;
    color:hsla(0,0%,100%,.5);
    text-decoration: none;
    padding: 0 19px;
    margin-bottom: 2px;
    transition:  transform .2s ease-out 0s;
   }
   ul li div{
    transition:  transform .2s ease-out 0s;
   }
   ul li:hover div{
      transform: translateX(20px);
      
   }
   li.selected{
      background: white;
      border-radius:2px;
      color:rgba(47,50,59,0.8);
   }
`;

export default WrapperSide;