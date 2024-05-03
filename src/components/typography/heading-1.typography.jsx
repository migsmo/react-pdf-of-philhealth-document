import { Text } from '@react-pdf/renderer';
import React from 'react';

function Heading1({ children }, style) {
  return (
    <>
      <Text
        style={[
          {
            fontSize: 10,
            fontFamily: 'SourceSansBold',
            letterSpacing: '0',
          },
          style,
        ]}
      >
        {children}
      </Text>
    </>
  );
}

export default Heading1;
