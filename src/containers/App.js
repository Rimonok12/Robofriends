import React,{ Component} from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import SearchBox from '../components/SearchBox';
import './App.css';

// STATE >> props 
class App extends Component{
    constructor(){
        super()
        this.state={
            robots: [],
            searchfield: ''
        }
        // console.log('Constructor : ')
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>this.setState({robots: users}))
                // console.log('componentDidMount :')

    }

     onSearchChange=(event)=>{
         this.setState({searchfield: event.target.value})
       
    }


    render(){
         const filteredRobots = this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
                // console.log('render : ')
        if(this.state.robots.length===0){
            return <h1>Loading</h1>
        }else{
            return(
            <div className="tc ">
            <h1 >RoboFriends</h1> 
            <SearchBox sC={this.onSearchChange}/>
            <Scroll>
                <ErrorBoundry>
                <CardList robots={ filteredRobots}/>
                </ErrorBoundry>
            </Scroll>
            </div>
            );
        }
    }
}    

export default App;