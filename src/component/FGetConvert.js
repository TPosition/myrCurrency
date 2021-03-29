import React, { useEffect, useState } from 'react';
import OCurrencyList from './OCurrencyList.json';

// export default function FGetConvert(props) {

//     const [error, setError] = useState(null);
//     const [isLoaded, setIsLoaded] = useState(false);
//     const [items, setItems] = useState({});

//     useEffect(() => {
//         // fetch("https://free.currconv.com/api/v7/convert?apiKey=c8e68821cc44938f8cf4&q=" + props.FromCurrency + "_" + props.ToCurrency + "," + props.ToCurrency + "_" + props.FromCurrency + "&compact=ultra&date=" + props.StartDate + "&endDate=" + props.EndDate)
//             .then(res => res.json())
//             .then(
//                 (result) => {
//                     setIsLoaded(true);
//                     if (result.results) { setItems(result.results); }
//                 },
//                 (error) => {
//                     setIsLoaded(true);
//                     setError(error);
//                 }
//             )
//     }, [])

//     // console.log("https://free.currconv.com/api/v7/convert?apiKey=c8e68821cc44938f8cf4&q=" + props.FromCurrency + "_" + props.ToCurrency + "," + props.FromCurrency + "_" + props.ToCurrency + "&compact=ultra&date=" + props.StartDate + "&endDate=" + props.EndDate)
//     if (error) {
//         return <div>Error: {error.message}</div>;
//     } else if (!isLoaded) {
//         return <div>Loading...</div>;
//     } else {
//         return {}
//     }
// }


export function FGetSingleConvert(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState({});

    // useEffect(() => {
    //     fetch("https://run.mocky.io/v3/2cd9d4ac-d47b-4046-a1f2-f3ebcbd65bd9")
    //         // fetch("https://free.currconv.com/api/v7/convert?apiKey=c8e68821cc44938f8cf4&q=" + props.FromCurrency + "_" + props.ToCurrency + "&compact=y")
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 setIsLoaded(true);
    //                 if (result) {
    //                     setItems(result);
    //                     // props.handleCjson(result, props.ToCurrency);
    //                 }
    //             },
    //             (error) => {
    //                 setIsLoaded(true);
    //                 setError(error);
    //             }
    //         )
    // }, [])
    setIsLoaded(true)
    setItems(OCurrencyList.convert);

    var conCurrency = props.FromCurrency + "_" + props.ToCurrency;

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        if (Object.keys(items).length > 0 && items.status !== 400) {
            // props.handleCjson(items[Object.keys(items)[0]].val, props.FromCurrency, props.ToCurrency, props.isLastIndex);
            // localStorage.setItem(conCurrency, items[Object.keys(items)[0]].val);
            // return items[Object.keys(items)[0]].val;
            // console.log(items[Object.keys(items)[props.ToCurrency]]);
            console.log(Object.keys(items));
            return "NA";
            // return items[Object.keys(items)[props.ToCurrency]["rate"]];
        }
        else {
            // if (localStorage.getItem(conCurrency)) {
            //     return localStorage.getItem(conCurrency);
            // }
            // else {
            //     localStorage.setItem(conCurrency, "N.A.");
            //     return "N.A.";
            // }
            return "N.A.";
        }

        // updateOCL(items, props.FromCurrency, props.ToCurrency);
    }
}

// function updateOCL(items, FromCurrency, ToCurrency) {

//     if (Object.keys(items).length > 0 && items.status !== 400) {
//         // OCurrencyList["results"][FromCurrency][FromCurrency + "_" + ToCurrency] = "N.A.";
//         // let dataJson=
//         // localStorage.setItem("currencyTemp",{
//         //     "results": {
//         //         FromCurrency: items[Object.keys(items)[0]].val

//         //     }
//         // });
//         props.updateCjson(items[Object.keys(items)[0]].val, FromCurrency);
//         return items[Object.keys(items)[0]].val;
//     }
//     else {
//         // localStorage.getItem(rs.usd_php---)
//         return "NA";
//     }

// }


