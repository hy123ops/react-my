import React from 'react';
import 'assets/styles/reset.css'
import Maoyan from 'pages/Maoyan';
import { BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/'

class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <Router>
          <Maoyan></Maoyan>
        </Router>
      </Provider>
    )
  }
}

export default App;
