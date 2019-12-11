# Project  UXBERT Usability Lab  - Movie Browser -

For this project, a movie browser. It will allow users to
search for movies included in the [Open Movie Database](https://api.themoviedb.org/)
and view additional information about any movies they select.

Using OMDb search movie API display following details  :
Movie Poster Image
Movie title
Imdb rating
Year
Released date
Action button to favorite movie(s)
Action button to allow user to share movie poster in WhatApps, email etc.

Favorite Movies :
Display user’s favorite movies saved in localstorage
Allow user to share movie poster in WhatApps, email etc.
- There  a search screen that allows users to search for movies
- There  user can show more than 10 results if more than 10 results exist
- There is a screen that shows additional information about a selected movie
_ user can add favorit movie to favorit list and can delet one or all of it from list
- at movie details button for share poster image at WhatApps, email etc.

## Requirements
-  import libraries :
  - `expo`
  - `react`
  - `react-native`
  - `prop-types`
  - `react-navigation`

 - and for `icons` i used libiraries :
  - "@expo/vector-icons"
  - "react-native-vector-icons"

 - and for `share movie poster` i used libiraries :
  - "expo-sharing"
  - "expo-file-system

 - and for `saving user favorit movie ` i used libiraries :
  - "mobx"
  - "mobx-react"
  - "babel-plugin-transform-decorators-legacy"

- and for `display date and time of released`  i used libiraries :
  - "moment"
  - "mobx-rea


## Getting Started 
you will need to got expo by install it `npm i -g expo-cli`

## run the app 
extract app compressed folder 
then in terminal >>  `cd Movie_Search`
then >> `npm install`
then >>  `expo start` 

QR code from the Expo app on your phone.
 To open in a simulator, type i for mac simulator  or a for android simulator

When you have the app open in your phone or simulator, try opening [`App.js`](/App.js)

at `app.js` just some lines for ignored some expo yelloBox warning 
then refere to `AppNavigator`

- the app containes two folders [`navigation`,`src`]

at `navigation` folder : all app navigotrs needs 
   (`AppNavigator` , `MainTabNavigator`)
   also one component `TabBarIcon` for using at `MainTabNavigator`

at `src` folder containes other two folders [`components`,`screens`]

- at folder `components` will found all component app need 
  as `store`for using to save user favorit movie and got it 
  and `Themes` wich iclude [`Colors`,`Fonts`,`Metrics`]
  and image component `imageOpacityCycler`
  and `Theme` 

thank you ...

