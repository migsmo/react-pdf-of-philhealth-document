import { Text } from '@react-pdf/renderer';
import React from 'react';

const BoldText = ({ children, style, fontSize = 12 }) => (
  <Text style={[{ fontFamily: 'RobotoBold', fontSize: fontSize }, style]}>
    {children}
  </Text>
);

export default BoldText;
