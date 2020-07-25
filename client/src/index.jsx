import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  // **** Ajax with only GET request ***
  // componentDidMount() {
  //   $.ajax({
  //     type: 'GET',
  //     url: '/person',
  //     success: (respond) => {
  //       console.log('Get request successful!')
  //       this.setState({
  //         person: respond
  //       });
  //     },
  //     error: (err) => {
  //       console.log('Get request unsuccessful', err);
  //     }
  //   })
  // }

  // **** Axios with only GET request ***
  componentDidMount() {
    axios.get('/person')
      .then(res => {
        this.setState({ person: res.data})
      })
      .catch((err) => {
        console.log('unable to get request', err)
      })
  }

  // **** Axios with only GET request (async/await) ***
  //   async componentDidMount() {
  //   const result = await axios.get('/person')
  //   // console.log(result);
  //   this.setState({ person: result.data });
  // }

  // **** Axios with only GET request (async/await and error handling) ***
  //   async componentDidMount() {
  //   try {
  //     const result = await axios.get('/person')
  //     this.setState({ person: results.data })
  //   } catch (error) {
  //     console.log('Error on GET request', error)
  //   }
  // }

  // **** Ajax with POST & GET request ***
  // componentDidMount() {
  //   $.ajax({
  //     type: 'POST',
  //     url: '/person',
  //     data: {name: 'Tony', role: 'Student', pay: 'MORE MILLIONS $$$$$'},
  //     success: (result) => {
  //       console.log(result);
  //       $.ajax({
  //         type: 'GET',
  //         url: '/person',
  //         success: (respond) => {
  //           console.log('Get request successful!')
  //           this.setState({
  //             person: respond
  //           });
  //         },
  //         error: (err) => {
  //           console.log('Get request unsuccessful', err);
  //         }
  //       })
  //     },
  //     error: (err) => {
  //       console.log('Post was unsuccessful!', err);
  //     }
  //   })
  // }

  // **** Axios with POST & GET request ***
  //   componentDidMount() {
  //   axios.post('/persons', {name: 'Tony', role: 'Student', pay: 'MORE MILLIONS $$$$$'})
  //     .then(() => {
  //       axios.get('/person')
  //       .then(res => {
  //         const persons = res.data;
  //         this.setState({ person: persons });
  //       })
  //       .catch(error => {
  //         console.log('get error occurred', error)
  //       })
  //     })
  //     .catch(error => {
  //       console.log('post error occurred', error)
  //     })
  // }

  // **** Axios with POST & GET request (asyn/await)***
  //   async componentDidMount() {
  //   const result1 = await axios.post('/person', {name: 'Tony', role: 'Student', pay: 'MORE MILLIONS $$$$$' })
  //   console.log(result1);
  //   const result2 = await axios.get('/person')
  //   console.log(result2);
  //   this.setState({ person: result2.data });
  // }

  // *** AJAX Handle Click***
  // handleClick(event) {
  //   event.preventDefault();
  //   $.ajax({
  //     type: 'POST',
  //     url: '/person',
  //     data: {name: 'Jimi', role: 'Student', pay: 'MORE MILLIONS $$$$$'},
  //     success: (result) => {
  //       console.log('JIMI Post was successful!');
  //     },
  //     error: (err) => {
  //       console.log('Post was unsuccessful!', err);
  //     }
  //   })
  // }

  // *** Axios Handle Click with POST & GET***
    handleClick(event) {
    event.preventDefault();
    axios.post('/person', {name: 'Junlin', role: 'Student', pay: '5000M $$$$$'})
      .then( res => {
        axios.get('/person')
          .then(res => {
            console.log('afterget', res)
            this.setState({ person: res.data})
           })
          .catch((err) => {
           console.log('unable to get request', err)
          })
        })
      .catch( (err) => {
        console.log('post request error'. error)
      })
  }

  // **** Axios w/ async/await ****
  // async handleClick(event) {
  //   event.preventDefault();
  //   const result = await axios.post('/person', {name: 'Jimi', role: 'Student', pay: '$$$$$'})
  //   console.log(result);
  //   console.log(result.data);
  // }

  render () {
    return (<div>
      <h1>Let's Get Paid</h1>
        {this.state.person.length && this.state.person.map(person => (<ul> {person.name}  | {person.role} | {person.pay} </ul>))}
       <button type="submit" onClick={this.handleClick}>Submit</button>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));