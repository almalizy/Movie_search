import React from 'react'
import { Text, TouchableOpacity, ScrollView, Image,  View, StyleSheet ,Linking,Share} from "react-native";
import moment from 'moment';
import {EvilIcons}  from '@expo/vector-icons';
import {observer} from 'mobx-react';
import Store from '../components/store'

import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';


@observer
export default class MovieScreen extends React.Component {

  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: navigation.getParam('title'),
      headerTitleStyle :{textAlign: 'center',alignSelf:'center',flex:1},
    } 
  }

  state = {
    moviedetails: [],
    data : {}
  }
  
  // for fetching movies 

  componentDidMount() {
    return fetch(`https://api.themoviedb.org/3/movie/${this.props.navigation.state.params.id}?api_key=6dd09080b8fcef7d71dff2c86b91d1d3&language=en-US`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({moviedetails: responseJson})
      })
      .catch((error) => {
        console.error(error)
      })  
  }


  // for sharing m=favorit movies by user
    onShare=()=>{ 
        FileSystem.downloadAsync(
        uri= 'https://image.tmdb.org/t/p/w185' + this.props.navigation.state.params.poster_path,

        FileSystem.documentDirectory  + '.jpg'
      )
        .then(({ uri }) => { 
            console.log('Finished downloading to ', uri);

            Sharing.shareAsync(uri); 
        })
        .catch(error => {
          console.error(error); 
        });
    }

  render() {
    // console.log(this.props)
    return (
      <ScrollView style={styles.container}>
        <View style= {styles.view}>
          
        <TouchableOpacity 
                      style={{paddingRight: 15, position: 'relative',alignSelf:'flex-start', bottom: -5,left:7}}
                      onPress={this.onShare} >
                    <EvilIcons
                              name='share-google'
                              size={32} 
                              style={{ left: 5 }}
                          /> 

          </TouchableOpacity>
          
          <Image 
          style={{width: 200, height: 300, marginBottom: 10}}
          source={{uri: 'https://image.tmdb.org/t/p/w185' + this.state.moviedetails.poster_path}}
          />
           <TouchableOpacity 
                      style={{paddingRight: 15, position: 'relative',alignSelf:'flex-start', bottom: 15,left:7}}
                      onPress={() => Store.addToWishList(this.state.moviedetails)} >
                    <View style={{width: 20, height: 20, borderRadius: 10, position: 'absolute', backgroundColor: 'red', bottom: 10, left: -7.15, justifyContent: 'center'}}>
                        <Text style={{color: '#fff', textAlign: 'center', fontSize: 10}}>{Store.wishListCount}</Text>
                    </View>
                    <EvilIcons
                              name='heart'
                              size={32} 
                              style={{ left: 5 }}
                          /> 

          </TouchableOpacity>

          <Text style={styles.title}> {this.state.moviedetails.title}</Text>
          <Text>Year  : {moment(this.state.moviedetails.release_date).format('Y')}</Text> 

          <Text>Released at : {moment(this.state.moviedetails.release_date).format("MMM Do YYYY")} </Text>
           <Text style={styles.title}> Rate : {this.state.moviedetails.vote_average}</Text>


        </View>
      </ScrollView>
      
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  }, 
  view: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  plot: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 40,
    fontStyle: 'italic',
    fontSize: 11,
    textAlign: 'left',
  },
  graph: {
    height: 10,
  },
})
