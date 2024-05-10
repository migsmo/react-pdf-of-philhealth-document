import { StyleSheet, Text } from '@react-pdf/renderer';
import React from 'react';
import Row from '../layout/row';
import BoxInput from './box.input';

const styles = StyleSheet.create({
  label: {
    alignSelf: 'center',
    fontFamily: 'SourceSansLight',
  },
});

function CheckBoxInput({ label, style, debug, boxMarginRight = '0.05in' }) {
  return (
    <Row
      style={{
        maxHeight: 14,
        ...style,
      }}
      debug={debug}
    >
      <BoxInput number={1} style={{ marginRight: boxMarginRight }} />
      <Text style={[styles.label]}>{label}</Text>
    </Row>
  );
}

export default CheckBoxInput;
