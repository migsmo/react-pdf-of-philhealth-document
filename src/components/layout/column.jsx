import { View } from '@react-pdf/renderer';
import React from 'react';

function Column({ children, style, debug = false }) {
  return (
    <View
      style={[
        {
          flexDirection: 'column',
        },
        style,
      ]}
      debug={debug}
    >
      {children}
    </View>
  );
}

export default Column;
