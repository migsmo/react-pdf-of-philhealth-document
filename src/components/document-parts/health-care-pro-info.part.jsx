import { Text } from '@react-pdf/renderer';
import React from 'react';
import BoxInput from '../inputs/box.input';
import DateInput from '../inputs/date.input';
import FieldInput from '../inputs/field.input';
import Row from '../layout/row';
import Dash from '../typography/dash.typography';

function HealthCareProInfoPart({ label, style }) {
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
        <Dash />
        <BoxInput number={7} />
        <Dash />
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

export default HealthCareProInfoPart;
