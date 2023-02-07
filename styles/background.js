import React from 'react';

const background = () => {
  const background = {
    background:
      'radial-gradient(100% 225% at 0% 0%, #DE3E3E 0%, #17115C 100%), radial-gradient(100% 225% at 100% 0%, #FF9040 0%, #FF0000 100%)',
  };
  return (
    <div>
      background: radial-gradient(100% 225% at 0% 0%, #DE3E3E 0%, #17115C 100%),
      radial-gradient(100% 225% at 100% 0%, #FF9040 0%, #FF0000 100%),
      linear-gradient(180deg, #CE63B7 0%, #ED6283 100%), radial-gradient(100%
      120% at 75% 0%, #A74600 0%, #000000 100%), linear-gradient(310deg, #0063D8
      0%, #16009A 50%); background-blend-mode: overlay, color-dodge, color-burn,
      color-dodge, normal;
    </div>
  );
};

export default background;
