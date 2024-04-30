import { StyleSheet, Text } from '@react-pdf/renderer';
import React from 'react';
import BoxInput from '../inputs/box.input';
import Column from '../layout/column';
import BoldText from '../typography/bold-text.typography';

const styles = StyleSheet.create({
  label: {
    fontSize: '0.10in',
    alignSelf: 'center',
  },
});

function DateInput() {
  return (
    <>
      <Column
        style={{
          marginLeft: '.10in',
        }}
      >
        <BoxInput number={2} />
        <Text style={styles.label}>month</Text>
      </Column>
      <BoldText>-</BoldText>\
      <Column>
        <BoxInput number={2} />
        <Text style={styles.label}>day</Text>
      </Column>
      <BoldText>-</BoldText>
      <Column>
        <BoxInput number={4} />
        <Text style={styles.label}>year</Text>
      </Column>
    </>
  );
}

export default DateInput;
