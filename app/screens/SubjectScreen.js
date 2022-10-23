import React, { useState } from 'react';
import {View, Text, ScrollView, TouchableOpacity, Animated} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../style/styles';


const SubjectScreen = () => {
  
 const [tab, setTab] = useState({
        tab1: false,
        tab2: true
    });

    const handleTab = (swap) =>{
       if(swap==="tab1"){
            setTab({
               tab1: true,
               tab2: false,
               tab3: false,
               tab4: false,
            })
       }
       if (swap==="tab2") {
        setTab({
            tab1: false,
            tab2: true,
            tab3: false,
            tab4:false,
     })
       }
       if (swap==="tab3"){
        setTab({
            tab1: false,
            tab2: false,
            tab3: true,
            tab4: false,
     })
       }
       if (swap==="tab4"){
        setTab({
            tab1: false,
            tab2: false,
            tab3: false,
            tab4: true,
     })
       }
    }

  return (
    <View style={styles.parentContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Subject</Text>
        <TouchableOpacity>
          <Icon
            style={{marginRight: 20, marginTop: 10}}
            name="pencil-square"
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
      <TouchableOpacity
          activeOpacity={0.6}
          underlayColor="#37BB92"
          onPress={()=> handleTab("tab1")}
          style={[styles.tabButton, tab.tab1 && styles.tabButtonActive]}

      >
         <Text style={[styles.tabButtonTitle, tab.tab1 && styles.tabButtonTitleActive]}>Mathematics</Text>
      </TouchableOpacity>

      <TouchableOpacity
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
      </TouchableOpacity>
  </View>



    </View>
  );
};

export default SubjectScreen;
