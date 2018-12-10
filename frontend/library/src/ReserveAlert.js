import React, { Component } from 'react';
import * as axios from 'axios';

 

class ReserveAlert extends Component {
    constructor(props){
        super(props);

    }

    componentDidMount() {
        let sendData = async () => { 
            let details = await axios({
            method: 'post',
            url: '/check-reserve',
            
          });
            if(details.data.output){
                window.location.replace("/admin");
            }
            else{
                if(details.data.details){
                    console.log(details.data.details[0].BookId)
                    if(details.data.details[0].flag == 1){
                        window.alert("Please return your book with book id " +details.data.details[0].BookId+ ", it has been reserved by someone");
                    }

                }
                
            }
            }
          sendData();
        
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default ReserveAlert;