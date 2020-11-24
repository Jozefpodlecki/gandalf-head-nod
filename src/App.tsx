import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import videoUrl from "assets/video.mp4";
import audioUrl from "assets/audio.mp3";

import styles from "app.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const App: FunctionComponent = () => {
    const [display, setDisplay] = useState("flex");
    const [wasInteraction, setInteraction] = useState(false);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const videoRef = useRef<HTMLVideoElement>();
    
    const onClick = () => {
        setInteraction(true);
    }

    const onCanPlayThrough = () => {
        setVideoLoaded(true)
    }

    useEffect(() => {
        (async () => {
            if(videoLoaded && wasInteraction) {
                const audio = new Audio(audioUrl);
            
                await new Promise((resolve, ) => audio.oncanplaythrough = resolve);
                
                audio.play();
                videoRef.current.play();
                setDisplay("none");
            }
        })();

    }, [videoLoaded, wasInteraction]);

    return <div className={styles.content}>
        <div onClick={onClick} style={{display}} className={styles.overlay}>
            <div className={styles.text}>
                Click to play
            </div>
        </div>
        <video loop ref={videoRef} className={styles.video} onCanPlayThrough={onCanPlayThrough}>
            <source src={videoUrl} type="video/mp4"/>
        </video>
        <div className={styles.bottom}>
            <div className={styles.icon}>
                <a href="https://github.com/Jozefpodlecki/gandalf-head-nod">
                    <FontAwesomeIcon icon={faGithub} color="white" size="3x"/>
                </a>
            </div>
        </div>
    </div>
};

export default App;