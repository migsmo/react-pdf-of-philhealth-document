import { Text, View } from '@react-pdf/renderer';
import React from 'react';

function SectionDivider({ text, description }) {
  return (
    <View
      style={{
        backgroundColor: 'black',
        color: 'white',
        fontFamily: 'SourceSansBold',
        fontSize: 11.52,
        justifyContent: 'center',
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
      }}
    >
      <Text>{text}</Text>
      {description ? (
        <Text
          style={{
            fontFamily: 'SourceSansLight',
            fontSize: 9.6,
            marginLeft: '0.12in',
            alignSelf: 'flex-end',
            bottom: 1,
          }}
        >
          {description}
        </Text>
      ) : (
        <></>
      )}
    </View>
  );
}

export default SectionDivider;
