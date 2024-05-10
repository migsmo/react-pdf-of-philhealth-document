import Column from '../layout/column';
import FieldInput from './field.input';

function StackedLines({ numLines = 1, lineWidth = '1in', style, debug }) {
  return (
    <Column style={style} debug={debug}>
      {Array.from({ length: numLines }, (_, index) => (
        <FieldInput
          key={index}
          width={lineWidth}
          style={{
            height: '0.17in',
          }}
        />
      ))}
    </Column>
  );
}

export default StackedLines;
