import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';


class Login extends React.Component {
    state={
        email:"",
        password:""
      }
      render(){
        return (
          <View style={styles.container}>
            <Text style={styles.logo}>Patient Access</Text>
            <View style={styles.inputView} >
              <TextInput  
                style={styles.inputText}
                placeholder="Email" 
                placeholderTextColor="#003f5c"
                keyboardType="email-address"
                autoCompleteType="email"
                returnKeyType="next"
                onSubmitEditing={() => { this.password.focus(); }}
                onChangeText={text => this.setState({email:text})}/>
            </View>
            <View style={styles.inputView} >
              <TextInput
                ref={(input) => { this.password = input; }}  
                secureTextEntry
                style={styles.inputText}
                placeholder="Password" 
                placeholderTextColor="#003f5c"
                autoCompleteType="password"
                returnKeyType="go"
                onChangeText={text => this.setState({password:text})}/>
            </View>
            <TouchableOpacity  onPress={() =>
            this.props.navigation.navigate('ForgotPassword')}>
              <Text style={styles.signUpText}>Forgot Password</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() =>
            this.props.navigation.navigate('SignUp')}>
              <Text style={styles.signUpText}>Signup</Text>
            </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00A9CE',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo:{
      fontWeight:"bold",
      fontSize:50,
      color:"#fb5b5a",
      marginBottom:40
    },
    inputView:{
      width:"80%",
      backgroundColor:"white",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },
    inputText:{
      height:50,
      color:"black"
    },
    signUpText:{
        color:"red"
    },
    forgotText:{
      color:"red",
      fontSize:14
    },
    loginBtn:{
      width:"80%",
      backgroundColor:"green",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10
    },
    loginText:{
      color:"white"
    }
  });

export default Login;