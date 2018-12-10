import React, { Component } from 'react';
import './Bookdynamic.css';
import Rating from './Rating.js';
import * as axios from 'axios';
import {ButtonToolbar,Button,FormControl,FormGroup,ControlLabel} from 'react-bootstrap';
import {Link} from 'react-router-dom';


class Bookdynamic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            availableBooks: 0,
            buttonDisabled: true,
            booksPossessed: 0,
            reviewArea: '',
            rating:'0'
        }

        this.updateBookDynamic = this.updateBookDynamic.bind(this);
        this.borrowBook = this.borrowBook.bind(this);
        this.review = this.review.bind(this);
        this.handleReviewChange = this.handleReviewChange.bind(this);
        this.clicker = this.clicker.bind(this)
    }

    updateBookDynamic() {
        console.log("in updateDynamic");
        let getData = async () => {            
              let booksnUser = await axios({
              method: 'get',
              url: '/booksummary',
              params: {
                bookId: this.props.BookId
              }
            });
            if(booksnUser.data.output){
                this.props.history.push('/login');
            }
            else{
                console.log("Updating book");
                this.setState({availableBooks: booksnUser.data.BookDetails[0].AvailableQuantity,booksPossessed: booksnUser.data.CurrentBookCount});    
                console.log("After set state", this.state.availableBooks, this.state.booksPossessed);
                if((this.state.availableBooks > 0) && (this.state.booksPossessed <=1)){
                    this.setState({buttonDisabled: false});
                    
                }
            }
        }
        getData();    
        
    }

    componentDidMount() {
        console.log("in comp mount")
        this.updateBookDynamic();
    }

    borrowBook() {
        let borrow = async () => {            
              let status = await axios({
              method: 'post',
              url: '/borrow',
              data: {
                bookId: this.props.BookId
              }
            });
            if(status.data.output){
                this.props.history.push('/login');
            }
            else{
                console.log("success", status.data.status);
                this.updateBookDynamic();
            }
        }
        borrow();      
    }

    review() {
        let reviewGive = async () => {            
              let reviewGive = await axios({
              method: 'post',
              url: '/rate_review',
              data: {
                bookId: this.props.BookId,
                rating: this.state.rating,
                review: this.state.reviewArea
              }
            });
            if(reviewGive.data.output){
                this.props.history.push('/login');
            }
            else{
                console.log("success", reviewGive.data.status);
            }
        }
        reviewGive(); 
    }

    handleReviewChange(e) {
       this.setState({reviewArea: e.target.value});
    }

    clicker(param) {
        console.log(param);
        this.setState({rating: param });
        // this.setState({rating: document.getElementById()});
     }
    render() {
        return (
            <div class="card">
                    <div class="card__content2">
                    <div>
                        <h3>Books available: {this.state.availableBooks}</h3>
                        <br/>
                        <ButtonToolbar>
                            <Button bsStyle="primary" disabled={this.state.buttonDisabled} onClick={this.borrowBook}>Borrow Book</Button>
                            <Link to = {{ pathname: '/sharebooks', state: { BookId: this.props.BookId} }}>
                                <Button bsStyle="primary">Share Books</Button>
                            </Link>
                        </ButtonToolbar>
                    </div>
                      <form>
                        <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>
                            

                        </ControlLabel>
                        <FormControl bsSize="large" componentClass="textarea" onChange={this.handleReviewChange} placeholder="Write your review here..." />
                        <Rating clicker={this.clicker}/><br/> 
                        <Button bsStyle="primary" style={{float:"right"}} onClick={this.review}>Submit</Button>

                        </FormGroup>
                      </form>    
                    </div>
              </div>
        );
    }
}



export default Bookdynamic;