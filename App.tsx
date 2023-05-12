import {Text, SafeAreaView, View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import OtpInput from './src/components/otpInput';
import {horizontalScale, verticalScale} from './src/utils/scale';

const App = () => {
  const [otp, setOtp] = useState<String>();
  return (
    <SafeAreaView>
      <View style={styles.otpCon}>
        <OtpInput inputsCount={2} onComplete={text => setOtp(text)} />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  otpCon: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginHorizontal: horizontalScale(10),
    marginVertical: verticalScale(20),
  },
});
