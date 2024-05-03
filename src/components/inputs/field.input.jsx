import { StyleSheet, Text, View } from '@react-pdf/renderer';
import React from 'react';
import Column from '../layout/column';

const styles = StyleSheet.create({
  fieldContainer: {
    justifyContent: 'center',
    alignItems: 'end',
    width: '100%',
  },
  inputField: {
    height: '0.14in',
    borderBottomWidth: 0.5,
    borderColor: '#000',
  },
  fieldLabel: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'SourceSansLight',
  },
  descriptionText: {
    fontFamily: 'SourceSansLight',
    letterSpacing: -0.5,
    fontSize: 7.68,
    alignSelf: 'center',
  },
});

function FieldInput({ label, description, style, width, debug }) {
  return (
    <Column debug={debug} style={[styles.fieldContaine, style]}>
      <View style={[styles.inputField, { width: width }]} />
      <Text style={styles.fieldLabel}>{label}</Text>
      {description ? (
        <Text style={styles.descriptionText}>{description}</Text>
      ) : (
        <></>
      )}
    </Column>
  );
}

export default FieldInput;
