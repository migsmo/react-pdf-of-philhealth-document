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
import Column from './components/layout/column';
import Row from './components/layout/row';
import DateInput from './components/templates/date.input';
import NameInput from './components/templates/name.input';
import PhilHealthPinInput from './components/templates/philhealth-pin.input';
import BoldText from './components/typography/bold-text.typography';
import MinionProItalic from './fonts/minion-pro/Minion-Pro-Bold.ttf';
import RobotoBold from './fonts/roboto/Roboto-Bold.ttf';
import RobotoLight from './fonts/roboto/Roboto-Light.ttf';
const styles = StyleSheet.create({
  page: {
    maxWidth: '100%',
    padding: 18,
  },
  section: {
    margin: 10,
    padding: 10,
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
  },

  text_8: {
    fontSize: 8,
  },
  bold: {
    fontFamily: 'RobotoBold',
  },

  top_header: {
    paddingLeft: 21.28,
    // paddingTop: 26.6,
    flexDirection: 'row',
    paddingBottom: 3,
    alignItems: 'center',
    borderBottom: '1.5 #000 solid',
  },
  header_logo: {
    width: 106,
    height: 42.56,
    marginRight: 30,
    marginTop: 23,
  },
  header_center: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 9,
    marginRight: 36,
  },
  header_right: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 9,
    fontFamily: 'RobotoLight',
  },
  bottom_header: {
    fontSize: 8,
    marginLeft: 3.6,
  },
  section_divider: {
    backgroundColor: 'black',
    color: 'white',
    paddingTop: '4.32',
    paddingBottom: '4.32',
  },
  part_one_section: {
    margin: 3.6,
  },
});

Font.register({
  family: 'MinionProItalic',
  src: MinionProItalic,
});

Font.register({
  family: 'RobotoLight',
  src: RobotoLight,
});

Font.register({
  family: 'RobotoBold',
  src: RobotoBold,
});

function App() {
  return (
    <PDFViewer style={styles.viewer}>
      <Document>
        <Page size='LEGAL' style={styles.page}>
          <View style={styles.body}>
            <View>
              <View style={styles.top_header}>
                <Image
                  style={styles.header_logo}
                  src='/images/philhealth_logo.png'
                />
                <View style={styles.header_center}>
                  <Text style={styles.text_8}>Republic of the Philippines</Text>
                  <Text style={{ fontSize: 10 }}>
                    PHILIPPINE HEALTH INSURANCE CORPORATION
                  </Text>
                  <Text style={styles.text_8}>
                    Citystate Centre 709 Shaw Boulevard, Pasig City
                  </Text>
                  <Text style={styles.text_8}>
                    Call Center (02) 441-7442 l Trunkline (02) 441-7444
                  </Text>
                  <Text style={styles.text_8}>www.philhealth.gov.ph</Text>
                  <Text style={styles.text_8}>
                    email: actioncenter@philhealth.gov.ph
                  </Text>
                </View>

                <View style={styles.header_right}>
                  <Text>This form may be reproduced and</Text>
                  <Text>is NOT FOR SALE</Text>
                  <Text style={{ fontSize: 28, fontFamily: 'RobotoBold' }}>
                    CSF
                  </Text>
                  <Text style={{ fontFamily: 'RobotoBold' }}>
                    (Claim Signature Form)
                  </Text>
                  <Text>Revised September 2018</Text>
                </View>
              </View>
              <View style={styles.bottom_header}>
                <View>
                  <Text
                    style={{
                      marginTop: '3.6px',
                      fontFamily: 'RobotoBold',
                      marginBottom: '3.6px',
                    }}
                  >
                    IMPORTANT REMINDERS:
                  </Text>
                  <Text style={{ marginBottom: '3.6px' }}>
                    PLEASE WRITE IN CAPITAL{' '}
                    <Text style={styles.bold}>LETTERS</Text> AND{' '}
                    <Text style={styles.bold}>CHECK</Text> THE APPROPRIATE
                    BOXES.
                  </Text>

                  <Text style={{ marginBottom: '3.6px' }}>
                    All information required in this form are necessary. Claim
                    forms with incomplete information shall not be processed.
                  </Text>
                  {/* <Svg viewBox='0 0 220 100'>
                  <Rect width='100' height='100' fill='black' />
                </Svg> */}
                  <Text
                    style={{ marginBottom: '3.6px', fontFamily: 'RobotoBold' }}
                  >
                    FALSE/INCORRECT INFORMATION OR MISREPRESENTATION SHALL BE
                    SUBJECT TO CRIMINAL, CIVIL OR ADMINISTRATIVE LIABILITIES.
                  </Text>
                  <View
                    style={{
                      top: 10,
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
                      Serial #
                    </Text>
                    <BoxInput number={10} />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.section_divider}>
              <Text style={{ fontSize: 10, textAlign: 'center' }}>
                PART I - MEMBER AND PATIENT INFORMATION AND CERTIFICATION
              </Text>
            </View>
            <View style={styles.part_one_section}>
              <Row>
                <PhilHealthPinInput
                  label={'1. PhilHealth Identification Number (PIN) of Member:'}
                  fontSize={10}
                />
              </Row>
              <Row>
                <Column>
                  <BoldText fontSize={10}>2. Name of Member:</BoldText>
                  <NameInput />
                </Column>
                <Column>
                  <BoldText fontSize={10}>3. Member Date of Birth:</BoldText>
                  <Row>
                    <DateInput />
                  </Row>
                </Column>
              </Row>
              <Row
                style={{
                  marginTop: '0.12in',
                }}
              >
                <PhilHealthPinInput
                  label={
                    '4. PhilHealth Identification Number (PIN) of Dependent:'
                  }
                />
              </Row>
              <Row>
                <Column>
                  <BoldText fontSize={10}>5. Name of Patient:</BoldText>
                  <NameInput />
                </Column>
                <Column>
                  <BoldText fontSize={10}>6. Relationship to Member:</BoldText>
                  <Row>
                    <Row>
                      <CheckBoxInput
                        label={'child'}
                        style={{
                          marginRight: '0.12in',
                        }}
                      />
                      <CheckBoxInput label={'parent'} />
                      <CheckBoxInput label={'spouse'} />
                    </Row>
                  </Row>
                </Column>
              </Row>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default App;
