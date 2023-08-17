import { Text, View } from 'react-native';
import { Price, IMGTitle } from './SubInfo';
import { COLORS, SIZES, FONTS } from '../constants';
import {useState} from "react";

const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <View
        style={{
          width: '100%',
        }}>
        <View
          style={{
            paddingBottom: SIZES.base,
          }}>
          <IMGTitle title={data.name} titleSize={SIZES.extraLarge} />
        </View>
        <View
          style={{
            paddingBottom: SIZES.base,
            marginLeft:-4,
          }}>
          <Price price={data.price} />
        </View>
        <View
          style={{
            paddingBottom: SIZES.base,
          }}>
          <IMGTitle subTitle={data.creator} subTitleSize={SIZES.font} />
        </View>
      </View>
      <View
        style={{
          marginVertical: SIZES.extraLarge,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: SIZES.font,
              fontFamily: FONTS.semiBold,
              color: COLORS.primary,
            }}>
            Materials Used : 
          </Text>
          <Text
            style={{
              fontSize: SIZES.font,
              fontFamily: FONTS.regular,
              color: COLORS.primary,
            }}>
            {data.material}
          </Text>
        </View>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
            marginTop:SIZES.base
          }}>
          Description
        </Text>
        <View
          style={{
            marginTop: SIZES.base/3,
          }}>
          <Text
            style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              color: COLORS.secondary,
              lineHeight: SIZES.large,
            }}>
            {text}
            {!readMore && '...'}
            <Text style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.semiBold,
              color: COLORS.primary,
            }}
            onPress={() => {
              if(!readMore){
                setText(data.description);
                setReadMore(true)
              } else{
                 setText(data.description.slice(0, 100));
                setReadMore(false)
              }
            }}
            >
            {readMore ? " Show Less" : " Read More"}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};
export default DetailsDesc;
