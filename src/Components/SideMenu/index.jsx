import React from 'react';
import WrapperSide from './SideWrapper.js'
const SideMenu = () => {
  return (
    <WrapperSide>
     <ul>
       <li><div>salim</div></li>
       <li className="selected"><div>tarik</div></li>
       <li><div>hamdi</div></li>
       <li><div>achraf</div></li>
       <li><div>billel</div></li>
     </ul>                                                    
    </WrapperSide>
  );
};

export default SideMenu;