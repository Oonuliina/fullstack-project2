import React, {useState} from "react";
import {FaSearch} from "react-icons/fa";
import "./styles/searchBar.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const API = "http://localhost:3030/api";

// komponentti hakukentälle
export const SearchBar = ({ setResults }) => {
    // usestate hook jota käytetään haun syötteen seurantaan
    const [input, setInput] = useState("")

    // haetaan kaikki biisit tietokannasta
    const fetchData = (value) => {
        fetch (API + "/getall")
            .then((response) => response.json())
            .then(json => {

                // asetetaan kappaleiden haku biisin nimen perusteella
                const results = json.filter((track) => {
                    return (
                        value &&
                        track && 
                        track.name &&
                        track.name.toLowerCase().includes(value)
                    );
                });
                setResults(results);
            });
    }

    // seurataan syötettä joka kirjaimen kohdalla ja muutetaan tuloksia
    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }
    
    return (
    <Container className="seach-container my-5">
        <Row className="justify-content-md-center">
            <Col className="search" xs md="5">
                <FaSearch id="search-icon"/>
                <input 
                    placeholder="Enter album or title..." 
                    className="inputfield"
                    id="inputfield"
                    value={input} 
                    onChange={(e) => handleChange(e.target.value)}
                />
            </Col>
        </Row>
    </Container>     
    )
}
