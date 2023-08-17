import { Text, View, TouchableOpacity, Image } from 'react-native';
import { COLORS, SIZES, SHADOWS, FONTS } from '../constants';

export const LikeButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: 'absolute',
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}>
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{
          width: 24,
          height: 24,
        }}
      />
    </TouchableOpacity>
  );
};

export const DetailsButton = ({
  minWidth,
  fontSize,
  handlePress,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        ...props,
        minWidth: minWidth,
        padding: SIZES.small,
      }}
      onPress={handlePress}>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: 'center',
        }}>
        See Details
      </Text>
    </TouchableOpacity>
  );
};

export const BidButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        ...props,
        minWidth: minWidth,
        padding: SIZES.small,
      }}
      onPress={handlePress}>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: 'center',
        }}>
        Place a Bid
      </Text>
    </TouchableOpacity>
  );
};

export const BackButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: 'absolute',
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}>
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{
          width: 24,
          height: 24,
        }}
      />
    </TouchableOpacity>
  );
};

export const LogInSignInButton = ({ handlePress, text, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.base / 2,
        ...props,
        padding: SIZES.small,
        width: '40%',
        marginTop: SIZES.large,
        alignSelf: 'center',

        justifyContent: 'center',
      }}
      onPress={handlePress}>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          color: COLORS.white,
          fontSize: SIZES.medium,
          textAlign: 'center',
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export const SignUpUsingButton = ({
  handlePress,
  text,
  imgUrl,
  width,
  height,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.base / 2,
        ...props,
        padding: SIZES.small,
        width: '100%',
        marginTop: SIZES.medium,
        alignSelf: 'center',
        height: SIZES.extraLarge * 1.4,
        justifyContent: 'center',
        alignItems:"center",
      }}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Image
          style={{
            width: width,
            height: height,
          }}
          source={imgUrl}
        />
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            color: COLORS.white,
            fontSize: SIZES.large,
            textAlign: 'center',
            marginLeft:SIZES.large,
            marginTop:1.5,
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
