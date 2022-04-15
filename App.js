import * as React from 'react'
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'
import Constants from 'expo-constants'
import DatePicker from 'react-native-datepicker'

// import ListGroup from "react-bootstrap";

// You can import from local files
//import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';

export default class App extends React.Component {
  state={
    text: "",
    time:'',
    date: '',
    todo: []
  }
  onPress=()=>{
    console.log(target.text.value);
    this.setState({text:this.state.text})
  }
  addTodo = (event) => {
    event.preventDefault();
    const data = event.target,
      newTodo = {
      text: data.text.value,
      time: data.time.value,
      date: data.date.value,
      todoList: []

    };this.state.text;
    // atualizando a array, mas n dando re-render
    this.state.todo.push(newTodo);
    this.setState({
      todoList: this.state.todoList
    })
    
    /* var arr = this.state.todoList;
    arr.push(newTodo); */
    this.setState({todoList: todoList, text: "", date:'', time:''});
  }
/*
  deleteTodo = (event) => {
    event.preventDefault();
    this.state.todoList.splice(event.target.value)
    var arr = this.state.todoList;
    var pos = arr.indexOf(event);
    arr.splice(pos,1);
    this.setState({todo: arr});
  }*/

 /* renderTodos = () => {
    return this.state.todo.map(t=>{
      return (
        <Text 
        onPress={() => {this.deleteTodo(t)}} key={t}
        style={styles.todos}>
        {t}</Text>
      )
    })
  }*/
  
  render() {
    console.log(this.state.todoList)
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.paragraph}>
            Countdown
          </Text>
          <TextInput 
            
            style={styles.inputStyle}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <DatePicker
            style={{borderWidth:2, borderColor:'skyblue', margin:10, backgroundColor: '#fff'}}
            /*time={(time)=> setTime(time)}*/ // Initial date from state
            mode="date" // The enum of date, datetime and time
            placeholder=""
            minDate="14-04-2022"
            value={this.state.date}
                  
          />
          <DatePicker
            style={{borderWidth:2, borderColor:'skyblue', margin:10, backgroundColor: '#fff'}}
            /*time={(time)=> setTime(time)}*/ // Initial date from state
            mode="time" // The enum of date, datetime and time
            placeholder=""
            minDate="14-04-2022"
            value={this.state.time}
                  
          />
          <Button 
            title="Add Todo"
            onPress={this.onPress}
          />
          
          <Text>{this.state.todo} </Text> 
          {/*at this.state.todo.time*/} {/* , date: this.state.todo.date*/}
          {/* this.renderTodos() */}
        </View>
      </>

      /* <ListGroup>
      {
          this.state.todoList.map((task, index)=> {
              //Each child in a list should have a unique key prop, and should have a return
              return(
                  <ListGroup.Item key={index} action variant="primary">
                      {task.taskTitle} at {task.time}, date: {task.date}
                      <Button type="button" variant="danger" onClick=
                      {this.deleteTask} value={index}>
                          Delete
                      </Button>
                  </ListGroup.Item>
              )
              
          })
        }
      </ListGroup> */
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    alignItems: 'center',
    padding: 8,
    margin: 1,
    backgroundColor: '#1E1A3C',
  },
  todos:{
    fontWeight: 'bold',
    fontSize: 25,
    padding: 5,
  },
  paragraph: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    justifyContent: 'center',

  },
  inputStyle: {
    
    height: 40,
    width: '100%',
    borderColor: "gray",
    backgroundColor: '#fff',
    borderWidth: 1, 
  },
});
 //Aprendizados: Achar formas de tornar coisas simples dinâmicas, para atender os requisitos, e alterar os seus comportamentos 
    //Consigo facilitar funções
    //Lembrar de usar console.log para verificar o comportamento das modificações antes de implementar 
    /*Ex:
    console.log(newTodo);
    console.log(event.target.taskTitle.value);
    */
    // Before:
    /* <label>Date:</label>
    <input type="date" className="form-control" name="date"/>
    <br/>
    <label>Time:</label>
    <input type="time" className="form-control" name="time"/>
    
    <br/> */
    /*Ex sem bootstrap <button type="button" className="btn btn-danger" name="delete">Delete</button> */