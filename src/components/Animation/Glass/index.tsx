import React from 'react';
import { View, Text, Image } from 'react-native';
import { Face } from 'react-native-camera';

import GlassImage from '../../../assets/glasse.png'
import Bigode from '../../../assets/bigode.png'

const Glass: React.FC<Face> = ({
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
    <>
      <View style={{
        position: 'absolute',
        left: leftX - glassWidth * 0.63,
        top: leftY - glassHeight * 0.45
      }}>
        <Image
          source={GlassImage}
          style={{
            opacity: 0.8,
            width: glassWidth,
            height: glassHeight,
            resizeMode: 'contain',
            transform: [{ rotate: `${transformAngle()}deg` }]
          }}
        />
      </View>
      <View style={{
        position: 'absolute',
        left: leftX - glassWidth * 0.54,
        top: leftY - glassHeight * 0.13
      }}>

        <Image
          source={Bigode}
          style={{
            width: glassWidth - 50,
            height: glassHeight - 40,
            resizeMode: 'contain',
            transform: [{ rotate: `${transformAngle()}deg` }]
          }}
        />
      </View>
    </>
  )
}

export default Glass;
