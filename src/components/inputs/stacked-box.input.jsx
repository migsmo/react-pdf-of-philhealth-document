import { StyleSheet, Text, View } from '@react-pdf/renderer';
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
    borderBottomWidth: 0.5,
    borderColor: '#000',
    padding: '0.03in',
    height: '0.25in',
  },
  lowerText: {
    padding: '0.03in',
    height: '0.25in',
  },
});

function StackedBoxInput({
  label,
  upperText,
  lowerText,
  style,
  debug,
  boxWidth,
}) {
  console.log({ ...styles.container, width: boxWidth });

  return (
    <Row style={style} debug={debug}>
      <Text
        style={{
          marginRight: '0.14in',
          marginTop: '0.04in',
        }}
      >
        {label}
      </Text>
      <Column style={{ ...styles.container, width: boxWidth }}>
        <View style={styles.upperText}>
          <Text>{upperText}</Text>
        </View>
        <View style={styles.lowerText}>
          <Text>{lowerText}</Text>
        </View>
      </Column>
    </Row>
  );
}

export default StackedBoxInput;
