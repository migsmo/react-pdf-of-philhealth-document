import { StyleSheet, View } from '@react-pdf/renderer';
import React from 'react';
import Column from '../layout/column';
import Row from '../layout/row';

const styles = StyleSheet.create({
  container: {
    borderColor: '#000',
    borderWidth: 0.5,

    textAlign: 'left',
  },
  upperText: {
    padding: '0.03in',
  },
});

function BoxTextInput({ label, style, debug, boxWidth, children }) {
  console.log({ ...styles.container, width: boxWidth });

  return (
    <Row style={{ ...styles.container, ...style }} debug={debug}>
      <Column style={{ width: boxWidth }}>
        <View style={styles.upperText}>{children}</View>
      </Column>
    </Row>
  );
}

export default BoxTextInput;
