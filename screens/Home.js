import {useState} from "react";
import {SafeAreaView, FlatList, View} from "react-native";

import {COLORS, IMGData} from "../constants";
import {HomeHeader, FocusedStatusBar, IMGCard} from "../components"

const Home = () => {
const [imgData, setImgData] = useState(IMGData)
const nameSearch = (value) => {
 if(!value.length) setImgData(IMGData);

 const filteredData = IMGData.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));

 if (filteredData.length){
   setImgData(filteredData);
 } else {
   setImgData(IMGData)
 }
}

  return (
<SafeAreaView style = {{flex:1}}>
<FocusedStatusBar background={COLORS.primary}/>

<View style={{flex:1}}>
<View style={{zIndex:0}}>
<FlatList
  data={imgData}
  renderItem={({item})=><IMGCard data={item}/>}
  keyExtractor={(item)=>item.id}
  showsVerticalScrollIndicator={false}
  ListHeaderComponent={<HomeHeader onSearch={nameSearch}/>}
/>
</View>
<View style={{
  position:"absolute",
  top:0,
  bottom:0,
  right:0,
  left:0,
  zIndex:-1,

}}>

<View style={{height:300, backgroundColor:COLORS.primary}}/>
<View style={{flex:1, backgroundColor:COLORS.white}}/>
</View>
</View>
</SafeAreaView>
  );
}

export default Home;
