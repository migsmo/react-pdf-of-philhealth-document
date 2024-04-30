import React from 'react';
import BoxInput from '../inputs/box.input';
import BoldText from '../typography/bold-text.typography';

function PhilHealthPinInput({ label, fontSize = 10 }) {
  return (
    <>
      <BoldText fontSize={fontSize}>{label}</BoldText>
      <BoxInput
        style={{
          marginLeft: '.10in',
        }}
        number={2}
      />
      <BoldText>-</BoldText>
      <BoxInput number={9} />
      <BoldText>-</BoldText>
      <BoxInput number={1} />
    </>
  );
}

export default PhilHealthPinInput;
