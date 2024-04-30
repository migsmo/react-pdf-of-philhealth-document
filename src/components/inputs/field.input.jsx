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
    width: '1.40in',
    height: '0.15in',
    borderBottomWidth: 0.5,
    borderColor: '#000',
    marginBottom: '0.06in',
  },
  fieldLabel: {
    fontSize: '0.10in',
    alignSelf: 'center',
    textAlign: 'center',
  },
  descriptionText: {
    marginTop: '0.03in',
    fontSize: '0.10in',
    alignSelf: 'center',
  },
});

function FieldInput({ label, description, style }) {
  return (
    <Column style={[styles.fieldContaine, style]}>
      <View style={styles.inputField} />
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
