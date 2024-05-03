import { Text, View } from '@react-pdf/renderer';
import React from 'react';
import CheckBoxInput from '../inputs/check-box.input';
import FieldInput from '../inputs/field.input';
import Column from '../layout/column';
import Row from '../layout/row';

function MemberConsentAuthorizationInput() {
  return (
    <Row>
      <Column debug style={{ lineHeight: 0 }}>
        <Text>If member/representative is unable to write,</Text>
        <Text>put right thumbmark. Member/Representative</Text>
        <Text>should be assisted by an HCI representative.</Text>
        <Text>Check the appropriate box.</Text>
        <Row>
          <CheckBoxInput
            label={'Member'}
            style={{
              marginRight: 7.2,
            }}
          />
          <CheckBoxInput label={'Representative'} />
        </Row>
      </Column>
      <Column
        style={{
          marginTop: '0.06in',
          marginLeft: 19.44,
          marginRight: '0.31in',
        }}
      >
        <View
          style={{
            borderWidth: '3',
            borderColor: '#000',
            width: '1.20in',
            height: '0.70in',
          }}
        />
      </Column>
      <Column style={{}}>
        <Row
          style={{
            marginBottom: '0.24in',
          }}
        >
          <Column
            style={{
              marginRight: '0.12in',
            }}
          >
            <Text>Relationship of the</Text>
            <Text>representative to the member</Text>
          </Column>
          <Column
            style={{
              marginRight: '0.12in',
            }}
          >
            <CheckBoxInput label={'Spouse'} />
            <CheckBoxInput
              label={'Sibling'}
              style={{
                marginTop: '0.02in',
              }}
            />
          </Column>

          <Column>
            <Row>
              <CheckBoxInput
                style={{
                  marginRight: 9,
                }}
                label={'Child'}
              />
              <CheckBoxInput label={'Parent'} />
            </Row>
            <Row>
              <CheckBoxInput
                label={'Others, Specify '}
                style={{
                  marginTop: '0.02in',
                }}
              />
              <FieldInput width='1.05in' />
            </Row>
          </Column>
        </Row>
        <Row>
          <Column
            style={{
              marginRight: 32,
            }}
          >
            <Text>Reason for signing on</Text>
            <Text>behalf of the member</Text>
          </Column>
          <Column>
            <CheckBoxInput label={'Member is incapacitated'} />
            <Row>
              <CheckBoxInput
                label={'Other reasons: '}
                style={{
                  marginTop: '0.02in',
                }}
              />
              <FieldInput width={121} />
            </Row>
          </Column>
        </Row>
      </Column>
    </Row>
  );
}

export default MemberConsentAuthorizationInput;
