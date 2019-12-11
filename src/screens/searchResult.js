import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image, View } from 'react-native';
import moment from 'moment';



const searchResult = props => (
  <TouchableOpacity 
    style={styles.row}
    onPress={() => props.onSelectMovie(props)}>
    <Image
      style={{width: 40, height: 60}}
      source={{uri: 'https://image.tmdb.org/t/p/w185' + props.poster_path}}
    />
    <View style={styles.view}>
      <Text style={styles.text}>{props.title}  {moment(props.release_date).format('Y')} </Text>
      <Text style={styles.text}> Rating : {props.vote_average}</Text>
      <Text>{moment(props.release_date).format("MMM Do YYYY")}</Text>    
    </View>    
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  row: { 
    padding: 20,
    flex: 1,
    flexDirection: 'row',
  },
  text: {
    fontWeight: 'bold', 
    flex: 1
  },
  view: {
    paddingLeft: 10,
    flexDirection: 'column',
  }
  
});

export default searchResult