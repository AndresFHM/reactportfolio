import React from 'react';
import profilePicture from "../../../static/assets/images/bio/andresAvatar.jpg"
// can be ^^^^^ called anything
import { FontAwesomeIcon } from"@fortawesome/react-fontawesome";



export default function() {
    return (
        <div className="content-page-wrapper">
            <div
                className="left-column"
                style={{
                    background: "url(" + profilePicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            ></div>
            <div className="right-column">
                <div className="contact-bullet-points">
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="mobile"/>
                        </div>
                        <div className="text">555-555-5555</div>
                    </div>
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="envelope"/>
                        </div>
                        <div className="text">andyusnik@gmail.com</div>
                    </div>
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="map-marked-alt"/>
                        </div>
                        <div className="text">Pittsburgh, PA</div>
                    </div>
                </div>
            </div>
        </div>
    );
}