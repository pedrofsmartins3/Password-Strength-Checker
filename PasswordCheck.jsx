import { useState } from "react"
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";



export default function PasswordCheck({password}) {

    const hasSymbol = (/\W/g).test(password) ? 1 : 0
    const hasUpper = (/[A-Z]/g).test(password) ? 1 : 0
    const hasLower = (/[a-z]/g).test(password) ? 1 : 0
    const hasNumber = (/[0-9]/g).test(password) ? 1 : 0
    const hasLength = (password.length > 8) ? 1 : 0

    const theScore = hasSymbol + hasLower + hasNumber + hasLength + hasUpper

    const color = {backgroundColor: `${
        theScore <= 2 ? 'red'
        : theScore === 3 || theScore === 4 ? 'orange'
        : 'green'}`
    }

    const text = `${
        theScore <= 2 ? 'Weak Password!'
        : theScore === 3 || theScore === 4 ? 'Medium Password!'
        : 'Strong Password!'}`

    const checked = <FaCheck />
    const notChecked = <ImCross />

    return (
        <>
            <div className="container-check" style={color}>
                <h2>{text}</h2>
            </div>
            <div className="tips">
            <h3>Recommended (min):</h3>
                <p>1 Uppercase letter {hasUpper === 1 ? checked : notChecked}</p>
                <p>1 Lowercase letter {hasLower === 1 ? checked : notChecked }</p>   
                <p>1 Number {hasNumber === 1 ? checked : notChecked}</p>
                <p>1 Non-digit (symbol) {hasSymbol === 1 ? checked : notChecked}</p>
                <p>8 Characters {hasLength === 1 ? checked : notChecked}</p>
            </div>

        </>
    )
}