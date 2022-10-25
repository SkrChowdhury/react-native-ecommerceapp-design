import React, { useEffect, useState } from 'react';
import {View, Text, ScrollView, TouchableOpacity, Animated} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../style/styles';


const SubjectScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);


  const getSubjects = async () => {
     try {
      const response = await fetch('https://gist.githubusercontent.com/SkrChowdhury/670b875411132206615a7f0e64c6daef/raw/ff9f92b4486bda7f0f481b15a66050e6096d776f/subjects.json');
      const json = await response.json();
      //console.log('json',json)
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

    useEffect(() => {
    getSubjects();
  }, []);


 const [tab, setTab] = useState({
        tab1: false,
        tab2: true
    });

    const handleTab = (swap) =>{
   //     if(swap==="tab1"){
   //          setTab({
   //             tab1: true,
   //             tab2: false,
   //             tab3: false,
   //             tab4: false,
   //          })
   //     }
   //     if (swap==="tab2") {
   //      setTab({
   //          tab1: false,
   //          tab2: true,
   //          tab3: false,
   //          tab4:false,
   //   })
   //     }
   //     if (swap==="tab3"){
   //      setTab({
   //          tab1: false,
   //          tab2: false,
   //          tab3: true,
   //          tab4: false,
   //   })
   //     }
   //     if (swap==="tab4"){
   //      setTab({
   //          tab1: false,
   //          tab2: false,
   //          tab3: false,
   //          tab4: true,
   //   })
   //     }
    }

  return (
<ScrollView>
       <View style={styles.parentContainer}>

      <View style={{flexDirection:'row',
    justifyContent:'space-between',
    width: '100%',
    height:'6%', 
    paddingLeft: 20,
    flexDirection:'row'}}>
         <Text style={styles.headerText}>Subject</Text>
         <TouchableOpacity>
            <Icon
               style={{marginRight: 20, marginTop: 10}}
               name="edit"
               size={28}
               color="#37BB92"
            />
         </TouchableOpacity>
      </View>

      <View style={styles.headerSubtext}>
         <Text style={styles.headerSubtext1}>Today's math progress</Text>
         <Text style={styles.headerSubtext2}>0 mins</Text>
      </View>



      <View style={styles.tabGroup}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}
        data={data}
      //   renderItem={({subject})=> (
      //     <TouchableOpacity
      //       activeOpacity={0.6}
      //       underlayColor="#37BB92"
      //       onPress={()=> handleTab("tab1")}
      //       style={[styles.tabButton, tab.tab1 && styles.tabButtonActive]}

      //    >
      //       <Text style={[styles.tabButtonTitle, tab.tab1 && styles.tabButtonTitleActive]}>{subject.subject}</Text>
      //    </TouchableOpacity>
      //   )}
        >
         {data.map((item,index)=>{
            return(
<TouchableOpacity
            activeOpacity={0.6}
            underlayColor="#37BB92"
            onPress={()=> handleTab("tab")}
            style={[styles.tabButton, tab.tab1 && styles.tabButtonActive]}

         >
            <Text style={[styles.tabButtonTitle, tab.tab1 && styles.tabButtonTitleActive]}>{item.subject}</Text>
         </TouchableOpacity>
            )
         })}
         


         {/* <TouchableOpacity
            activeOpacity={0.6}
            underlayColor="#37BB92"
            onPress={()=> handleTab("tab2")}
            style={[styles.tabButton, tab.tab2 && styles.tabButtonActive]}
         >
            <Text style={[styles.tabButtonTitle, tab.tab2 && styles.tabButtonTitleActive]}>English</Text>
         </TouchableOpacity>

         <TouchableOpacity
            activeOpacity={0.6}
            underlayColor="#37BB92"
            onPress={()=> handleTab("tab3")}
            style={[styles.tabButton, tab.tab3 && styles.tabButtonActive]}
         >
            <Text style={[styles.tabButtonTitle, tab.tab3 && styles.tabButtonTitleActive]}>Physics</Text>
         </TouchableOpacity>

         <TouchableOpacity
            activeOpacity={0.6}
            underlayColor="#37BB92"
            onPress={()=> handleTab("tab4")}
            style={[styles.tabButton, tab.tab4 && styles.tabButtonActive]}
         >
            <Text style={[styles.tabButtonTitle, tab.tab4 && styles.tabButtonTitleActive]}>Chemistry</Text>
         </TouchableOpacity> */}
        </ScrollView>
    </View>
    
   <View style={{margin:15}}>
       <ScrollView horizontal showsHorizontalScrollIndicator={false} data={data.contents}>


         {data.map(subject => {
         const singleContent = subject.contents;


         singleContent.map(content => {
            console.log(content);
                return  (<TouchableOpacity>
                  <View style={{height:180,width:170,backgroundColor:'rgb(111,223,143)',borderRadius:20,marginRight:20}}>

            <View style={{width:50,height:50, borderRadius:50, backgroundColor:'white',marginTop:20,marginLeft:20}}>
               <Icon
              style={{alignSelf:'center',marginTop:10}}
              name={content.icon}
              size={28}
              color='#37BB92'
            />

            </View>
            <Text style={{color:'#fff', fontWeight:'bold', fontSize:24,marginTop:10,marginLeft:20}}>{content.title}</Text>
            <Text style={{color:'#fff', fontWeight:'normal', fontSize:14,marginTop:10,marginLeft:20}}>{content.subTitle}</Text>

               </View>
            </TouchableOpacity>)
})  
})
}
        {/* <TouchableOpacity>
          <View style={{height:180,width:170,backgroundColor:'rgb(111,223,143)',borderRadius:20,marginRight:20}}>

            <View style={{width:50,height:50, borderRadius:50, backgroundColor:'white',marginTop:20,marginLeft:20}}>
               <Icon
              style={{alignSelf:'center',marginTop:10}}
              name="pagelines"
              size={28}
              color='#37BB92'
            />

            </View>
            <Text style={{color:'#fff', fontWeight:'bold', fontSize:24,marginTop:10,marginLeft:20}}>Test</Text>
            <Text style={{color:'#fff', fontWeight:'normal', fontSize:14,marginTop:10,marginLeft:20}}>Chapter Knowledge</Text>

         </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={{height:180,width:170,backgroundColor:'rgb(100,200,254)',borderRadius:20,marginRight:20}}>

            <View style={{width:50,height:50, borderRadius:50, backgroundColor:'white',marginTop:20,marginLeft:20}}>
               <Icon
              style={{alignSelf:'center',marginTop:10}}
              name="umbrella"
              size={28}
              color='#37BB92'
            />

            </View>
            <Text style={{color:'#fff', fontWeight:'bold', fontSize:24,marginTop:10,marginLeft:20}}>Summarize</Text>
            <Text style={{color:'#fff', fontWeight:'normal', fontSize:14,marginTop:10,marginLeft:20}}>Study notes</Text>

         </View>
        </TouchableOpacity> */}
    </ScrollView>




            <View style={{marginTop: 12}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}>
            <Text style={{fontSize: 20, fontWeight: '900', marginLeft: 10}}>
              Recommended course
            </Text>
            <Text
              style={{
                marginRight: 20,
                alignSelf: 'center',
                color: '#808080',
                fontSize: 14,
              }}>
              more
            </Text>
          </View>
      <View>
         <Text style={{color:'#808080',fontSize:12, marginLeft:10}}>I learned chapter 6 last time</Text>
        
      </View>
        </View>
   </View>

     <View style={{marginBottom:'10%'}} >
       <View style={[{display:"flex", flexDirection:'row',justifyContent:'space-between', marginHorizontal:15,marginVertical:5, backgroundColor:'orange',paddingHorizontal:10,paddingVertical:20, borderRadius:20,alignItems:'center'},styles.shadow]}>
           
            <View style={{width:40,height:40, borderRadius:50, backgroundColor:'orange',marginTop:5,marginLeft:10}}>
               <Icon
              style={{alignSelf:'center',marginTop:7}}
              name="plus"
              size={28}
              color='#fff'
            />

            </View>

            <View style={{display:'flex',flexDirection:'column'}}>
               <Text style={{fontSize:16}}>Positive Rotation</Text>
               <Text style={{fontSize:12,color:'#808080'}}>3 goals today</Text>
            </View>
          <TouchableOpacity>
             <View ><Text style={{backgroundColor:'#3AB68F', color:'white', fontWeight:'normal',paddingHorizontal:20,paddingVertical:5,borderRadius:30}}>Start</Text></View>
          </TouchableOpacity>
         
      </View>


      <View style={[{display:"flex", flexDirection:'row',justifyContent:'space-between', marginHorizontal:15,marginVertical:5, backgroundColor:'orange',paddingHorizontal:10,paddingVertical:20, borderRadius:20,alignItems:'center'},styles.shadow]}>
           
            <View style={{width:40,height:40, borderRadius:50, backgroundColor:'#54B0FA',marginTop:5,marginLeft:10}}>
               <Icon
              style={{alignSelf:'center',marginTop:7}}
              name="leaf"
              size={28}
              color='#fff'
            />

            </View>

            <View style={{display:'flex',flexDirection:'column'}}>
               <Text style={{fontSize:16}}>Fun Practice</Text>
               <Text style={{fontSize:12,color:'#808080'}}>star rating here</Text>
            </View>
           <View ><Text style={{backgroundColor:'#EAC99B', color:'white', fontWeight:'normal',paddingHorizontal:20,paddingVertical:5,borderRadius:30}}>Review</Text></View>
         
      </View>

      <View style={[{display:"flex", flexDirection:'row',justifyContent:'space-between', marginHorizontal:15,marginVertical:5, backgroundColor:'orange',paddingHorizontal:10,paddingVertical:20, borderRadius:20,alignItems:'center'},styles.shadow]}>
           
            <View style={{width:40,height:40, borderRadius:50, backgroundColor:'#AF7CFD',marginTop:5,marginLeft:10}}>
               <Icon
              style={{alignSelf:'center',marginTop:7}}
              name="tree"
              size={28}
              color='#fff'
            />

            </View>

            <View style={{display:'flex',flexDirection:'column'}}>
               <Text style={{fontSize:16}}>Wrong title set</Text>
               <Text style={{fontSize:12,color:'#808080'}}>2019-10-03</Text>
            </View>
           <View ><Text style={{backgroundColor:'#EAC99B', color:'white', fontWeight:'normal',paddingHorizontal:20,paddingVertical:5,borderRadius:30}}>Review</Text></View>
         
      </View>
     </View>




    </View>
</ScrollView>
  );
};

export default SubjectScreen;
