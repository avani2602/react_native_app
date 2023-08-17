import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { COLORS, SIZES, SHADOWS, FONTS,assets } from '../constants';
import { LogInSignInButton, SignUpUsingButton } from './Button';
import { useNavigation } from '@react-navigation/native';

 export const LogInCard1 = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
        padding: SIZES.font,
        marginTop: -60,
      }}>
      <Text
        style={{
          fontSize: SIZES.large,
          fontFamily: FONTS.bold,
          alignSelf: 'center',
          marginTop: SIZES.font,
        }}>
        LOG IN
      </Text>
      <View
        style={{
          marginTop: SIZES.large,
        }}>
        <Text>Name or Email</Text>
        <TextInput
          placeholder=" Enter Username or Email ID"
          style={{
            color: COLORS.primary,
            borderRadius: 5,
            borderWidth: SIZES.base / 4,
            height: SIZES.font * 2,
            fontSize: SIZES.small,
            fontFamily: FONTS.light,
          }}
        />
      </View>
      <View
        style={{
          marginTop: SIZES.large,
        }}>
        <Text>Password</Text>
        <TextInput
          placeholder=" Enter Password"
          style={{
            color: COLORS.primary,
            borderRadius: 5,
            borderWidth: SIZES.base / 4,
            height: SIZES.font * 2,
            fontSize: SIZES.small,
            fontFamily: FONTS.light,
          }}
        />
      </View>
      <LogInSignInButton
        fontSize={SIZES.large}
        handlePress={() => navigation.navigate('Home')}
        text="LOG IN"
      />
    </View>
  );
};

export const LogInCard2 = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
        padding: SIZES.font,
        marginTop: SIZES.extraLarge,
      }}>
      <Text
        style={{
          fontSize: SIZES.large,
          fontFamily: FONTS.bold,
          alignSelf: 'center',
          marginTop: SIZES.font,
        }}>
        SIGN UP USING
      </Text>
      <SignUpUsingButton
      imgUrl={assets.google}
        fontSize={SIZES.large}
        width={25}
        height={25}
        text="Google"
      />
      <SignUpUsingButton
        fontSize={SIZES.large}
        imgUrl={assets.apple}
         width={21}
        height={25}
         text="Apple"
      />
      <SignUpUsingButton
        fontSize={SIZES.large}
        imgUrl={assets.github}
         width={25}
        height={25}
         text="Github"
      />
    </View>
  );
};

