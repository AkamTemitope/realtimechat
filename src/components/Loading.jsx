import { useEffect, useState } from "react"

const Loading = () => {
    const [timer, setTimer] = useState(10)

    useEffect(() => {
        timer > 0 && loadTimer()

    }, [timer])
    
    const loadTimer = () => setTimeout(() => {
        setTimer(timer - 1)     
    }, 1000)

    return (
        <div id='loader'>
            <div></div>
            <p>Please wait...{timer !== 0 && timer}</p>
        </div>
    )
}

export default Loading