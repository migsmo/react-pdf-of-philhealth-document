import { StyleSheet, Text } from '@react-pdf/renderer';
import React from 'react';
import Column from '../layout/column';
import Row from '../layout/row';
import SegmentedLineInput from './segmented-line.input';

const styles = StyleSheet.create({
  label: {
    alignSelf: 'center',
    fontFamily: 'SourceSansLight',
  },
});

function SegmentedTimeInput({ label, hourMarginLeft = '.10in', style, debug }) {
  return (
    <Row style={style} debug={debug}>
      {label ? (
        <Text style={{ fontFamily: 'SourceSansLight' }}>{label}</Text>
      ) : (
        <></>
      )}
      <Column
        style={{
          marginLeft: hourMarginLeft,
        }}
      >
        <SegmentedLineInput number={2} />
        <Text style={styles.label}>hour</Text>
      </Column>
      <Text
        style={{
          fontSize: 12,
          marginHorizontal: 2,
          bottom: 2,
          textAlign: 'center',
        }}
      >
        :
      </Text>
      <Column>
        <SegmentedLineInput number={2} />
        <Text style={styles.label}>minute</Text>
      </Column>
    </Row>
  );
}

export default SegmentedTimeInput;
