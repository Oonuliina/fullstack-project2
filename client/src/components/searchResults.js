import React from "react";
import "./styles/searchResults.css"
import "./singleSeachResult"
import { OneSearchResult } from "./singleSeachResult";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//komponentti kaikkien hakutulosten näyttämiseen
export const SearchResults = ({ results, deleteTrack }) => {
    return (
        // käydään läpi hakutulokset
        <div className="results">
        <Container className="search-results">
            <Row xs={1} md={2} lg={3} xl={3} xxl={4} className="g-4">{results.map((result, id) => {      
                // kutsutaan komponenttia "yksi hakutulos"
                return <Col>
                            <OneSearchResult 
                                result={result} 
                                key={id} 
                                id={result._id} 
                                deleteTrack={deleteTrack}
                                /> 
                </Col>
            })}</Row>
        </Container>
        </div>
    )
}