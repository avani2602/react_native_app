import { View, Text, TouchableOpacity } from 'react-native';
import { LogInHeader, LogInCard1, LogInCard2 } from '../components';
import { COLORS, SIZES, SHADOWS, FONTS } from '../constants';
import { useNavigation } from '@react-navigation/native';

const LogIn = () => {
  const navigation = useNavigation();
  return (
    <View>
      <LogInHeader />
      <LogInCard1 />
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
        }}>
        <Text
          style={{
            fontSize: SIZES.small,
            fontFamily: FONTS.light,
            color: COLORS.secondary,
          }}>
          Don't Have an Account -
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.light,
              color: COLORS.primary,
            }}
            onPress={() => navigation.navigate('SignUp')}>
            Sign Up Here
          </Text>
        </TouchableOpacity>
      </View>
      <View>
      <Text style={{
        fontSize:SIZES.large,
        fontFamily: FONTS.semiBold,
        marginTop: SIZES.font,
        alignSelf:"center",
      }}> OR </Text>
      </View>
      <LogInCard2/>
    </View>
  );
};

export default LogIn;
