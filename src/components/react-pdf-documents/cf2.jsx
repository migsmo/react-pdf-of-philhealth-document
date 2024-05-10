import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';
import React from 'react';
import PhilHealthHeaderPart from '../document-parts/philhealth-header.part';
import AddressInput from '../inputs/address.input';
import BoxInput from '../inputs/box.input';
import CheckBoxInput from '../inputs/check-box.input';
import FieldInput from '../inputs/field.input';
import SegmentedDateInput from '../inputs/segmented-line-date.input';
import SegmentedLineInput from '../inputs/segmented-line.input';
import SegmentedTimeInput from '../inputs/segmented-time.input';
import StackedLines from '../inputs/stacked-lines';
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

function CF2() {
  return (
    <Document>
      <Page
        size={{
          width: 612,
          height: 936,
        }}
        style={styles.page}
      >
        <Column style={styles.body}>
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
                  CF-2
                </Text>
                <Text style={{ fontFamily: 'SourceSansBold' }}>
                  (Claim Form 2)
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

            <Text>
              This form together with other supporting documents should be filed
              within sixty (60) calendar days from date of discharge.
            </Text>
            <Text>
              All information, fields and trick boxes required in this form are
              necessary. Claim forms with incomplete information
            </Text>
            <BoldText>
              FALSE/INCORRECT INFORMATION OR MISREPRESENTATION SHALL BE SUBJECT
              TO CRIMINAL, CIVIL OR ADMINISTRATIVE LIABILITIES.
            </BoldText>
          </Column>
          <SectionDivider
            text={'PART I - HEALTH CARE INSTITUTION (HCI) INFORMATION'}
          />
          <Column style={styles.part_one_section}>
            <Row>
              <Heading1
                style={{
                  marginRight: '0.20in',
                }}
              >
                1. PhilHealth Accreditation Number (PAN) of Health Care
                Institution:
              </Heading1>
              <SegmentedLineInput number={9} />
            </Row>
            <Row>
              <Heading1
                style={{
                  marginRight: '0.04in',
                }}
              >
                2. Name of Health Care Institution:
              </Heading1>
              <FieldInput width='5.60in' />
            </Row>
            <Row
              style={
                {
                  // marginBottom: '0.11in',
                }
              }
            >
              <Heading1
                style={{
                  marginRight: '0.19in',
                }}
              >
                3. Address:
              </Heading1>
              <FieldInput
                style={{
                  marginRight: '0.15in',
                }}
                width='2.86in'
                label='Building Number and Street Name'
              />
              <FieldInput
                style={{
                  marginRight: '0.15in',
                }}
                width='2in'
                label='City/Municipality'
              />
              <FieldInput width='1.73in' label='Province' />
            </Row>
          </Column>
          <SectionDivider text={'PART II - PATIENT CONFINEMENT INFORMATION'} />
          <Column style={styles.part_two_section}>
            <Column
              style={{
                borderBottom: '1.5 #000 solid',
              }}
            >
              <Column
                style={{
                  margin: '0.07in',
                  marginTop: 0,
                }}
              >
                <Row>
                  <Heading1
                    style={{
                      marginRight: '0.28in',
                    }}
                  >
                    1. Name of Patient:
                  </Heading1>
                  <Row>
                    <FieldInput
                      label={'Last Name'}
                      style={{ marginRight: '0.16in' }}
                      width='1.50in'
                    />
                    <FieldInput
                      label={'First Name'}
                      style={{ marginRight: '0.12in' }}
                      width='1.66in'
                    />
                    <FieldInput
                      label={'Name Extension'}
                      style={{ marginRight: '0.16in' }}
                      width='1.12in'
                      description={'(JR/SR/III)'}
                    />
                    <FieldInput
                      label={'Middle Name'}
                      width='1.59in'
                      description={'(ex: DELA CRUZ JUAN JR SIPAG)'}
                    />
                  </Row>
                </Row>
                <Heading1>
                  2. Was patient referred by another Health Care Institution
                  (HCI)?
                </Heading1>
                <Row
                  style={{
                    marginLeft: '0.12in',
                  }}
                >
                  <CheckBoxInput
                    label={'NO'}
                    style={{
                      marginRight: '0.11in',
                    }}
                    debug
                  />
                  <CheckBoxInput
                    label={'YES'}
                    style={{
                      marginRight: '0.11in',
                    }}
                  />
                  <FieldInput
                    label={'Name of referring Health Care Institution'}
                    width='2.06in'
                    style={{
                      marginRight: '0.18in',
                    }}
                  />
                  <AddressInput />
                </Row>
                <Row>
                  <Heading1
                    style={{
                      marginRight: '0.23in',
                    }}
                  >
                    3. Confinement Period:
                  </Heading1>
                  <Column>
                    <Row>
                      <SegmentedDateInput
                        label={'a. Date Admitted'}
                        style={{
                          marginRight: '0.23in',
                        }}
                      />
                      <SegmentedTimeInput
                        label={'b. Time Admitted'}
                        style={{
                          marginRight: '0.23in',
                        }}
                      />
                      <CheckBoxInput
                        label={'AM'}
                        style={{
                          marginRight: '0.18in',
                        }}
                      />
                      <CheckBoxInput
                        label={'PM'}
                        style={{
                          marginRight: '0.24in',
                        }}
                      />
                    </Row>
                    <Row>
                      <SegmentedDateInput
                        label={'c. Date Discharge'}
                        style={{
                          marginRight: '0.20in',
                        }}
                      />
                      <SegmentedTimeInput
                        label={'d. Time Discharge'}
                        style={{
                          marginRight: '0.23in',
                        }}
                      />
                      <CheckBoxInput
                        label={'AM'}
                        style={{
                          marginRight: '0.18in',
                        }}
                      />
                      <CheckBoxInput
                        label={'PM'}
                        style={{
                          marginRight: '0.24in',
                        }}
                      />
                    </Row>
                  </Column>
                </Row>
                <Row>
                  <Heading1>4. Patient Disposition: </Heading1>
                  <Text>(select only 1)</Text>
                </Row>
                <Column
                  style={{
                    marginLeft: '0.13in',
                  }}
                >
                  <Row>
                    <CheckBoxInput
                      label={'a. Improved'}
                      boxMarginRight='0.22in'
                      style={{
                        marginRight: '1.28in',
                      }}
                    />
                    <CheckBoxInput
                      label={'e. Expired'}
                      boxMarginRight='0.18in'
                      style={{
                        marginRight: '0.19in',
                      }}
                    />
                    <SegmentedDateInput
                      style={{
                        marginRight: '0.20in',
                      }}
                    />
                    <SegmentedTimeInput
                      label={'Time: '}
                      style={{
                        marginRight: '0.24in',
                      }}
                    />
                    <CheckBoxInput
                      label={'AM'}
                      style={{
                        marginRight: '0.18in',
                      }}
                    />
                    <CheckBoxInput
                      label={'PM'}
                      style={{
                        marginRight: '0.24in',
                      }}
                    />
                  </Row>
                  <Row>
                    <CheckBoxInput
                      label={'b. Recovered'}
                      boxMarginRight='0.22in'
                      style={{
                        marginRight: '1.24in',
                      }}
                    />
                    <CheckBoxInput
                      label={'f. Transferred/Referred'}
                      boxMarginRight='0.22in'
                      style={{
                        marginRight: '0.08in',
                      }}
                    />
                    <FieldInput width='4.0in' debug />
                  </Row>
                  <Row>
                    <CheckBoxInput
                      label={'c. Home/Discharged Against Medical Advise'}
                      boxMarginRight='0.22in'
                      style={{
                        marginRight: '0.90in',
                      }}
                    />
                    <AddressInput />
                  </Row>
                  <Row>
                    <CheckBoxInput
                      label={'d. Absconded'}
                      boxMarginRight='0.23in'
                      style={{
                        marginRight: '1.67in',
                      }}
                    />
                    <Text
                      style={{
                        marginRight: '0.08in',
                      }}
                    >
                      Reason/s for referral/transfer:
                    </Text>
                    <FieldInput width='3.63in' debug />
                  </Row>
                </Column>
                <Row>
                  <Heading1
                    style={{
                      marginRight: '0.20in',
                    }}
                  >
                    5. Type of Accomodation:
                  </Heading1>
                  <CheckBoxInput
                    label='Private'
                    style={{
                      marginRight: '0.18in',
                    }}
                    boxMarginRight='0.13in'
                  />
                  <CheckBoxInput
                    label='Non-Private (Charity/Service)'
                    boxMarginRight='0.13in'
                  />
                </Row>
              </Column>
            </Column>
            <Column
              style={{
                borderBottom: '1.5 #000 solid',
              }}
            >
              <Column
                style={{
                  marginHorizontal: '0.07in',
                  marginTop: 0,
                  height: '0.50in',
                }}
              >
                <Heading1>6. Admission Diagnosis/es: </Heading1>
              </Column>
            </Column>
            <Column
              style={{
                borderBottom: '1.5 #000 solid',
              }}
            >
              <Column
                style={{
                  margin: '0.07in',
                  marginTop: 0,
                }}
              >
                <Row
                  style={{
                    alignItems: 'center',
                  }}
                >
                  <Heading1
                    style={{
                      marginRight: '0.04in',
                    }}
                  >
                    7. Discharge Diagnosis/es
                  </Heading1>
                  <Text>(Use additional CF2 if necessary):</Text>
                </Row>
                <Row
                  style={{
                    marginLeft: '0.20in',
                  }}
                >
                  <Column
                    style={{
                      marginRight: '0.17in',
                    }}
                  >
                    <Text
                      style={{
                        marginLeft: '0.29in',
                      }}
                    >
                      Diagnosis
                    </Text>
                    <Row>
                      <Column
                        style={{
                          marginRight: '0.09in',
                        }}
                      >
                        <Text style={{ marginBottom: '0.25in' }}>a.</Text>
                        <Text>b.</Text>
                      </Column>
                      <Column>
                        <StackedLines numLines={6} />
                      </Column>
                    </Row>
                  </Column>
                  <Column
                    style={{
                      marginRight: '0.17in',
                    }}
                  >
                    <Text
                      style={{
                        marginLeft: '0.10in',
                      }}
                    >
                      ICD-10 Code/s
                    </Text>
                    <StackedLines numLines={6} />
                  </Column>
                  <Column
                    style={{
                      marginRight: '0.17in',
                    }}
                  >
                    <Text
                      style={{
                        marginLeft: '0.29in',
                      }}
                    >
                      Related Procedure/s (if there’s any) RVS Code
                    </Text>
                    <Row>
                      <Column
                        style={{
                          marginRight: '0.09in',
                        }}
                      >
                        <Text>i.</Text>
                        <Text>ii.</Text>
                        <Text>iii.</Text>
                        <Text>i.</Text>
                        <Text>ii.</Text>
                        <Text>iii.</Text>
                      </Column>
                      <Column>
                        <StackedLines numLines={6} />
                      </Column>
                    </Row>
                  </Column>
                </Row>
              </Column>
            </Column>
          </Column>
        </Column>
      </Page>
    </Document>
  );
}

export default CF2;
