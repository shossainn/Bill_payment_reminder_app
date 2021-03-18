// import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {TouchableOpacity, KeyboardAvoidingView, StyleSheet, Text, View, TextInput } from 'react-native';
import Task from './components/Task';


export default function App() {
  const [task, setTask] = useState();

  const handleAddTask = () => {
    console.log(task);
  }

  return (
    <View style={styles.container}>

    {/* Reminders */}
    <View style={styles.tasksWrapper}>
      <Text style={styles.sectionTitle}>Bills Payment Reminder</Text>
      <View style={styles.items}>
      {/* list starts from here  */}
        <Task text={'CC Payment 1'} />
        <Task text={'CC Payment 2'} />
      </View>
    </View>
     

     {/* where they input the reminders */}
     <KeyboardAvoidingView 
     behavior={Platform.OS === "ios" ? "padding" : "height"}
     style={styles.writeTaskWrapper}>

     <TextInput style={styles.input} placeholder={'What bill do you need to pay?'} value={task} onChangeText={text => setTask(text)}/>
     <TouchableOpacity onPress={() => handleAddTask() }>
       <View style={styles.addWrapper}>
        <Text style={styles.addText}>+</Text>
       </View>

     </TouchableOpacity>
     </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
   
  },

  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
sectionTitle: {
  fontSize: 24,
  fontWeight: 'bold',
  // color: 'white',
  
},
items: {
  marginTop: 30,
},
  // white: {
  //   color: 'white',
  // },



  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
input: {
paddingVertical: 15,
paddingHorizontal: 15,
backgroundColor: '#fff',
borderRadius: 60,
borderColor: '#C0C0C0',
borderWidth: 1,
width: 250,
},
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},


});
