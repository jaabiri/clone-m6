import styled from 'styled-components';

const WrapperCard = styled.section`
width: ${props => props.isLarge||props.page ? '100%' : '50%'};
.card__tile{
  height: ${props => props.isLarge ? '280px' : '130px'};
  margin-right:20px;
  margin-bottom:20px;
  background-color: white;
  position: relative;
  transition: transform 0.2s 0.1s ease-in,z-index 0.2s 0.1s ease-in ;
 }
   .card__tile:hover{
    background-color: white;
    z-index:5;
    transform: scale(1.1);
    .tile__image{
      top:5px;
      left:5px;
      right: 5px;
      bottom: 0;
     }
     .tile__label{
      opacity: 1;
   }
   }
   .tile__image{
    position: absolute;
    top:0px;
    left:0px;
    right: 0px;
    bottom: 0px;
    transition: top 0.2s 0.1s ease-in,left 0.2s 0.1s ease-in,right 0.2s 0.1s ease-in;
   }
   .tile__thumb{
      width:100%;
      height: 100%;
      vertical-align: middle;
   }
   .tile__label{
      position: absolute;
      bottom:-20%;
      left:0;
      right:0;
      height: ${props => props.isLarge ? '20%' : '30%'};;
      background: white;
      text-align: left;
      padding-left: 20px;
      color: #2E3C4B;
      opacity: 0;
      transition: opacity 0.2s 0.1s ease-in;
      .tile__title{
         dispaly:inline-block;
         font-size: ${props => props.isLarge ? '24px' : '12px'};
         margin-top:5px;
      }
      .tile__subtitle{
        font-size:  ${props => props.isLarge ? '12px' : '8px'};
        color: #4C5054;
      }
   }
 
`;

export default WrapperCard;