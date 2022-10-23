import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
parentContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop:'4%'
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
  backgroundColor : "#fff" // invisible color
}
})

export default styles;