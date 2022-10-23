import React, {useState} from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../style/styles';

const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={styles.parentContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Home Page</Text>
          <TouchableOpacity>
            <Icon
              style={{marginRight: 20, marginTop: 10}}
              name="bell"
              size={28}
              color="#37BB92"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.headerSubtext}>
          <Text style={styles.headerSubtext1}>Choose your course</Text>
          <Text style={styles.headerSubtext2}>right away</Text>
        </View>
        <TextInput
          style={styles.searchField}
          placeholder="Search for your grade, course, training type.."
          placeholderTextColor="#778899"
        />

        <View style={styles.categoryParentContainer}>
          <TouchableOpacity>
            <View style={styles.categoryChildContainer1}>
              <Image
                style={styles.categoryImage}
                source={{
                  uri: 'https://www.shareicon.net/data/512x512/2016/09/21/832388_school_512x512.png',
                }}
              />
              <Text style={styles.categoryText}>Category</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.categoryChildContainer2}>
              <Image
                style={styles.categoryImage}
                source={{
                  uri: 'https://www.shareicon.net/data/512x512/2017/06/06/886747_media_512x512.png',
                }}
              />
              <Text style={styles.categoryText}>Boutique class</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.categoryChildContainer3}>
              <Image
                style={styles.categoryImage}
                source={{
                  uri: 'https://www.shareicon.net/data/512x512/2016/09/21/832385_drink_512x512.png',
                }}
              />
              <Text style={styles.categoryText}>Free Course</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.categoryChildContainer3}>
              <Image
                style={styles.categoryImage}
                source={{
                  uri: 'https://www.shareicon.net/data/512x512/2016/09/21/832395_document_512x512.png',
                }}
              />
              <Text style={styles.categoryText}>Book Store</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.categoryChildContainer3}>
              <Image
                style={styles.categoryImage}
                source={{
                  uri: 'https://www.shareicon.net/data/512x512/2017/06/01/886647_track_512x512.png',
                }}
              />
              <Text style={styles.categoryText}>Live Course</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.categoryChildContainer3}>
              <Image
                style={styles.categoryImage}
                source={{
                  uri: 'https://www.shareicon.net/data/512x512/2017/06/01/886656_light_512x512.png',
                }}
              />
              <Text style={styles.categoryText}>Leader Board</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 12}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}>
            <Text style={{fontSize: 20, fontWeight: '900', marginLeft: 20}}>
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
          <View style={styles.headerSubtext}>
            <Text style={styles.headerSubtext1}>You may also like</Text>
            <Icon
              style={{marginLeft: 5}}
              name="arrow-down"
              size={16}
              color="#37BB92"
            />
          </View>
        </View>

        <ScrollView
          horizontal
          style={{margin: 10}}
          showsHorizontalScrollIndicator={false}>
          <View
            style={[
              {
                width: 150,
                height: 170,
                backgroundColor: '#e0ffff',
                marginRight: 8,
              },
              styles.shadow,
            ]}>
            <Image
              style={{width: '80%', height: 80, alignSelf: 'center'}}
              source={{
                uri: 'https://img.freepik.com/free-vector/unemployment-concept-dismisses-employee-leaves-workplace-office-depressed-man-sits-sofa-colleague-support-belongings-box-jobless-troubles-job-reduction_575670-794.jpg',
              }}
            />
            <Text
              style={{
                fontWeight: '600',
                fontSize: 14,
                marginLeft: 5,
                marginTop: 5,
                marginLeft: 10,
              }}>
              Morning Textbook
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                marginLeft: 10,
                color: '#2f4f4f',
              }}>
              8.8
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginRight: 20,
              }}>
              <View style={{flexDirection: 'row', marginTop: 8}}>
                <Icon
                  style={{marginLeft: 5}}
                  name="star"
                  size={10}
                  color="#ffa500"
                />
                <Icon
                  style={{marginLeft: 5}}
                  name="star"
                  size={10}
                  color="#ffa500"
                />
                <Icon
                  style={{marginLeft: 5}}
                  name="star"
                  size={10}
                  color="#ffa500"
                />
                <Icon
                  style={{marginLeft: 5}}
                  name="star"
                  size={10}
                  color="#ffa500"
                />
                <Icon
                  style={{marginLeft: 5}}
                  name="star"
                  size={10}
                  color="#ffa500"
                />
              </View>
              <TouchableOpacity>
                <Icon
                  style={{marginLeft: 5}}
                  name="heart"
                  size={20}
                  color="#ff6347"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={[
              {
                width: 150,
                height: 170,
                backgroundColor: '#e0ffff',
                marginRight: 8,
              },
              styles.shadow,
            ]}>
            <Image
              style={{width: '80%', height: 80, alignSelf: 'center'}}
              source={{
                uri: 'https://img.freepik.com/free-vector/man-casual-using-laptop_74855-2489.jpg',
              }}
            />
            <Text
              style={{
                fontWeight: '600',
                fontSize: 14,
                marginLeft: 5,
                marginTop: 5,
                marginLeft: 10,
              }}>
              English Reading
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                marginLeft: 10,
                color: '#2f4f4f',
              }}>
              8.0
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginRight: 20,
              }}>
              <View style={{flexDirection: 'row', marginTop: 8}}>
                <Icon
                  style={{marginLeft: 5}}
                  name="star"
                  size={10}
                  color="#ffa500"
                />
                <Icon
                  style={{marginLeft: 5}}
                  name="star"
                  size={10}
                  color="#ffa500"
                />
                <Icon
                  style={{marginLeft: 5}}
                  name="star"
                  size={10}
                  color="#ffa500"
                />
                <Icon
                  style={{marginLeft: 5}}
                  name="star"
                  size={10}
                  color="#ffa500"
                />
                <Icon
                  style={{marginLeft: 5}}
                  name="star"
                  size={10}
                  color="#ffa500"
                />
              </View>
              <TouchableOpacity>
                <Icon
                  style={{marginLeft: 5}}
                  name="heart-o"
                  size={20}
                  color="#ff6347"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={[
              {
                width: 150,
                height: 170,
                backgroundColor: '#e0ffff',
                marginRight: 8,
              },
              styles.shadow,
            ]}>
            <Image
              style={{width: '80%', height: 80, alignSelf: 'center'}}
              source={{
                uri: 'https://img.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg',
              }}
            />
            <Text
              style={{
                fontWeight: '600',
                fontSize: 14,
                marginLeft: 5,
                marginTop: 5,
                marginLeft: 10,
              }}>
              Group Discussion
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                marginLeft: 10,
                color: '#2f4f4f',
              }}>
              7.5
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginRight: 20,
              }}>
              <View style={{flexDirection: 'row', marginTop: 8}}>
                <Icon
                  style={{marginLeft: 5}}
                  name="star"
                  size={10}
                  color="#ffa500"
                />
                <Icon
                  style={{marginLeft: 5}}
                  name="star"
                  size={10}
                  color="#ffa500"
                />
                <Icon
                  style={{marginLeft: 5}}
                  name="star"
                  size={10}
                  color="#ffa500"
                />
                <Icon
                  style={{marginLeft: 5}}
                  name="star"
                  size={10}
                  color="#ffa500"
                />
                <Icon
                  style={{marginLeft: 5}}
                  name="star"
                  size={10}
                  color="#ffa500"
                />
              </View>
              <TouchableOpacity>
                <Icon
                  style={{marginLeft: 5}}
                  name="heart"
                  size={20}
                  color="#ff6347"
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <View style={{marginBottom: '4%'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}>
            <Text style={{fontSize: 20, fontWeight: '900', marginLeft: 20}}>
              Todays Event
            </Text>
            <Text
              style={{
                marginRight: 20,
                alignSelf: 'center',
                color: '#808080',
                fontSize: 14,
              }}>
              View all
            </Text>
          </View>
          <View style={styles.headerSubtext}>
            <Text style={styles.headerSubtext1}>check all events out</Text>
            <Icon
              style={{marginLeft: 5}}
              name="arrow-down"
              size={16}
              color="#37BB92"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default HomeScreen;
