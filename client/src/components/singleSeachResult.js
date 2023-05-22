import React from "react";
import "./styles/singleSearchResult.css"
import { CheckImage } from "./checkImage";
import { Card } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const OneSearchResult = ({ result, id, deleteTrack }) => {
    return (
        //määritellään yksi "hakutuloskortti"
    <>
      <div className="track">
            <div className="buttons">
                <div className="edit" onClick={() => alert("Ei toimi!!!")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#D48CAE" className="pencil" viewBox="0 0 16 16">
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                    </svg>
                </div>
                <div className="delete" onClick={() => deleteTrack(id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#D48CAE" className="delete-icon" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </div>
            </div>
            {/* tarkistetaan kuva CheckImage komponenttia kutsumalla */}
            <CheckImage album={result.album}/>
            <div className='description'>
                <div>Title: {result.name}</div>
                <div>Artist: {result.artist}</div>
                <div>Album: {result.album}</div>
                <div>Year: {result.year}</div>
            </div>
        </div> 
    </>
    )
}