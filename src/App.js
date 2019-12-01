import React from 'react';
import Header from './components/Header.js'
import Task from './components/Task.js'
import Footer from './components/footer.js'
import Styles from './components/Styles.css'

class App extends React.Component{


  render(){
    return(
      <div className="body">
        <Header/>
        <Task/>
        <Footer/>
      </div>
    )
  }
}

export default App;