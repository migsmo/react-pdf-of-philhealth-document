import React from 'react';
import BoxInput from '../inputs/box.input';
import Row from '../layout/row';
import Dash from '../typography/dash.typography';
import Heading1 from '../typography/heading-1.typography';

function PhilHealthPinInput({ label, style }) {
  return (
    <>
      <Row
        style={[
          {
            margin: 0,
          },
          style,
        ]}
      >
        <Heading1>{label}</Heading1>
        <BoxInput
          style={{
            marginLeft: 5,
          }}
          number={2}
        />
        <Dash />
        <BoxInput number={9} />
        <Dash />
        <BoxInput number={1} />
      </Row>
    </>
  );
}

export default PhilHealthPinInput;
