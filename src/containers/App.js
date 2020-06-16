import React, { Component } from 'react';
import './App.css';
import SearchForm from '../components/SearchForm';
import CardList from '../components/CardList'; 
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component {
  constructor() {
    super()
    this.state = {
      Mounted: 0,
      SearchStarted: 0,
      results: [],
      localLat: "",
      localLong: "",
      localAlt: 1,
      numberPass: 1,
    }
  }

  componentDidMount() {
    this.setState({ Mounted: 1 })
  }

  newSearch() {
    var { localLat, localLong, localAlt, numberPass } = this.state;
    var calRes = {};
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = `http://api.open-notify.org/iss-pass.json?lat=${localLat}&lon=${localLong}&alt=${localAlt}&n=${numberPass}`
    fetch(proxyUrl + targetUrl)
      .then(blob => blob.json())
      .then(data => {
  
      calRes = JSON.stringify(data, null, 2);

      console.log("API return: " + calRes)

      var errorMsg = (data.message === "failure") ? 
      (document.getElementById('inputError').innerHTML=data.reason, this.setState({ results: [{duration: 0, risetime:NaN}] })) : (
        document.getElementById('inputError').innerHTML="",
        this.setState({ results: data.response })
        );
      console.log(errorMsg);
      return data;
      })
      .catch(e => {
      console.log("Catch: " + e);
      return e;
      });
    }

  onSearchClick = () => {
    this.setState({ SearchStarted: 1 });
    this.newSearch();
  }  

  setLat = (latInput) => {
    this.setState({ localLat: latInput.target.value });
  }

  setLong = (longInput) => {
    this.setState({ localLong: longInput.target.value });
  }

  setAlt = (altInput) => {
    this.setState({ localAlt: altInput.target.value });
  }

  setNum = (numInput) => {
    this.setState({ numberPass: numInput.target.value });
  }

  render() {
    const { results, Mounted } = this.state;
     // const passResults = results.map(pass =>{
     //   return pass
     // })
    return !Mounted ?
    <h1 className='tc'>Loading...</h1> :
    (
      <div className='tc'>
        <div className="App-header">
          <h1 className='f2'>- - - ISS PASS TIMES - - -</h1>
            
        </div>     
        <SearchForm latLocal={this.setLat} longLocal={this.setLong} altLocal={this.setAlt} numPass={this.setNum} buttonClick={this.onSearchClick} />   
        <Scroll>
          <ErrorBoundry>
              <CardList passData={results} />
          </ErrorBoundry>
        </Scroll>      
      </div>
    );
  }
}

export default App;
