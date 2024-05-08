import { StyleSheet, Text } from '@react-pdf/renderer';
import React from 'react';
import Column from '../layout/column';
import Row from '../layout/row';
import Dash from '../typography/dash.typography';
import BoxInput from './box.input';

const styles = StyleSheet.create({
  label: {
    alignSelf: 'center',
    fontFamily: 'SourceSansLight',
  },
});

function DateInput({ label, style, debug, dateMarginLeft = '.10in' }) {
  return (
    <Row style={style} debug={debug}>
      {label ? (
        <Text style={{ fontFamily: 'SourceSansLight' }}>{label}</Text>
      ) : (
        <></>
      )}
      <Column
        style={{
          marginLeft: dateMarginLeft,
        }}
      >
        <BoxInput number={2} />
        <Text style={styles.label}>month</Text>
      </Column>
      <Dash />
      <Column>
        <BoxInput number={2} />
        <Text style={styles.label}>day</Text>
      </Column>
      <Dash />
      <Column>
        <BoxInput number={4} />
        <Text style={styles.label}>year</Text>
      </Column>
    </Row>
  );
}

export default DateInput;
