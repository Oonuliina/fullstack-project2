import React from 'react';
import { useState } from 'react';
import { SearchBar } from './components/searchBar';
import { SearchResults } from './components/searchResults';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

const API = "https://ldr-server.onrender.com/api";

function App() {
    // usestate hook jota käytetään hakutulosten renderöintiin
    const [results, setResults] = useState([]);   

    // funktio kappaleen poistamiseen
    const DeleteTrack = async id => {
        const data = await fetch(API + "/delete/" + id, { method: "DELETE" })
        .then(res => res.json());

        setResults(results => results.filter(track => track._id !== data._id))
    }

    return (
            <Container>
                <div className='main-header'>
                    <Row className="justify-content-sm-center">
                        <Col xs="5">
                            <h1 className='header'>LDR MUSIC LIBRARY</h1>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col xs="5">
                            <h2 className='subheader'>Find your favorite songs</h2>
                        </Col>
                    </Row>
                </div>
                <section className='search-section'>
                    <SearchBar setResults={setResults} />
                    <SearchResults results={results} deleteTrack={DeleteTrack}/>
                </section>
            </Container>      
    )
}

export default App;