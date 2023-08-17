import { View, Text, TouchableOpacity } from 'react-native';
import { LogInHeader, LogInCard } from '../components';
import { COLORS, SIZES, SHADOWS, FONTS } from '../constants';

const SignUp = () => {
  return (
    <View>
      <LogInHeader />
      <Text>Sign Up</Text>
    </View>
  );
};

export default SignUp;