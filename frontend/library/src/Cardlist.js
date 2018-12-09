import React from 'react';
import Cardcomp from './Card.js';
import {Link} from 'react-router-dom';
import {Row} from 'reactstrap'

const Cardlist = ({books,pageno}) => {

	/*const Cardarray = books.map((book, i) =>{
		return (
			<Link to={{ pathname: '/book', state: { book: book} }}>
				<Cardcomp 
					key={book.id} 
					bookdesc={book} 
				/>
			</Link>
		);
	});*/

	var Cardarray=[];
	for(var i=pageno*5;i<Math.min(books.length,(pageno+1)*5);i++) {
        Cardarray.push(<Link to={{pathname: '/book', state: {book: books[i]}}}>
            <Cardcomp
                key={books[i].id}
                bookdesc={books[i]}
            />
        </Link>);
        console.log("hello");
		console.log(books[i].id);
		console.log(books[i]);
    }


	return (
		<Row>
			{Cardarray}
		</Row>
	);
}

export default Cardlist;