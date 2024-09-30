import { useState } from "react";

function ScoreKeeper() {

    const [score, setScore] = useState({ p1Score: 0, p2Score: 0 });

    function p1Increase() {
        console.log("you increasing p1");
        setScore((oldScore) => {
            return { ...oldScore, p1Score: oldScore.p1Score + 1 }
        })
    }


    //So here we are increasing player 2 score by returning oldScore which copies the object data from earlier and returns a copy.
    //we have to use this because the data shown score.p1Score is based on location and when click its not rerednering the entire function.
    function p2Increase() {
        console.log("you increasing p2");
        setScore((oldScore) => {
            //Use spread operator to duplicate the values - commonly used in REACT.
            return { ...oldScore, p2Score: oldScore.p2Score + 1 }
        })
    }



    return (

        <div>
            <p>Player 1: {score.p1Score} </p>
            <p>Player 2: {score.p2Score}</p>
            <button onClick={p1Increase}>+1 Player 1</button>
            <button onClick={p2Increase}>+1 Player 2</button>
        </div>
    );
}

export default ScoreKeeper;