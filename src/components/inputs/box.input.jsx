import { StyleSheet, View } from '@react-pdf/renderer';
import React from 'react';
const styles = StyleSheet.create({
  square: {
    width: 12,
    height: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 0, // No left border for middle squares
    borderRightWidth: 1, // Right border on all squares
    borderColor: '#000',
  },
  firstSquare: {
    borderLeftWidth: 1, // Add left border to the first square
  },
  squaresContainer: {
    flexDirection: 'row',
  },
});

function BoxInput({ x, y, number, style }) {
  return (
    <>
      <View style={[styles.squaresContainer, style]}>
        {Array.from({ length: number }, (_, index) => (
          <View
            key={index}
            style={[styles.square, index === 0 ? styles.firstSquare : {}]}
          />
        ))}
      </View>
    </>
  );
}

export default BoxInput;

// <Canvas
//   paint={(painter) => {
//     const squareSize = 12; // Size of the squares
//     const spacing = 2; // Spacing between the squares
//     for (let i = 0; i < number; i++) {
//       painter
//         .rect(x + (squareSize + spacing) * i, y, squareSize, squareSize)
//         .stroke();
//     }
//   }}
//   debug
//   style={{
//     position: 'absolute',
//     top: y,
//     left: x,
//     width: number * (12 + 2) - 2, // Total width of all squares and spacings
//     height: 12,
//     zIndex: 1,
//   }}
// />
