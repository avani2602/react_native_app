import {View, Image, Text} from "react-native";
import {useNavigation} from "@react-navigation/native";

import {COLORS, SIZES, SHADOWS, assets} from "../constants";
import {LikeButton, DetailsButton} from "./Button"
import {SubInfo, Price, IMGTitle} from "./SubInfo"

const IMGCard = ({data}) =>{
  const navigation = useNavigation();
  return(
    <View style={{
      backgroundColor: COLORS.white,
      borderRadius : SIZES.font,
      marginBottom: SIZES.extraLarge,
      margin: SIZES.base,
      ...SHADOWS.dark,
    }}>
    <View style={{width:"100%", height:250}}>
    <Image
    source={data.image}
    resizeMode="cover"
    style={{
      width:"100%",
      height:"100%",
      borderTopLeftRadius: SIZES.font,
      borderTopRightRadius: SIZES.font

    }}
    />
    <LikeButton imgUrl={assets.heart} right={10} top={10}/>
    </View>
    <SubInfo/>
    <View style={{
      width:"100%",
      padding:SIZES.font,
    }}>
    <IMGTitle
    title={data.name}
    subTitle={data.creator}
    titleSize={SIZES.large}
    subSize={SIZES.small}
    />
    <View style={{
      marginTop: SIZES.font,
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems: "center",
    }}>
    <Price price={data.price}/>
    <DetailsButton
    minWidth={120}
    fontSize={SIZES.font}
    handlePress={()=>navigation.navigate("Details", {data})}
    />
    </View>
    </View>
    </View>
  )
}

export default IMGCard;