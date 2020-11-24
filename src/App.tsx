import React, { FunctionComponent, useRef, useState } from "react";
import videoUrl from "assets/video.mp4";
import audioUrl from "assets/audio.mp3";

import styles from "app.scss";

const App: FunctionComponent = () => {
    const [display, setDisplay] = useState("flex"); 
    const videoRef = useRef<HTMLVideoElement>();
    
    const onClick = () => {
        setDisplay("none");

        const audio = new Audio(audioUrl);
        audio.play();
        videoRef.current.play();
    }

    return <div className={styles.content}>
        <div onClick={onClick} style={{display}} className={styles.overlay}>
            <div className={styles.text}>
                Click to play
            </div>
        </div>
        <video loop ref={videoRef} className={styles.video}>
            <source src={videoUrl} type="video/mp4"/>
        </video>
    </div>
};

export default App;
