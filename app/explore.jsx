import {useState} from 'react';
import { StyleSheet, TextInput, Text, TouchableOpacity, Button, View, Alert, Image, ScrollView, StatusBar } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import axios from 'axios';


export default function TabTwoScreen() {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = () => {
    console.log(name, surname, email, password, role)
    axios.post('https://restaurant-app-backend-sandy.vercel.app/api/register', {name, surname, email, password, role})
    .then(result => console.log({result}))
    .catch(err => console.log(err))
  }
  return (
        <ScrollView style={styles.scrollView} contentContainerStyle={{flexGrow:1, backgroundColor:"red"}}>
         <Image
 source={require('../assets/images/food-plate.jpg')}
 style={{ width: 350, height: 300, marginBottom: 35 , borderRadius:400/ 2}}
 />
   <h1>Registration</h1>
   <TextInput
 style={styles.input}
 placeholder="Name"
 value={name}
 onChangeText={setName}
 // onChangeText={(value) => handleInput('name', value)}
 />
 <TextInput
 style={styles.input}
 placeholder="Surname"
 value={surname}
 onChangeText={setSurname}
 // onChangeText={(value) => handleInput('name', value)}
 />
 <TextInput
 style={styles.input}
 placeholder="email"
 value={email}
 onChangeText={setEmail}
 // onChangeText={(value) => handleInput('email', value)}
 />
 <TextInput
 style={styles.input}
 placeholder="Password"
 value={password}
 onChangeText={setPassword}
 // onChangeText={(value) => handleInput('password', value)}
 secureTextEntry
 />
 <TextInput
 style={styles.input}
 placeholder="Role"
 value={role}
 onChangeText={setRole}
  //onChangeText={(value) => handleInput('name', value)}
 />
 <TouchableOpacity style={styles.button} onPress={handleSubmit}>
 <Text style={styles.buttonText}>Submit</Text>
 </TouchableOpacity>
 <Link href="../components//LoginPage.jsx" style={styles.linkText}>Already have an account? Log In</Link>
 <Link href="/home" style={styles.linkText}>Home Page</Link>
        </ScrollView>
      
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor:'#FF4C52',
    flexGrow:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input:{
      borderColor:'#ffffff',
      height: 40,
      width: "50%",
      padding:25,
      margin:2,
      borderRadius:25
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 25,
    width: '60%',
    alignItems: 'center',
    marginVertical: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#fff',
    marginTop: 20,
    textDecorationLine: 'underline',
  }
  
});

