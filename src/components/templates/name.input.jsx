import React from 'react';
import FieldInput from '../inputs/field.input';
import Row from '../layout/row';

function NameInput() {
  return (
    <Row>
      <FieldInput label={'Last Name'} style={{ marginRight: '0.13in' }} />
      <FieldInput label={'First Name'} style={{ marginRight: '0.13in' }} />
      <FieldInput
        label={'Name Extension'}
        style={{ marginRight: '0.13in' }}
        description={'(JR/SR/III)'}
      />
      <FieldInput label={'Middle Name'} style={{ marginRight: '0.13in' }} />
    </Row>
  );
}

export default NameInput;
