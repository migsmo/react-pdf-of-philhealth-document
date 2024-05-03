import { View } from '@react-pdf/renderer';
import React from 'react';

function Row({ children, style, debug }) {
  return (
    <View
      debug={debug}
      style={[
        {
          flexDirection: 'row',
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}

export default Row;
