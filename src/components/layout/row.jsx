import { View } from '@react-pdf/renderer';
import React from 'react';

function Row({ children, style }) {
  return (
    <View
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
