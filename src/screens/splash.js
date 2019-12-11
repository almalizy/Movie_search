import React from 'react';
import { View, StyleSheet ,Button,Text,Image} from 'react-native';
import ImageOpacityCycler from '../components/ImageOpacityCycler';
import Theme from '../components/Theme';

// for splash images source 

const WELCOME_IMAGES = [
  require('../../assets/img/welcome_background_images/jurassic_world.jpg'),
  require('../../assets/img/welcome_background_images/spider_man.jpg'),
  require('../../assets/img/welcome_background_images/shutter_island.jpg'),
  require('../../assets/img/welcome_background_images/bumblebee.jpg'),
  require('../../assets/img/welcome_background_images/the_godfather.jpg'),
  require('../../assets/img/welcome_background_images/the_sixth_sense.jpg')
];

class Splash extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {

    return (
      <View style={styles.container}>
        <ImageOpacityCycler style={StyleSheet.absoluteFill} images={WELCOME_IMAGES} />

        <View style={styles.content}>
          <View>

            <Image
              style={styles.tmdbLogo}
              source={require('../../assets/img/tmdb.png')}
              resizeMode="contain"
            />

            <Text style={styles.welcomeText} >
                UXBERT 
            </Text>

            <Text style={styles.welcomeCaption} >
                Usability Lab
            </Text>

            <Text style={styles.welcomeCaption} >
               Powered by : Yahia Sherif
            </Text>

          </View>

         <View style={{marginBottom:70}}>
            <Button
                title='Continue as Guest'
                style={styles.guestButton}
                color={Theme.gray.lighter}
                onPress={()=>this.props.navigation.navigate('Search')}
              />
         </View>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background
  },
  content: {
    flex: 7,
    justifyContent: 'space-between'
  },
  tmdbLogo: {
    width: null,
    height: 100,
    marginTop: Theme.spacing.large * 2,
    marginBottom: Theme.spacing.large
  },
  welcomeText: {
    textAlign: 'center',
    color: Theme.gray.lighter,
    fontSize: 32
  },
  welcomeCaption: {
    color: Theme.gray.lighter,
    textAlign: 'center'
  },
  guestButton: {
    height: 48,
    alignSelf: 'center',
    paddingHorizontal: Theme.spacing.base ,
    padding:10
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#000000'
  },
  button: {
    flex: 1
  },
  buttonText: {
    fontSize: 26
  }
});



export default Splash ;
