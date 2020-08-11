import React, { useState, createRef } from 'react';
import { View, Text } from 'react-native';
import { RNCamera, Face } from 'react-native-camera';

import Glass from './components/Animation/Glass';

const Home: React.FC = () => {
  const [face, setFace] = useState({})
  const camera = createRef<RNCamera>();

  function onFaceDetected({ faces }: any) {
    if (faces[0]) {
      setFace(faces[0])
    } else {
      setFace({})
    }
  }

  return (
    <View style={{ flex: 1 }} collapsable={false}>
      <RNCamera
        ref={camera}
        captureAudio={false}
        style={{ flex: 1 }}
        type={RNCamera.Constants.Type.front}
        onFacesDetected={onFaceDetected}
        faceDetectionLandmarks={RNCamera.Constants.FaceDetection.Landmarks.all}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}>
        {Object.entries(face).length !== 0 && <Glass face={face} />}
      </RNCamera>
    </View>
  )
}
export default Home;
