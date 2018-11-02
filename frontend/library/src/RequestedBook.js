import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import * as axios from 'axios';



class RequestedBooks extends Component {
	
	constructor() {
        super();
        this.approve = this.approve.bind(this);
        this.reject = this.reject.bind(this);        
    }

	approve() {
	let getData = async () => {            
              let approvebook = await axios({
              method: 'post',
              url: '/view-request-admin',
              data: {
              	type: 1,
              	hbookId: this.props.book.HBookId,
              	userId: this.props.book.UserId
              }
            });
            window.alert(approvebook.data.output);
            // if(books.data.output){
            //     console.log(this.props)
            //     this.props.history.push('/login');
            //     console.log("went in", books.data.output);
            // }
            // else{
            //     console.log(books.data["book-details"]);
            //     this.setState({books: books.data["book-details"]});
            // }
        }
        getData();
}

	reject() {
	let getData = async () => {            
              let rejectbook = await axios({
              method: 'post',
              url: '/view-request-admin',
              data: {
              	hbookId: this.props.book.HBookId,
              	userId: this.props.book.UserId
              }
            });
            window.alert(rejectbook.data.output);
            // if(books.data.output){
            //     console.log(this.props)
            //     this.props.history.push('/login');
            //     console.log("went in", books.data.output);
            // }
            // else{
            //     console.log(books.data["book-details"]);
            //     this.setState({books: books.data["book-details"]});
            // }
        }
        getData();
}

	render() {

	return (
		<tr>
	        <td>{this.props.index + 1}</td>
	        <td>{this.props.book.BookName}</td>
	        <td>{this.props.book.BookAuthor}</td>
	        <td>{this.props.book.FirstName + this.props.book.LastName}</td>
	        <td>{this.props.book.UserName}</td>
	        <td>{this.props.book.Timestamp}</td>
	        <td>
		        <Button bsSize="small" bsStyle="primary" onClick={this.approve}>Issue
		        </Button>
		        <Button bsSize="small" bsStyle="primary" onClick={this.reject}>Reject
		        </Button>
	        </td>
        </tr>
	);
}
}

export default RequestedBooks;