import React from "react";

let albumCover;
// tarkastetaan kansikuva albumin nimen perusteella ja palautetaan se
    export const CheckImage = (props) => {
        if (props.album === "Born to Die") {
            albumCover = "borntodie.png";
        } else if (props.album === "Born to Die: The Paradise Edition") {
            albumCover = "paradise.png";
        } else if (props.album === "Ultraviolence") {
            albumCover = "ultraviolence.png";
        } else if (props.album === "Honeymoon") {
            albumCover = "honeymoon.png";
        } else if (props.album === "Lust for Life") {
            albumCover = "lustforlife.png";
        } else if (props.album === "Norman Fucking Rockwell") {
            albumCover = "nfr.png";
        } else if (props.album === "Chemtrails over the Country Club") {
            albumCover = "chemtrails.png";
        } else if (props.album === "Blue Banisters") {
            albumCover = "bluebanisters.png";
        } else if (props.album === "Did You Know That There's a Tunnel Under Ocean Blvd") {
            albumCover = "oceanblvd.png";
        } else {
            albumCover = "placeholder.png";
        }  

        return (
            <img src={albumCover} alt="Album cover"/>    
        )
    }