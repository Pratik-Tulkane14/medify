import React, { useState } from "react";
import google_play from "/google_play.png";
import apple_store from "/apple_store.png";
import phones from "/phones.png";
const Download: React.FC = () => {
    const [number, setNumber] = useState<string>();
    return (
        <div className="download-wrapper">
            <div className="left-download-section">
                <img src={phones} alt="google play link" />
            </div>
            <div className="right-download-section">
                <h5 className="download-heading">
                    Download the
                </h5>
                <h5 className="download-heading">
                    <span className="medify">Medify
                    </span>
                    App
                </h5>
                <p className="get-app">Get the link to download the app</p>
                <div className="ph-number-wrapper">
                    <div className="input-wrapper">
                        <span className="country-code">+91</span>
                        <input
                            className="ph-input-box"
                            type="text"
                            placeholder="Enter phone number"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                        />
                    </div>
                    <button className="send-btn">Send SMS</button>
                </div>
                <div className="download-links">
                    <img src={google_play} alt="google play link" />
                    <img src={apple_store} alt="app store link" />
                </div>
            </div>
        </div>
    );
};

export default Download;
