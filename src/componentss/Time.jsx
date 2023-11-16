import { useEffect, useState } from "react";

function Time() {

    const [ time, setTime ] = useState(new Date());

    useEffect(() => {
        console.log("interval has been setup")
        const IntervalId = setInterval(() => {
            setTime(new Date());
        }, 1000)

        return () => {
            clearInterval(IntervalId);
            console.log("cancelled the interval");
        };
    }, []);
    // ek baar print ho isliye empty array pass kiye h
    return (
        <center className="Time fs-2">
            This is the current time :{time.toLocaleDateString()} - {time.toLocaleTimeString()}
        </center>
    )
}

export default Time;