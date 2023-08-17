import { View, Text, Image, TextInput } from 'react-native';
import { COLORS, FONTS, SIZES, assets } from '../constants';


const LogInHeader = () => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{
            width: 200,
            height: 100,
          }}
        />
      </View>
      <View style={{ marginTop: -25, marginLeft: 10, marginBottom: 10, alignItems:"center" }}>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.white,
          }}>
          Hello, There 👋
        </Text>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}>
          Welcome To Avstracts
        </Text>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.white,
            marginTop: SIZES.base/2,
            marginBottom:SIZES.extraLarge*3,
          }}>
          Where you can unleash your creative beast
        </Text>
      </View>
    </View>
  );
};

export default LogInHeader;
