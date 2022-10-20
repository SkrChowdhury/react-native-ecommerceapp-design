import React, {useState} from 'react';
import {Image, View, Text,StyleSheet,FlatList,TextInput,TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
    return <View style={styles.parentContainer}>
<ScrollView>
            <View style={styles.header}>
            <Text style={styles.headerText}>Home Page</Text>
           <Icon style={{marginRight:20,marginTop:10}} name="bell" size={28} color="#37BB92" />
        </View>
        <View style={styles.headerSubtext}>
            <Text style={styles.headerSubtext1} >Choose your course</Text>
            <Text style={styles.headerSubtext2}>right away</Text>
        </View>
             <TextInput
        style={styles.searchField}
        placeholder="Search for your grade, course, training type.."
        placeholderTextColor="#778899"
      />

      <View style={styles.categoryParentContainer}>
        <View style={styles.categoryChildContainer1} >
            <Image 
            style={styles.categoryImage}  
            source={{uri:'https://www.shareicon.net/data/512x512/2016/09/21/832388_school_512x512.png'}} />
            <Text style={styles.categoryText} >Category</Text>
        </View>
        <View style={styles.categoryChildContainer2} >
            <Image 
            style={styles.categoryImage}  
            source={{uri:'https://www.shareicon.net/data/512x512/2017/06/06/886747_media_512x512.png'}} />
            <Text style={styles.categoryText}>Boutique class</Text>
        </View>

        <View style={styles.categoryChildContainer3} >
            <Image 
            style={styles.categoryImage}  
            source={{uri:'https://www.shareicon.net/data/512x512/2016/09/21/832385_drink_512x512.png'}} />
            <Text style={styles.categoryText}>Free Course</Text>
        </View>
        
        <View style={styles.categoryChildContainer3} >
            <Image 
            style={styles.categoryImage}  
            source={{uri:'https://www.shareicon.net/data/512x512/2016/09/21/832395_document_512x512.png'}} />
            <Text style={styles.categoryText}>Book Store</Text>
        </View>

        <View style={styles.categoryChildContainer3} >
            <Image 
            style={styles.categoryImage}  
            source={{uri:'https://www.shareicon.net/data/512x512/2017/06/01/886647_track_512x512.png'}} />
            <Text style={styles.categoryText}>Live Course</Text>
        </View>

        <View style={styles.categoryChildContainer3} >
            <Image 
            style={styles.categoryImage}  
            source={{uri:'https://www.shareicon.net/data/512x512/2017/06/01/886656_light_512x512.png'}} />
            <Text style={styles.categoryText}>Leader Board</Text>
        </View>

      </View>

      <View style={{marginTop:12}}>
        <View style={{flexDirection:"row",justifyContent:'space-between',marginBottom:5}}>
            <Text style={{ fontSize:20,
    fontWeight:'900',marginLeft:20}}>Recommended course</Text>
            <Text style={{marginRight:20,alignSelf:'center',color:'#808080',fontSize:14}}>more</Text>
        </View>
                <View style={styles.headerSubtext}>
            <Text style={styles.headerSubtext1} >You may also like</Text>
            <Icon style={{marginLeft:5}} name="arrow-down" size={16} color="#37BB92" />
        </View>
        
      </View>

      <ScrollView horizontal style={{margin:10}} showsHorizontalScrollIndicator={false}>
        <View style={[{width:150,height:170, backgroundColor:'#e0ffff',marginRight:8},styles.shadow]}>
            <Image 
            style={{width:'80%',height:80,alignSelf:'center'}}  
            source={{uri:'https://img.freepik.com/free-vector/unemployment-concept-dismisses-employee-leaves-workplace-office-depressed-man-sits-sofa-colleague-support-belongings-box-jobless-troubles-job-reduction_575670-794.jpg'}} />
            <Text style={{fontWeight:'600',fontSize:14,marginLeft:5,marginTop:5, marginLeft:10}}>Morning Textbook</Text>
            <Text style={{fontWeight:'bold',fontSize:18, marginLeft:10, color:'#2f4f4f'}}>8.8</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:20}}>
                <View style={{flexDirection:'row',marginTop:8}}>
                    <Icon style={{marginLeft:5}} name="star" size={10} color="#ffa500" />
                    <Icon style={{marginLeft:5}} name="star" size={10} color="#ffa500" />
                    <Icon style={{marginLeft:5}} name="star" size={10} color="#ffa500" />
                    <Icon style={{marginLeft:5}} name="star" size={10} color="#ffa500" />
                    <Icon style={{marginLeft:5}} name="star" size={10} color="#ffa500" />
                </View>
                <Icon style={{marginLeft:5}} name="heart" size={20} color="#ff6347" />
            </View>
        </View>
                <View style={[{width:150,height:170, backgroundColor:'#e0ffff',marginRight:8},styles.shadow]}>
            <Image 
            style={{width:'80%',height:80,alignSelf:'center'}}  
            source={{uri:'https://img.freepik.com/free-vector/man-casual-using-laptop_74855-2489.jpg'}} />
            <Text style={{fontWeight:'600',fontSize:14,marginLeft:5,marginTop:5, marginLeft:10}}>English Reading</Text>
            <Text style={{fontWeight:'bold',fontSize:18, marginLeft:10, color:'#2f4f4f'}}>8.0</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:20}}>
                <View style={{flexDirection:'row',marginTop:8}}>
                    <Icon style={{marginLeft:5}} name="star" size={10} color="#ffa500" />
                    <Icon style={{marginLeft:5}} name="star" size={10} color="#ffa500" />
                    <Icon style={{marginLeft:5}} name="star" size={10} color="#ffa500" />
                    <Icon style={{marginLeft:5}} name="star" size={10} color="#ffa500" />
                    <Icon style={{marginLeft:5}} name="star" size={10} color="#ffa500" />
                </View>
                <Icon style={{marginLeft:5}} name="heart-o" size={20} color="#ff6347" />
            </View>
        </View>
                <View style={[{width:150,height:170, backgroundColor:'#e0ffff',marginRight:8},styles.shadow]}>
            <Image 
            style={{width:'80%',height:80,alignSelf:'center'}}  
            source={{uri:'https://img.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg'}} />
            <Text style={{fontWeight:'600',fontSize:14,marginLeft:5,marginTop:5, marginLeft:10}}>Group Discussion</Text>
            <Text style={{fontWeight:'bold',fontSize:18, marginLeft:10, color:'#2f4f4f'}}>7.5</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:20}}>
                <View style={{flexDirection:'row',marginTop:8}}>
                    <Icon style={{marginLeft:5}} name="star" size={10} color="#ffa500" />
                    <Icon style={{marginLeft:5}} name="star" size={10} color="#ffa500" />
                    <Icon style={{marginLeft:5}} name="star" size={10} color="#ffa500" />
                    <Icon style={{marginLeft:5}} name="star" size={10} color="#ffa500" />
                    <Icon style={{marginLeft:5}} name="star" size={10} color="#ffa500" />
                </View>
                <Icon style={{marginLeft:5}} name="heart" size={20} color="#ff6347" />
            </View>
        </View>

      </ScrollView>
            {/* <View>
        <View style={{flexDirection:"row",justifyContent:'space-between',marginBottom:5}}>
            <Text style={{ fontSize:20,
    fontWeight:'900',marginLeft:20}}>Todays Event</Text>
            <Text style={{marginRight:20,alignSelf:'center',color:'#808080',fontSize:14}}>View all</Text>
        </View>
                <View style={styles.headerSubtext}>
            <Text style={styles.headerSubtext1} >check all events out</Text>
            <Icon style={{marginLeft:5}} name="arrow-down" size={16} color="#37BB92" />
        </View>
        
      </View> */}

</ScrollView>


    
    </View>
}

const styles = StyleSheet.create({
    parentContainer: {
        flex: 1,
        flexDirection: 'column',
        marginTop:'10%'
    },
    header: {
        flexDirection:'row',
        justifyContent:'space-between',
    width: '100%',
    height:'6%', 
    paddingLeft: 20,
    flexDirection:'row'
},
headerText:{
    fontSize:28,
    fontWeight:'900'
},
bellIcon:{
    marginTop:8,
    marginRight:25,
    height:35,
    width:35
},
headerSubtext:{
    flexDirection:'row',
   paddingLeft: 20,
},
headerSubtext1:{
    fontSize:12,
},
headerSubtext2:{
    fontSize:12,
    paddingLeft:3,
    color: 'green'
},
searchField:{
width: '90%',
backgroundColor:'#dcdcdc',
alignSelf:'center',
marginTop:20,
borderRadius:20,
paddingLeft:15
},
categoryParentContainer:{
    height:'28%',
    margin:20,
    flexDirection:'row',
    flexWrap:'wrap',
},
categoryChildContainer1:{
    flexDirection:'column',
   width:110,
},
categoryChildContainer2:{
    flexDirection:'column',
    width:110,
   
},
categoryChildContainer3:{
    flexDirection:'column',
    width:110,
},

categoryImage:{
    height:60,
    width:60,
    alignSelf:'center',
    
    
},
categoryText:{
   alignSelf:'center' ,
   marginTop:'10%',
   fontSize:12,
   marginBottom:15
},
shadow: {
  shadowOffset: { width: 15, height: 15 },
  shadowColor: 'black',
  shadowOpacity: 2,
  elevation: 4,
  // background color must be set
  backgroundColor : "#fff" // invisible color
}



})
export default HomeScreen;