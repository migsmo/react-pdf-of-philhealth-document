import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';
import React from 'react';
import MemberConsentAuthorizationPart from '../document-parts/member-consent-authorization.part';
import PhilHealthHeaderPart from '../document-parts/philhealth-header.part';
import PhilHealthPinPart from '../document-parts/philhealth-pin.part';
import BoxInput from '../inputs/box.input';
import CheckBoxInput from '../inputs/check-box.input';
import DateInput from '../inputs/date.input';
import FieldInput from '../inputs/field.input';
import NameInput from '../inputs/name.input';
import StackedBoxInput from '../inputs/stacked-box.input';
import Column from '../layout/column';
import Row from '../layout/row';
import BoldText from '../typography/bold-text.typography';
import Heading1 from '../typography/heading-1.typography';
import SectionDivider from '../typography/section-divider.typograpgy';

const DEFAULT_LETTER_SPACING = -0.35;

const styles = StyleSheet.create({
  page: {
    maxWidth: '100%',
    padding: '0.25in',
  },

  body: {
    borderWidth: 3,
    borderColor: '#000',
    borderStyle: 'solid',
    height: '100%',
    maxHeight: '100%',
    fontFamily: 'SourceSansLight',
    fontSize: 8.64,
  },

  top_header: {
    borderBottom: '1.5 #000 solid',
    paddingBottom: '0.20in',
  },
  header_logo: {
    width: '1.40in',
    height: '0.56in',
    marginRight: '0.42in',
    marginTop: '0.42in',
    marginLeft: '0.28in',
  },
  header_right: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'SourceSansLight',
  },
  bottom_header: {
    marginTop: '0.05in',
    marginLeft: '0.07in',
    letterSpacing: DEFAULT_LETTER_SPACING,
  },
  part_one_section: {
    margin: '0.07in',
    marginTop: 0,
    letterSpacing: DEFAULT_LETTER_SPACING,
  },
  part_two_section: {
    margin: '0.07in',
    marginTop: 0,
    letterSpacing: DEFAULT_LETTER_SPACING,
  },
  part_three_section: {
    letterSpacing: DEFAULT_LETTER_SPACING,
  },
  part_four_section: {
    letterSpacing: DEFAULT_LETTER_SPACING,
  },
  part_five_section: {
    letterSpacing: DEFAULT_LETTER_SPACING,
    marginTop: '0.10in',
    marginLeft: '0.28in',
  },
});

function CF1() {
  return (
    <Document>
      <Page
        size={{
          width: 612,
          height: 936,
          // height: 1200,
        }}
        style={styles.page}
      >
        <Column style={styles.body}>
          <Column>
            <Row style={styles.top_header}>
              <Column
                style={{
                  height: '100%',
                }}
              >
                <Image
                  style={styles.header_logo}
                  src='/images/philhealth_logo.png'
                />
              </Column>
              <PhilHealthHeaderPart
                style={{
                  marginRight: '0.40in',
                  marginTop: '0.35in',
                }}
              />
              <Column>
                <Column style={styles.header_right}>
                  <Text>This form may be reproduced and</Text>
                  <Text>is NOT FOR SALE</Text>
                  <View
                    style={{
                      height: '0.50in',
                      width: '100%',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  ></View>
                  <Text
                    style={{
                      position: 'absolute',
                      fontSize: 38,
                      fontFamily: 'SourceSansBold',
                      alignSelf: 'center',
                      top: '0.25in',
                    }}
                  >
                    CF-1
                  </Text>
                  <Text style={{ fontFamily: 'SourceSansBold' }}>
                    (Claim Form 1)
                  </Text>
                  <Text>Revised September 2018</Text>
                </Column>
                <Column
                  style={{
                    marginTop: '0.05in',
                  }}
                >
                  <View
                    style={{
                      right: 0,
                      position: 'absolute',
                      flexDirection: 'row',
                    }}
                  >
                    <Text
                      style={{
                        alignSelf: 'center',
                        paddingRight: 4.32,
                      }}
                    >
                      Series #
                    </Text>
                    <BoxInput number={10} />
                  </View>
                </Column>
              </Column>
            </Row>
            <Column style={styles.bottom_header}>
              <BoldText>IMPORTANT REMINDERS:</BoldText>
              <Row>
                <Text>PLEASE WRITE IN CAPITAL </Text>
                <BoldText>LETTERS </BoldText>
                <Text>AND </Text>
                <BoldText>CHECK </BoldText>
                <Text>THE APPROPRIATE BOXES.</Text>
              </Row>
              <Row>
                <Text>For </Text>
                <BoldText>local availment</BoldText>
                <Text>
                  , this form together with other PhilHealth claim forms and
                  other supporting documents should be filed within 60 days from
                  date of discharge.
                </Text>
              </Row>
              <Row>
                <Text>For </Text>
                <BoldText>availment of benefits abroad</BoldText>
                <Text>
                  , this form together with other supporting documents should be
                  filed within 180 days from date of discharge.
                </Text>
              </Row>
              <Text>
                Representative of the Health Care Institutions (HCI) shall
                assist the member/authorized representative in filling out this
                form.
              </Text>
              <Text>
                All information required in this form are necessary. Claim forms
                with incomplete information shall not be processed.
              </Text>
              <BoldText>
                FALSE/INCORRECT INFORMATION OR MISREPRESENTATION SHALL BE
                SUBJECT TO CRIMINAL, CIVIL OR ADMINISTRATIVE LIABILITIES.
              </BoldText>
            </Column>
          </Column>
          <SectionDivider text={'PART I - MEMBER INFORMATION'} />
          <Column style={styles.part_one_section}>
            <Row
              style={{
                marginTop: '0.03in',
              }}
            >
              <PhilHealthPinPart
                style={{
                  alignItems: 'center',
                }}
                label={'1. PhilHealth Identification Number (PIN) of Member:'}
              />
            </Row>
            <Row>
              <Column style={{ marginRight: '0.15in' }}>
                <Heading1>2. Name of Member:</Heading1>
                <NameInput />
              </Column>
              <Column>
                <Heading1>3. Date of Birth:</Heading1>
                <DateInput />
              </Column>
            </Row>
            <Row
              style={{
                marginTop: '0.05in',
              }}
            >
              <Column>
                <Row>
                  <Heading1 style={{ marginRight: '4.79in' }}>
                    4. Mailing Address:
                  </Heading1>
                  <Heading1
                    style={{
                      marginRight: '0.07in',
                    }}
                  >
                    5. Sex:
                  </Heading1>
                  <CheckBoxInput
                    label={'Male'}
                    style={{
                      marginRight: '0.05in',
                    }}
                  />
                  <CheckBoxInput label={'Female'} />
                </Row>
                <Row
                  style={{
                    marginTop: '0.03',
                  }}
                >
                  <FieldInput
                    label='Unit/Room No./Floor'
                    style={{ marginRight: '0.16in' }}
                    width='1.38in'
                  />
                  <FieldInput
                    label='Building Name'
                    style={{ marginRight: '0.16in' }}
                    width='1.38in'
                  />
                  <FieldInput
                    label='Lot/Blk/House/Bldg.No'
                    style={{ marginRight: '0.16in' }}
                    width='1.38in'
                  />
                  <FieldInput
                    label='Street'
                    style={{ marginRight: '0.16in' }}
                    width='1.13in'
                  />
                  <FieldInput label='Subdivision/Village' width='1.91in' />
                </Row>
                <Row
                  style={{
                    marginTop: '0.07',
                  }}
                >
                  <FieldInput
                    label='Barangay'
                    style={{ marginRight: '0.16in' }}
                    width='1.38in'
                  />
                  <FieldInput
                    label='City/Municipality'
                    style={{ marginRight: '0.16in' }}
                    width='1.38in'
                  />
                  <FieldInput
                    label='Province'
                    style={{ marginRight: '0.16in' }}
                    width='1.38in'
                  />
                  <FieldInput
                    label='Country'
                    style={{ marginRight: '0.16in' }}
                    width='1.13in'
                  />
                  <FieldInput label='Zip Code' width='1.91in' />
                </Row>
              </Column>
            </Row>
            <Row
              style={{
                marginTop: '0.10in',
              }}
            >
              <Column>
                <Heading1>6. Contact Information:</Heading1>
                <Row>
                  <FieldInput
                    label='Landline No. (Area Code + Tel. No.)'
                    style={{ marginRight: '0.16in' }}
                    width='2.53in'
                  />
                  <FieldInput
                    label='Mobile No.'
                    style={{ marginRight: '0.16in' }}
                    width='2.3in'
                  />
                  <FieldInput label='Email Address' width='2.68in' />
                </Row>
              </Column>
            </Row>
            <Row
              style={{
                alignItems: 'center',
                marginTop: '0.10in',
              }}
            >
              <Heading1 style={{ marginRight: '0.08in' }}>
                7. Patient is the member?
              </Heading1>
              <CheckBoxInput
                label={'Yes, Proceed to Part III'}
                style={{
                  marginRight: '0.05in',
                }}
              />
              <CheckBoxInput label={'No, Proceed to Part II'} />
            </Row>
          </Column>
          <SectionDivider
            text={'PART II - PATIENT INFORMATION'}
            description={
              '(To be filled-out only if the patient is a dependent)'
            }
          />
          <Column style={styles.part_two_section}>
            <Row>
              <PhilHealthPinPart
                style={{
                  marginTop: '0.03in',
                  alignItems: 'center',
                }}
                label={
                  '1. PhilHealth Identification Number (PIN) of Dependent:'
                }
              />
            </Row>
            <Row>
              <Column style={{ marginRight: '0.15in' }}>
                <Heading1>2. Name of Patient:</Heading1>
                <NameInput />
              </Column>
              <Column>
                <Heading1>3. Date of Birth:</Heading1>
                <DateInput />
              </Column>
            </Row>
            <Row>
              <Row
                style={{
                  marginRight: '2.61in',
                }}
              >
                <Heading1 style={{ marginRight: '0.08in' }}>
                  4. Relationship to Member:
                </Heading1>
                <CheckBoxInput
                  label={'Child'}
                  style={{
                    marginRight: '0.05in',
                  }}
                />
                <CheckBoxInput
                  label={'Parent'}
                  style={{
                    marginRight: '0.05in',
                  }}
                />
                <CheckBoxInput label={'Spouse'} />
              </Row>

              <Row>
                <Heading1
                  style={{
                    marginRight: '0.07in',
                  }}
                >
                  5. Sex:
                </Heading1>
                <CheckBoxInput
                  label={'Male'}
                  style={{
                    marginRight: '0.05in',
                  }}
                />
                <CheckBoxInput label={'Female'} />
              </Row>
            </Row>
          </Column>
          <SectionDivider text={'PART III - MEMBER CERTIFICATION'} />
          <Column style={styles.part_three_section}>
            <Row>
              <Column style={{ width: '100%' }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontFamily: 'SourceSansSemiBoldIt',
                    fontSize: 10.56,
                  }}
                >
                  Under the penalty of law, I attest that the information I
                  provided in this Form are true and accurate to the best of my
                  knowledge.
                </Text>
              </Column>
            </Row>
            <Row
              style={{
                marginLeft: '0.55in',
                marginBottom: '0.08in',
              }}
            >
              <Column
                style={{
                  marginRight: '0.86in',
                }}
              >
                <FieldInput
                  width='2.73in'
                  label={'Signature Over Printed Name of Member'}
                />
                <DateInput
                  label={'Date Signed'}
                  style={{ marginTop: '0.11in' }}
                />
              </Column>
              <Column>
                <FieldInput
                  width='3.55in'
                  label={
                    'Signature Over Printed Name of Member’s Representative'
                  }
                />
                <DateInput
                  label={'Date Signed'}
                  style={{ marginTop: '0.11in', marginLeft: '0.11in' }}
                />
              </Column>
            </Row>
            <Row
              style={{
                marginLeft: '0.07in',
                marginBottom: '0.03in',
              }}
            >
              <MemberConsentAuthorizationPart />
            </Row>
          </Column>
          <SectionDivider
            text={'PART IV - EMPLOYER’S CERTIFICATION'}
            description={'(for employed members only)'}
          />
          <Column style={styles.part_four_section}>
            <Column
              style={{
                borderBottom: '1.5 #000 solid',
              }}
            >
              <Column
                style={{
                  marginLeft: '0.07in',
                }}
              >
                <Row>
                  <PhilHealthPinPart
                    label={'1. PhilHealth Employer Number (PEN):'}
                    style={{ marginRight: '0.51in', marginTop: '0.05in' }}
                  />
                  <Heading1>2. Contact No.:</Heading1>
                  <FieldInput width='1.72in' />
                </Row>
                <Heading1>3. Business Name:</Heading1>
                <Row
                  style={{
                    justifyContent: 'center',
                    marginBottom: '0.12in',
                  }}
                >
                  <FieldInput
                    label={'Business Name of Employer'}
                    width='6.59in'
                  />
                </Row>
              </Column>
            </Column>
            <Column style={{ width: '100%', marginLeft: '0.07in' }}>
              <Heading1>4. CERTIFICATION OF EMPLOYER:</Heading1>
              <Column
                style={{
                  fontFamily: 'SourceSansSemiBoldIt',
                }}
              >
                <Text
                  style={{
                    marginLeft: '0.15in',
                  }}
                >
                  “This is to certify that the required 3/6 monthly premium
                  contributions plus at least 6 months contributions preceding
                  the 3 months qualifying contributions within 12
                </Text>
                <Text>
                  month period prior to the first day of confinement (sufficient
                  regularity) have been regularly remitted to PhilHealth.
                  Moreover, the information supplied by the member or
                </Text>
                <Text>
                  his/her representative on Part I are consistent with our
                  available records.”
                </Text>
              </Column>
              <Row
                style={{
                  marginBottom: '0.10in',
                }}
              >
                <FieldInput
                  label={
                    'Signature Over Printed Name of Employer/Authorized Representative'
                  }
                  width='3.07in'
                  style={{
                    marginRight: '0.17in',
                  }}
                />
                <FieldInput
                  label={'Official Capacity/Designation'}
                  width='2.09in'
                  style={{
                    marginRight: '0.17in',
                  }}
                />
                <DateInput label={'Date Signed'} />
              </Row>
            </Column>
          </Column>
          <SectionDivider text={'PART V - FOR PHILHEALTH USE ONLY'} />
          <Row style={styles.part_five_section}>
            <StackedBoxInput
              label='Date Received:'
              upperText='LHIO'
              lowerText='PRO'
              style={{
                marginRight: '0.58in',
              }}
              boxWidth='1.90in'
            />
            <StackedBoxInput
              label='By:'
              upperText=''
              lowerText='LHIO/PRO Signature Over Printed Name'
              boxWidth='2.14in'
            />
          </Row>
        </Column>
      </Page>
    </Document>
  );
}

export default CF1;
