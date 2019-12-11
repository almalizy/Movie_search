import React, { Component } from 'react';
import { View, ScrollView, Image, Text, Alert ,Button,Platform,TouchableOpacity} from 'react-native';
import {observer} from 'mobx-react';
import Store from '../components/store'
import {Ionicons}  from '@expo/vector-icons';
import styles from './styles';
import moment from 'moment';


@observer
export default class FavoritScreen extends Component {
    static navigationOptions = ({navigation}) => {
        return {
          headerTitle: 'Favorit',     
            headerTitleStyle :{textAlign: 'center',alignSelf:'center',flex:1},
        } 
      }

 state = {
    };
  

  render() {
    const {index, data} = this.props;

    return (
      <View style={styles.container}>
      {Store.wishList.length > 0 ?
        
        <React.Fragment>
              <ScrollView>

                 {Store.wishList.map((item, i) => 
  
    <View  style={styles.row} key={item.id}>
        <Image
          style={{width: 40, height: 60}}
          source={{uri: 'https://image.tmdb.org/t/p/w185' + item.poster_path}}
        />
        <View style={styles.view}>
          <Text style={styles.text}>{item.title}  {moment(item.release_date).format('Y')} </Text>
          <Text style={styles.text}> Rating : {item.vote_average}</Text>
          {/* <Text>{moment(props.release_date).format('Y')}</Text>  */}
          <Text>{moment(item.release_date).format("MMM Do YYYY")}</Text>    
        </View> 
          <Ionicons
              name='ios-close-circle-outline'
              size={20} 
              style={{ left: 15 }}
              onPress={()=>Store.removeFromWishList(i)}
            />   
      </View>
        )}
       
              </ScrollView>
                  <Button
                      title="Delete All"
                      onPress={() =>  Store.removeAllFromWishList() }
                      style = {{marginBottom:60}}
                   />
              
          </React.Fragment>
          :
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View style={{marginBottom: -20}} />

              <Ionicons
                  name='ios-heart-empty'
                  size={100} 
                  // style={{ left: 15 }}
             />    
      
              <Text style={[styles.txt, {marginTop: 15, fontSize: 19}]}>Empty Favorit List</Text>
          </View>
      }
  </View>
    );
  }
}

