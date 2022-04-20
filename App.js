import * as React from 'react'
import { Text, View, StyleSheet, Button, TextInput, ListView } from 'react-native'
import Constants from 'expo-constants'
import DatePicker from 'react-native-datepicker'

// You can import from local files
import AssetExample from './components/AssetExample'


class CountdownProject extends React.Component{

  constructor (props) {
    super(props);
    this.state={
        From:'',
        To:'', 
        str:[],
        
    }
  }

changeText=(from, date)=>{
  this.setState({from, date})
  

}
onPress = ()=>{
  this.setState({str: [this.state.from, this.state.date]})
}

  render(){
return (
        
          <View style={styles.container}>
              <Text style={styles.paragraph}>Countdown</Text>
              <TextInput placeholder="Adicione o título " id="from" style={styles.fromField} onChangeText={this.changeText} /> 
              <DatePicker style={{borderWidth:2, borderColor:'skyblue', margin:10, backgroundColor: '#fff'}}
                      /*time={(time)=> setTime(time)}*/ // Initial date from state
                      mode="datetime" // The enum of date, datetime and time
                      placeholder=""
                      id="date"
                      minDate="14-04-2022"
                      value={this.state.date}
                      onDateChange={this.changeText}      
                    />
              <Button
                title={"Add"}
                color="skyblue"
                onPress={this.onPress}
                ></Button>
                <Text>{this.state.str}</Text>
                
          </View>
    );
  }
}


export default CountdownProject;

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
  fromField: {
    backgroundColor: '#FFF',
  },
  paragraph: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    justifyContent: 'center',
    padding: 20,
  },
});

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
    
 //Aprendizados: Achar formas de tornar coisas simples dinâmicas, para atender os requisitos, e 
 // alterar os seus comportamentos 

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