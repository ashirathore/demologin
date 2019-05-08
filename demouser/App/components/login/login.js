import React, {Component} from 'react';
import {View, TextInput, Text, ImageBackground,Image, TouchableOpacity,Alert,NetInfo,AsyncStorage} from 'react-native';
import LoginStyle from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Container} from 'native-base';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      match_email      : 'prashant@gmail.com' ,
      match_password   :   'prashant123',
      userId           : null,
      password         : null,
    }
  }

  navigate(){
      
      console.log("this is Email", this.state.userId);
      console.log("this is Email", this.state.userId=== this.state.match_email);
      console.log("this is pass", this.state.password);
      console.log("this is Email", this.state.password=== this.state.match_password);
    if(this.state.userId==null || this.state.password ==null){
      Alert.alert("Please Enter Email and Password");
    } else if(this.state.userId===this.state.match_email && this.state.password===this.state.match_password){
      this.props.navigation.navigate("User");
    }else{
      Alert.alert("Please Enter correct Email and Password");
    }
  }

  componentDidMount() {
    
  }


  render(){
    return(
      <KeyboardAwareScrollView>
        <Container>
          <View style = {LoginStyle.container}>
              <ImageBackground source={require('../../images/dark_blue.jpg')} style={LoginStyle.backgroundImage}>
                <View style = {LoginStyle.Innercontainer}>
                  <TextInput style = {LoginStyle.InputBox1}
                   placeholder = 'Email'
                   placeholderTextColor = 'black'
                   onSubmitEditing = {()=>this.password.focus()}
                   onChangeText = {userId => this.setState({ userId})}
                  />
                   <TextInput style = {LoginStyle.InputBox2} 
                    placeholder = 'password'
                    secureTextEntry = {true}
                    placeholderTextColor = 'black'
                    ref = {(input) => this.password = input}
                    onChangeText = {password => this.setState({password})}
                  />
                  <TouchableOpacity hitSlop={{top: 12, left: 36, bottom: 0, right: 0}} style = {LoginStyle.button} onPress = {() => this.navigate() }>
                    <Text style = {LoginStyle.buttonText}>Login</Text>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View> 
          </Container>
      </KeyboardAwareScrollView>
    )
  }
}

function mapDispatchToProps(dispatch){
  return{
  };
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps ,mapDispatchToProps)(Login);