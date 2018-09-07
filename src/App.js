import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Cats from './pages/cats';
import NewCat from './pages/newcat';
import { getCats } from './api'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cats: [
        {
          id: 1,
          name: 'Morris',
          age: 2,
          enjoys: "Long walks on the beach."
        },
        {
          id: 2,
          name: 'Paws',
          age: 4,
          enjoys: "Snuggling by the fire."
        },
        {
          id: 3,
          name: 'Mr. Meowsalot',
          age: 12,
          enjoys: "Being in charge."
        }
      ]
    }
  }

  componentWillMount() {
          getCats()
          .then(APIcats => {
              this.setState({cats: APIcats})
          });


}



//This is taking in a parameter addCat
  handleNewCat(addCat){


  }

  render() {
    return (
        <div className="App">
            {/*<Header />*/}
            <Router>
                <Switch>
                    <Route exact path="/cats" render={(props) => <Cats cats={this.state.cats}/>} />
                    <Route exact path="/newcat" render={(props)=><NewCat handleNewCat={this.handleNewCat}/>} />
                </Switch>
            </Router>
        </div>
    );
  }
}

export default App;
