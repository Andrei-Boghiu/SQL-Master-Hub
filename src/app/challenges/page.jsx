"use client";
import { getChallenges } from "@/database/challenges/methods";
import { useEffect, useState } from "react";
import styles from "./challenges.module.css";

const ChallengesPage = () => {
    const [currentChallenge, setCurrentChallenge] = useState(undefined);
    const [completed, setCompleted] = useState(false);
    const [skipped, setSkipped] = useState(false)


    useEffect(() => {
        const isLocalStorage = window.localStorage.getItem("challengesCompleted");

        if (!isLocalStorage) {
            window.localStorage.setItem("challengesCompleted", "[]");
        }
    }, [])

    function getRandomChallenge(allChallenges) {
        const ids = allChallenges.map((challenge) => challenge.id);
        const randomNumber = Math.floor(Math.random() * ids.length);
        const newRandomId = ids[randomNumber]
        const storeString = window.localStorage.getItem("challengesCompleted");
        const storage = storeString ? JSON.parse(storeString) : [];
        console.log("getRandomChallenge:");
        console.log(`New id: ${newRandomId}`);
        console.log(storage);

        const isAlreadyCompleted = storage.includes(newRandomId);
        console.log(`isAlreadyCompleted: ${isAlreadyCompleted}`);

        if (!isAlreadyCompleted) {
            return allChallenges[randomNumber];
        } else if (storage.length === allChallenges.length) {
            return false;
        } else {
            return getRandomChallenge(allChallenges);
        }
    }

    function handleFetchChallenge() {
        setCompleted(false);
        setSkipped(false);

        const allChallenges = getChallenges();

        const challengeDetails = getRandomChallenge(allChallenges);

        if (!challengeDetails) {
            alert("All challenges were completed! Your progress will be deleted so you can revisit the challenges at any time");
            window.localStorage.setItem("challengesCompleted", "[]")
            return;
        }

        setCurrentChallenge(challengeDetails);
    }

    function handleComplete() {
        const storeString = localStorage.getItem("challengesCompleted");
        const storage = storeString ? JSON.parse(storeString) : [];
        const newStorage = [...storage, currentChallenge.id];
        window.localStorage.setItem("challengesCompleted", JSON.stringify(newStorage));
        setCurrentChallenge(undefined);
        setCompleted(true);

        console.log(JSON.parse(localStorage.getItem("challengesCompleted")))
    }

    function handleSkip() {
        setCurrentChallenge(undefined);
        setSkipped(true);
    }

    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.subtitle}>Test your skills!</h2>

                {
                    !currentChallenge &&
                    <h1 className={styles.title}>
                        Try a Challenge💻
                    </h1>

                }

                {
                    !currentChallenge && <button onClick={handleFetchChallenge} className={styles.button}>Get Challenge</button>
                }

                <div className={styles.desc}>
                    {currentChallenge ? currentChallenge.challenge : completed ? "Congratulations 🥳" : skipped ? "Better luck next time" : "Are you ready to put your SQL skills to the test?"}
                </div>

                {
                    currentChallenge &&
                    <div className={styles.buttons}>
                        <button className={styles.button} onClick={handleComplete}>Completed</button>
                        <button className={styles.button} onClick={handleSkip}>Save for later</button>
                    </div>
                }
            </div>
        </div>
    );
};

export default ChallengesPage;
