import React from 'react';
import Row from '../layout/row';
import FieldInput from './field.input';

function AddressInput() {
  return (
    <Row>
      <FieldInput
        label={'Building Number and Street Name'}
        width='1.61in'
        style={{
          marginRight: '0.14in',
        }}
      />
      <FieldInput
        label={'City/Municipality'}
        width='0.93in'
        style={{
          marginRight: '0.10in',
        }}
      />
      <FieldInput
        label={'Province'}
        width='1in'
        style={{
          marginRight: '0.14in',
        }}
      />
      <FieldInput label={'Zip code'} width='0.51in' />
    </Row>
  );
}

export default AddressInput;
