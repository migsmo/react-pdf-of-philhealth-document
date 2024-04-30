import { StyleSheet, Text } from '@react-pdf/renderer';
import React from 'react';
import Row from '../layout/row';
import BoxInput from './box.input';

const styles = StyleSheet.create({
  label: {
    fontSize: '0.10in',
    alignSelf: 'center',
  },
});

function CheckBoxInput({ label, style }) {
  return (
    <Row style={style}>
      <BoxInput number={1} style={{ marginRight: '0.05in' }} />
      <Text style={styles.label}>{label}</Text>
    </Row>
  );
}

export default CheckBoxInput;
