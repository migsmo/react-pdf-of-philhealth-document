import { Text } from '@react-pdf/renderer';
import React from 'react';

const BoldText = ({
  children,
  style,
  fontSize = 12,
  fontFamily = 'SourceSansBold',
}) => (
  <Text style={[{ fontFamily: fontFamily, fontSize: fontSize }, style]}>
    {children}
  </Text>
);

export default BoldText;
