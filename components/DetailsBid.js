import {Text, View, Image} from 'react-native';
import {Price} from "./SubInfo";
import {COLORS, SIZES, FONTS} from "../constants";

const DetailsBid = ({bid}) => {
  return (
    <View style={{
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      }}>
    <View style={{
      flexDirection:"row",
      marginVertical: SIZES.base,
      paddingHorizontal:SIZES.base,
      width: "50%"
    }} >
      <Image
      source={bid.image}
      resizeMode="contain"
      style={{
        width:48,
        height:48,
      }}
      />
      <View style={{
        marginTop:SIZES.base,
        marginLeft:SIZES.base/2,
      }}>
      <Text style={{
        fontFamily:FONTS.semiBold,
        fontSize:SIZES.small,
        color: COLORS.primary,
      }}>
      Bid Placed By : {bid.name}
      </Text>
      <Text style={{
        fontFamily:FONTS.regular,
        fontSize:SIZES.small-2,
        color: COLORS.secondary,
        marginTop:3
      }}>
      {bid.date}
      </Text>
      </View>
      </View>
      <View style={{
        marginRight:SIZES.font,
      }}>
      <Price price={bid.price}/>
      </View>
      </View>
  );
};
export default DetailsBid;