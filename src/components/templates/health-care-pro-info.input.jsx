import { Text } from '@react-pdf/renderer';
import React from 'react';
import BoxInput from '../inputs/box.input';
import FieldInput from '../inputs/field.input';
import Row from '../layout/row';
import BoldText from '../typography/bold-text.typography';
import DateInput from './date.input';

function HealthCareProInfoInput({ label, style }) {
  return (
    <Row>
      <Row
        style={[
          {
            margin: 0,
            marginRight: '0.16in',
          },
          style,
        ]}
      >
        <Text>{label}</Text>
        <BoxInput
          style={{
            marginLeft: 5,
          }}
          number={4}
        />
        <BoldText>-</BoldText>
        <BoxInput number={7} />
        <BoldText>-</BoldText>
        <BoxInput number={1} />
      </Row>
      <FieldInput
        width={'2.16in'}
        label={'Signature Over Printed Name'}
        style={{ marginRight: '0.17in' }}
      />
      <DateInput label='Date Signed' />
    </Row>
  );
}

export default HealthCareProInfoInput;
