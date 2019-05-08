const React = require('react-native');


const {
  StyleSheet,
  Platform
} = React;

console.log(Platform.OS);

module.exports = StyleSheet.create({

  container : {
    backgroundColor   : '#455a64',
    flex              : 5,
    alignItems        : 'center',
    justifyContent    : 'center',  
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    //opacity: 0.5,
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  signupTextCont : {

    flexGrow         : 1,
    alignItems       : 'center',
    justifyContent   : 'flex-end',
    paddingVertical  : 16,
    flexDirection    : 'row',
  },
  signupText :{

    fontSize  : 20,
    color     : 'white',
    marginRight: 100
  },
  signupButton  : {

    fontSize    : 16,
    color       : '#ffffff',
    fontWeight  : '500'
  },

  Innercontainer : {
    flex            : 1,
    justifyContent  : 'center',
    alignItems      : 'center',
    marginBottom    : 150,
  },

  InputBox1 :{
    width             : '50%',
    height            : '7%',
    borderWidth       : 1,
    backgroundColor   : 'white',
    //borderRadius      : 25,
    borderColor       : 'black',
    paddingHorizontal : 16,
    fontSize          : 16,
    color             : 'black',
    padding           : 5,
    marginVertical    : 10,  
    //marginBottom      : 60, 
    alignItems:'center' 
  },
  InputBox2 :{
    width             : '50%',
    height            : '7%',
    borderWidth       : 1,
    backgroundColor   : 'white',
    //borderRadius      : 25,
    borderColor       : 'black',
    paddingHorizontal : 16,
    fontSize          : 16,
    color             : 'black',
    padding           : 5,
    //marginVertical    : 10,  
    //marginBottom      : 100, 
    alignItems:'center' 

  },

  button : {

    width : '50%',
    backgroundColor : '#4764cc',
    borderRadius : 25,
    marginVertical : 65,
    paddingVertical : 13,


  },

  buttonText : {

    fontSize : 16,
    fontWeight : '500',
    color : '#ffffff',
    textAlign : 'center',
  },
  logo: {

    width   : 70,
    height  : 70,
  },

  logoText  : {
    fontSize :28,
    color : 'rgba(255,255,255, 0.7)',
    marginTop : 50,
  },
});