import { Font, PDFViewer, StyleSheet } from '@react-pdf/renderer';
import './App.css';
import CF2 from './components/react-pdf-documents/cf2';
import Helvetica from './fonts/helvetica/Helvetica.ttf';
import MinionProBold from './fonts/minion-pro/Minion-Pro-Bold.ttf';
import MinionProItalic from './fonts/minion-pro/Minion-Pro-Italic.ttf';
import MinionProRegular from './fonts/minion-pro/MinionPro-Regular.ttf';
import SourceSansBold from './fonts/source-sans/SourceSans3-Bold.ttf';
import SourceSansLight from './fonts/source-sans/SourceSans3-Light.ttf';
import SourceSansSemiBoldIt from './fonts/source-sans/SourceSans3-SemiBoldItalic.ttf';

const styles = StyleSheet.create({
  viewer: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
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

Font.register({
  family: 'Helvetica',
  src: Helvetica,
});

function App() {
  return (
    <PDFViewer style={styles.viewer}>
      <CF2 />
      {/* <CF1 /> */}
    </PDFViewer>
  );
}

export default App;
