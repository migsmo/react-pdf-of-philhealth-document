import {
  Document,
  Font,
  Image,
  PDFViewer,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';
import './App.css';
import BoxInput from './components/inputs/box.input';
import CheckBoxInput from './components/inputs/check-box.input';
import FieldInput from './components/inputs/field.input';
import Column from './components/layout/column';
import Row from './components/layout/row';
import DateInput from './components/templates/date.input';
import HealthCareProInfoInput from './components/templates/health-care-pro-info.input';
import MemberConsentAuthorizationInput from './components/templates/member-consent-authorization.input';
import NameInput from './components/templates/name.input';
import PhilHealthPinInput from './components/templates/philhealth-pin.input';
import BoldText from './components/typography/bold-text.typography';
import Heading1 from './components/typography/heading-1.typography';
import SectionDivider from './components/typography/section-divider.typograpgy';
import MinionProBold from './fonts/minion-pro/Minion-Pro-Bold.ttf';
import MinionProItalic from './fonts/minion-pro/Minion-Pro-Italic.ttf';
import MinionProRegular from './fonts/minion-pro/MinionPro-Regular.ttf';
import RobotoBold from './fonts/roboto/Roboto-Bold.ttf';
import RobotoLight from './fonts/roboto/Roboto-Light.ttf';
import RobotoThin from './fonts/roboto/Roboto-Thin.ttf';
import SourceSansBold from './fonts/source-sans/SourceSans3-Bold.ttf';
import SourceSansLight from './fonts/source-sans/SourceSans3-Light.ttf';
import SourceSansSemiBoldIt from './fonts/source-sans/SourceSans3-SemiBoldItalic.ttf';
const styles = StyleSheet.create({
  page: {
    maxWidth: '100%',
    padding: 18,
  },

  viewer: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
  body: {
    flexDirection: 'column',
    borderWidth: 3,
    borderColor: '#000',
    borderStyle: 'solid',
    height: '100%',
    maxHeight: '100%',
    fontFamily: 'SourceSansLight',
    fontSize: 8.64,
  },

  bold: {
    fontFamily: 'SourceSansBold',
  },

  minion_regular: {
    fontFamily: 'MinionProRegular',
  },

  top_header: {
    paddingLeft: 21.28,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottom: '1.5 #000 solid',
  },
  header_logo: {
    width: '1.40in',
    height: '0.56in',
    marginRight: '0.42in',
    marginTop: '0.36in',
  },
  header_center: {
    textAlign: 'center',
    alignItems: 'center',
    marginRight: '0.40in',
    height: '100%',
    marginTop: '0.15in',
  },
  header_right: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'SourceSansLight',
  },
  bottom_header: {
    fontSize: 8,
    marginLeft: 3.6,
    fontFamily: 'SourceSansLight',
  },

  part_one_section: {
    margin: '0.07in',
    marginTop: 0,
  },
  part_two_section: {
    margin: 3.6,
  },
  part_three_section: {},
});

Font.register({
  family: 'RobotoLight',
  src: RobotoLight,
});

Font.register({
  family: 'RobotoThin',
  src: RobotoThin,
});

Font.register({
  family: 'RobotoBold',
  src: RobotoBold,
});

Font.register({
  family: 'MinionProItalic',
  src: MinionProItalic,
});

Font.register({
  family: 'MinionProBold',
  src: MinionProBold,
});

Font.register({
  family: 'MinionProRegular',
  src: MinionProRegular,
});

Font.register({
  family: 'SourceSansBold',
  src: SourceSansBold,
});

Font.register({
  family: 'SourceSansLight',
  src: SourceSansLight,
});

Font.register({
  family: 'SourceSansSemiBoldIt',
  src: SourceSansSemiBoldIt,
});

function App() {
  return (
    <PDFViewer style={styles.viewer}>
      <Document>
        <Page
          size={{
            width: 612,
            height: 936,
            // height: 1200,
          }}
          style={styles.page}
        >
          <View style={styles.body}>
            <View>
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
                <Column style={styles.header_center}>
                  <Text style={[{ fontFamily: 'MinionProItalic' }]}>
                    Republic of the Philippines
                  </Text>
                  <BoldText fontFamily='MinionProBold' fontSize={11.52}>
                    PHILIPPINE HEALTH INSURANCE CORPORATION
                  </BoldText>
                  <Text style={[styles.minion_regular]}>
                    Citystate Centre 709 Shaw Boulevard, Pasig City
                  </Text>

                  <Text style={[styles.minion_regular]}>
                    Call Center (02) 441-7442 l Trunkline (02) 441-7444
                  </Text>
                  <Text style={[styles.minion_regular]}>
                    www.philhealth.gov.ph
                  </Text>
                  <Text style={[styles.minion_regular]}>
                    email: actioncenter@philhealth.gov.ph
                  </Text>
                </Column>

                <View style={[styles.header_right]}>
                  <Text>This form may be reproduced and</Text>
                  <Text>is NOT FOR SALE</Text>
                  <View
                    style={{
                      height: '0.40in',
                      width: '100%',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center', // This will vertically center the text
                      justifyContent: 'center', // This will horizontally center the text
                    }}
                  ></View>

                  <Text
                    style={{
                      position: 'absolute',
                      fontSize: 38,
                      fontFamily: 'SourceSansBold',
                      alignSelf: 'center',
                      bottom: '0.17in',
                    }}
                  >
                    CSF
                  </Text>
                  <Text style={{ fontFamily: 'SourceSansBold' }}>
                    (Claim Signature Form)
                  </Text>
                  <Text>Revised September 2018</Text>
                </View>
              </Row>
              <View style={styles.bottom_header}>
                <View>
                  <Text
                    style={{
                      fontFamily: 'SourceSansBold',
                    }}
                  >
                    IMPORTANT REMINDERS:
                  </Text>
                  <View
                    style={{
                      display: 'flex',
                      width: '100%',
                      flexDirection: 'row',
                    }}
                  >
                    <Text>PLEASE WRITE IN CAPITAL </Text>
                    <Text style={{ fontFamily: 'SourceSansBold' }}>
                      LETTERS{' '}
                    </Text>
                    <Text>AND </Text>
                    <Text style={{ fontFamily: 'SourceSansBold' }}>CHECK </Text>
                    <Text>THE APPROPRIATE BOXES.</Text>
                  </View>
                  <Text>
                    All information required in this form are necessary. Claim
                    forms with incomplete information shall not be processed.
                  </Text>

                  <Text
                    style={{
                      fontFamily: 'SourceSansBold',
                    }}
                  >
                    FALSE/INCORRECT INFORMATION OR MISREPRESENTATION SHALL BE
                    SUBJECT TO CRIMINAL, CIVIL OR ADMINISTRATIVE LIABILITIES.
                  </Text>
                  <View
                    style={{
                      top: 3,
                      left: 410,
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
                </View>
              </View>
            </View>
            <SectionDivider
              text={'PART I - MEMBER AND PATIENT INFORMATION AND CERTIFICATION'}
            />

            <View style={styles.part_one_section}>
              <PhilHealthPinInput
                style={{
                  alignItems: 'center',
                }}
                label={'1. PhilHealth Identification Number (PIN) of Member:'}
              />
              <Row>
                <Column>
                  <Heading1>2. Name of Member:</Heading1>
                  <NameInput style={{ marginRight: 11.52 }} />
                </Column>
                <Column>
                  <Heading1>3. Member Date of Birth:</Heading1>
                  <Row>
                    <DateInput />
                  </Row>
                </Column>
              </Row>
              <Row>
                <PhilHealthPinInput
                  label={
                    '4. PhilHealth Identification Number (PIN) of Dependent:'
                  }
                  style={{
                    alignItems: 'baseline',
                  }}
                />
              </Row>
              <Row>
                <Column>
                  <Heading1>5. Name of Patient:</Heading1>
                  <NameInput style={{ marginRight: 11.52 }} />
                </Column>
                <Column>
                  <Heading1>6. Relationship to Member:</Heading1>
                  <Row>
                    <Row>
                      <CheckBoxInput
                        label={'child'}
                        style={{
                          marginRight: '0.17in',
                        }}
                      />
                      <CheckBoxInput
                        label={'parent'}
                        style={{
                          marginRight: '0.17in',
                        }}
                      />
                      <CheckBoxInput label={'spouse'} />
                    </Row>
                  </Row>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Heading1>7. Confinement Period:</Heading1>
                  <Row>
                    <DateInput
                      label={'a. Date Admitted:'}
                      style={{
                        marginLeft: '0.13in',
                      }}
                      dateMarginLeft='0.09in'
                    />
                    <DateInput
                      label={'b. Date Discharged:'}
                      style={{ marginRight: '0.55in', marginLeft: '0.41in' }}
                    />
                  </Row>
                </Column>
                <Column>
                  <Heading1 fontSize={10}>8. Patient Date of Birth:</Heading1>
                  <DateInput />
                </Column>
              </Row>
              <Row>
                <Column style={{ width: '100%' }}>
                  <Heading1>9. CERTIFICATION OF MEMBER:</Heading1>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontFamily: 'SourceSansSemiBoldIt',
                    }}
                  >
                    Under the penalty of law, I attest that the information I
                    provided in this Form are true and accurate to the best of
                    my knowledge.
                  </Text>
                  <Row style={{ marginLeft: '0.50in' }}>
                    <Column
                      style={{
                        alignItems: 'center',
                        marginRight: '0.87in',
                      }}
                    >
                      <FieldInput
                        width='2.70in'
                        label={'Signature Over Printed Name of Member'}
                      />
                      <DateInput
                        label={'Date Signed'}
                        style={{ marginTop: 2.88, margin: 'auto' }}
                      />
                    </Column>
                    <Column>
                      <FieldInput
                        width='3.56in'
                        label={
                          'Signature Over Printed Name of Member’s Representative'
                        }
                      />
                      <DateInput
                        label={'Date Signed'}
                        style={{ marginTop: 2.88, marginLeft: 32.4 }}
                      />
                    </Column>
                  </Row>
                  <MemberConsentAuthorizationInput />
                </Column>
              </Row>
            </View>

            <SectionDivider
              text={'PART II - EMPLOYER’S CERTIFICATION'}
              description={'(for employed members only)'}
            />

            <View style={styles.part_two_section}>
              <Row>
                <PhilHealthPinInput
                  style={{ marginRight: '0.54in' }}
                  label={'1. PhilHealth Employer Number (PEN):'}
                />
                <Heading1>2. Contact No.: </Heading1>
                <FieldInput width='1.81in' />
              </Row>
              <Row>
                <Heading1>3. Business Name:</Heading1>
                <FieldInput
                  debug
                  style={{ marginLeft: '0.33in' }}
                  width='6.46in'
                  label={'Business Name of Employer'}
                />
              </Row>
              <Row>
                <Column style={{ width: '100%' }}>
                  <Heading1>4. CERTIFICATION OF EMPLOYER:</Heading1>
                  <Column
                    style={{
                      fontFamily: 'SourceSansSemiBoldIt',
                      fontSize: 8.64,
                      letterSpacing: -0.35,
                    }}
                  >
                    <Text
                      style={{
                        textAlign: 'center',
                      }}
                    >
                      “This is to certify that the required 3/6 monthly premium
                      contributions plus at least 6 months contributions
                      preceding the 3 months qualifying contributions within 12
                    </Text>
                    <Text
                      style={{
                        marginLeft: '0.13in',
                      }}
                    >
                      month period prior to the first day of confinement
                      (sufficient regularity) have been regularly remitted to
                      PhilHealth. Moreover, the information supplied by the
                      member or
                    </Text>
                    <Text
                      style={{
                        marginLeft: '0.13in',
                      }}
                    >
                      his/her representative on Part I are consistent with our
                      available records.”
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row>
                <FieldInput
                  width={'3.29in'}
                  label={
                    'Signature Over Printed Name of Employer/Authorized Representative'
                  }
                  style={{ marginRight: '0.15in' }}
                />
                <FieldInput
                  width={'1.95in'}
                  label={'Official Capacity/Designation'}
                />
                <DateInput
                  label={'Date Signed'}
                  style={{
                    marginLeft: '0.18in',
                  }}
                />
              </Row>
            </View>
            <SectionDivider
              text={'PART III - CONSENT TO ACCESS PATIENT RECORD/S'}
            />
            <View style={styles.part_three_section}>
              <Row>
                <View style={{ width: '100%', alignItems: 'center' }}>
                  <Column>
                    <Text
                      style={{
                        marginTop: 3.6,
                        fontFamily: 'SourceSansSemiBoldIt',
                        fontSize: 8.64,
                        letterSpacing: -0.35,
                      }}
                    >
                      I hereby consent to the submission and examination of the
                      patient’s pertinent medical records for the purpose of
                      verifying the veracity of this claim to effect efficient
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'SourceSansSemiBoldIt',
                        fontSize: 8.64,
                        letterSpacing: -0.35,
                      }}
                    >
                      processing of benefit payment.
                    </Text>

                    <Text
                      style={{
                        fontFamily: 'SourceSansSemiBoldIt',
                        fontSize: 8.64,
                        letterSpacing: -0.35,
                      }}
                    >
                      I hereby hold PhilHealth or any of its officers, employees
                      and/or representatives free from any legal liabilities
                      relative to the herein-mentioned consent which I have
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'SourceSansSemiBoldIt',
                        fontSize: 8.64,
                        letterSpacing: -0.35,
                      }}
                    >
                      voluntarily and willingly given in connection with this
                      claim for reimbursement before PhilHealth.
                    </Text>
                  </Column>
                </View>
              </Row>
              <Row
                style={
                  {
                    // alignSelf: 'center',
                  }
                }
              >
                <FieldInput
                  style={{ marginLeft: '0.61in', letterSpacing: -0.35 }}
                  width='3.29in'
                  label={
                    'Signature Over Printed Name of Member/Patient/Authorized Representative'
                  }
                />
                <DateInput
                  label={'Date Signed'}
                  style={{ marginLeft: '0.60in' }}
                />
              </Row>
              <Row
                style={{
                  margin: 3.6,
                }}
              >
                <MemberConsentAuthorizationInput />
              </Row>
            </View>

            <SectionDivider
              text={'PART IV - HEALTH CARE PROFESSIONAL INFORMATION'}
            />

            <View
              style={{
                marginLeft: '0.07in',
                marginTop: '0.03in',
              }}
            >
              <HealthCareProInfoInput label='Accreditation No.' />
              <HealthCareProInfoInput label='Accreditation No.' />
              <HealthCareProInfoInput label='Accreditation No.' />
            </View>
            <SectionDivider
              text={'PART V - PROVIDER INFORMATION AND CERTIFICATION'}
            />
            <Row
              style={{
                alignItems: 'center',
                marginLeft: '0.08in',
                marginRight: '0.08in',
              }}
            >
              <Heading1>1. PhilHealth Benefits:</Heading1>
              <Text
                style={{
                  fontFamily: 'SourceSansBold',
                  marginLeft: '0.38in',
                  marginRight: '0.17in',
                }}
              >
                ICD 10 or RVS Code:
              </Text>
              <Row
                style={{
                  marginRight: '0.15in',
                }}
              >
                <Text
                  style={{
                    marginRight: '0.07in',
                  }}
                >
                  1. First Case Rate
                </Text>
                <FieldInput width='1.44in' />
              </Row>
              <Row>
                <Text
                  style={{
                    marginRight: '0.07in',
                  }}
                >
                  2. Second Case Rate
                </Text>
                <FieldInput width='1.72in' />
              </Row>
            </Row>
            <Column style={{ width: '100%' }}>
              <Column
                style={{
                  fontFamily: 'SourceSansSemiBoldIt',
                  fontSize: 8.64,
                  letterSpacing: -0.35,
                }}
              >
                <Text
                  style={{
                    textAlign: 'center',
                  }}
                >
                  I certify that services rendered were recorded in the
                  patient’s chart and health care institution records and that
                  the herein information given are true and correct.
                </Text>
              </Column>
            </Column>
            <Row>
              <FieldInput
                width={'3.29in'}
                label={
                  'Signature Over Printed Name of Authorized HCI Representative'
                }
                style={{ marginRight: '0.15in' }}
              />
              <FieldInput
                width={'1.95in'}
                label={'Official Capacity/Designation'}
              />
              <DateInput
                label={'Date Signed'}
                style={{
                  marginLeft: '0.18in',
                }}
              />
            </Row>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default App;
