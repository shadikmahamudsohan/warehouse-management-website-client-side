import { useState } from "react";

const useTokens = (user) => {
    const [token, setToken] = useState()
    fetch('https://quiet-refuge-83525.herokuapp.com/login', {
        method: 'POST',
        body: JSON.stringify({
            email: user.user.email
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            setToken(data.token)
            localStorage.setItem("accessToken", data.token)
        });

    return [token, setToken]
};

export default useTokens;