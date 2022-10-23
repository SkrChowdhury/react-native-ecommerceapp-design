import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../style/styles';

const SubjectScreen = () => {
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





<View style={{width:'90%', marginLeft:'auto',marginRight:'auto'}}>

  <View 
  style={
    {
    flexDirection:'row',
    marginTop:20, 
    marginBottom:20
    }}>
    <TouchableOpacity 
    style={
      {
        flex:1,
        justifyContent:'center', alignItems:'center'
        }}>
      <Text>Mathematics</Text>
    </TouchableOpacity>

    <TouchableOpacity style={{flex:1,justifyContent:'center', alignItems:'center'}}>
      <Text>English</Text>
    </TouchableOpacity>

    <TouchableOpacity style={{flex:1,justifyContent:'center', alignItems:'center'}}>
      <Text>Physics</Text>
    </TouchableOpacity>

    <TouchableOpacity style={{flex:1,justifyContent:'center', alignItems:'center'}}>
      <Text>Chemistry</Text>
    </TouchableOpacity>

  </View>

</View>

    </View>



  );
};

export default SubjectScreen;
