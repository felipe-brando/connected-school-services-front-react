import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";



const FlashMessage = ({ incomingMessage }) => {

    const [message, setMessage] = useState(incomingMessage);
    const dispatch = useDispatch();


    useEffect(() => {
        const timer = setTimeout(() => {
            setMessage("");
            dispatch({
                type: 'RESET_FLASH_MESSAGES',
            })

        }, 4500);
        return () => clearTimeout(timer);
    })

    return (
        <p>{message}</p>
    );
}

export default FlashMessage;