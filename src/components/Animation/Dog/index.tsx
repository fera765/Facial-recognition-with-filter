import React from 'react';
import { View, Text, Image } from 'react-native';
import { Face } from 'react-native-camera';

import DogImage from '../../../assets/dog.png'

const Dog: React.FC<Face> = ({
  face: {
    bounds: {
      size: { width: faceWidth, height: faceHeight }
    },
    leftEyePosition,
    rightEyePosition
  }
}) => {
  const glassWidth = faceWidth
  const glassHeight = faceHeight
  const rightY = rightEyePosition.y || 0
  const leftY = leftEyePosition.y || 0

  const rightX = rightEyePosition.x || 0
  const leftX = leftEyePosition.x || 0

  const transformAngle = (
    angleRad = Math.atan(
      (rightY - leftY) /
      (rightX - leftX)
    )
  ) => angleRad * 180 / Math.PI

  return (
    <View style={{
      position: 'absolute',
      left: leftX - glassWidth * 1.15,
      top: leftY - glassHeight * 0.39
    }}>
      <Image
        source={DogImage}
        style={{
          width: glassWidth * 2,
          height: glassHeight * 1.2,
          resizeMode: 'contain',
          transform: [{ rotate: `${transformAngle()}deg` }]
        }}
      />
    </View>
  )
}

export default Dog;
