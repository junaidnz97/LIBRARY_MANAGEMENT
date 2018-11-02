import React, { Component } from 'react';
import './Bookdynamic.css';
import Rating from './Rating.js';
import * as axios from 'axios';
import {ButtonToolbar,Button,FormControl,FormGroup,ControlLabel} from 'react-bootstrap';


class Bookdynamic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            availableBooks: 0,
            buttonDisabled: true,
            booksPossessed: 0
        }

        this.updateBookDynamic = this.updateBookDynamic.bind(this);
        this.borrowBook = this.borrowBook.bind(this);
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

    render() {
        return (
            <div class="card">
                    <div class="card__content2">
                    <div>
                        <h3>Books available: {this.state.availableBooks}</h3>
                        <br/>
                        <ButtonToolbar>
                            <Button bsStyle="primary" disabled={this.state.buttonDisabled} onClick={this.borrowBook}>Borrow Book</Button>
                            <Button bsStyle="primary">Share Books</Button>
                        </ButtonToolbar>
                    </div>
                      <form>
                        <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>
                            

                        </ControlLabel>

                        <FormControl bsSize="large" componentClass="textarea" placeholder="Write your review here..." />
                        <Rating/><br/> 
                        <Button bsStyle="primary" style={{float:"right"}} type="submit">Submit</Button>

                        </FormGroup>
                      </form>    
                    </div>
              </div>
        );
    }
}



export default Bookdynamic;