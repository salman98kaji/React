import { useEffect, useState } from "react";

function useCurrencyInfo(currency) { // takes usd 

    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-11-13/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data  //return object data
    
}

export default useCurrencyInfo;