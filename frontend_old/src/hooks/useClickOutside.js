import { useEffect } from "react";
import { LogDebug } from "../constants/constant_vals";

// alert if click outside the passed ref

export function useClickOutside(ref, closeHandler){
    useEffect(() => {
        const HandleClickOutside= (event) =>{
            try{
                if(event.target.getAttribute("class") &&
                    event.target.getAttribute("class").localeCompare("MuiBackdrop-root") === 0) {
                        closeHandler()
                    }
            } catch (error) {
                console.error(`useClickOutside: event.target.getAttribute("class") is empty`)
            }
        }

        // bind
        document.addEventListener("mousedown", HandleClickOutside);
        return () => {
            // cleanup
            document.removeEventListener("mousedown", HandleClickOutside);
        };
    },[ref])
}