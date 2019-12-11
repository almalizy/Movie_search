import React from 'react'
import { FlatList, TextInput, View, KeyboardAvoidingView } from "react-native"

import SearchResult from './searchResult'
import styles from './styles';
import NoResult from './NoResult'

const api_key = '6dd09080b8fcef7d71dff2c86b91d1d3'

export default class SearchScreen extends React.Component {

  static navigationOptions = ({navigation})  => {
    return {
      headerTitle: 'SearchScreen',
      headerTitleStyle :{textAlign: 'center',alignSelf:'center',flex:1},
    } 
  }

  state = {
    search: "",
    data: [],
    pages: 1,
    page: 2,
    refresh: false
  }

  // for Get and fetch  movie from `themoviedb` api
  
  getMoviesFromApiAsync = () => {
    if(this.state.search.length < 3) {
      this.setState({
        data: []
      })
    }
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${this.state.search}`)
    .then((response) => response.json())
      .then((responseJson) => {
        const {results} = responseJson
        this.setState({
          data: [...results],
          pages: Math.ceil(+responseJson.total_results / 10)
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  // case getting serch result while scrolling .....
  getMoviesWhenScrolling = () => {
    if (this.state.data.length === 0 || this.state.page === this.state.pages){
      return
    }
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${this.state.search}&page=${this.state.page}`)
      .then((response) => response.json())
      .then((responseJson) => {
        const newData = this.state.data.concat(responseJson.results)
        this.setState((prevstate) => ({
          data: [...newData],
          page: prevstate.page + 1,
          refresh: !prevstate.refresh 
        }))
      })
      .catch((err) => {
        console.log(err);
      })
  }

// case we start search ......
  handleSearch = (search) => {
    this.setState({search}, () => this.getMoviesFromApiAsync())
  }

  //case we select movie .....
  handleSelectMovie = (movie) => {
    this.props.navigation.push('movie', movie)
  }

  // case no search result ......
  listEmptyComponent = () =>  (
      <NoResult/>
      )
  

  render() {
    return (
   <View style = {{flex: 1}}>
      <KeyboardAvoidingView behavior="padding">
        <TextInput
          style = {styles.input}
          placeholder = "Search..."
          value = {this.state.search}
          onChangeText = {this.handleSearch}
          autoCapitalize="words"
          clearButtonMode="always"
        />

 {/* for scrolling movies search results */}
        <FlatList 
          ListEmptyComponent = {this.listEmptyComponent}
          keyExtractor={(item, index) => index.toString()}
          renderItem = {({ item }) => 
                            <SearchResult 
                                {...item} 
                                 onSelectMovie ={this.handleSelectMovie}
                              /> }
          data = {this.state.data}
          extraData = {this.state.refresh}
          onEndReached = {() => this.getMoviesWhenScrolling()}
          onEndReachedThreshold = {0.4}
        /> 
      </KeyboardAvoidingView>
    </View>
    )
  }
}

