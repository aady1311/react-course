import { useEffect, useState } from "react";
 
function useCurrencyInfo(currency){
 const [data, setData] = useState({});
useEffect(() => {
     fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025.7.1/v1/currencies/${currency}.json`)
     .then((res) => res.json())
     .then((res) => setData(res[currency]))
    //  https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025.7.1/v1/currencies/usd.json
 },[currency])
 console.log(data);
 return data;
}

export default useCurrencyInfo