import React, { useEffect, useState } from 'react';
// import { FGetSingleConvert } from "./FGetConvert";
import FGetDate from "./FGetDate";
import OCurrencyList from "./OCurrencyList.json"
import _ from "lodash";
import Card from 'react-bootstrap/Card';
require('dotenv').config()

export default function CCurrencyList() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState({});
    const todayDate = FGetDate();
    const [convert, setConvert] = useState({});
    const [ERVal, setERVal] = useState(1);
    const [multER, setmultER] = useState(0);

    useEffect(() => {
        // Fetch API from https://free.currencyconverterapi.com/, warn for free account limitation.
        // fetch("https://run.mocky.io/v3/3e5dfecb-1948-45b9-ac96-025813fbec0f")
        // fetch("https://free.currconv.com/api/v7/currencies?apiKey=" + process.env.REACT_APP_FC_API)
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             setIsLoaded(true);
        //             if (result) {
        //                 setItems(result.results);
        //             }
        //         },
        //         (error) => {
        //             setIsLoaded(true);
        //             setError(error);
        //         }
        //     )

        setIsLoaded(true);
        setItems(OCurrencyList.results);
        setConvert(OCurrencyList.convert);
    }, []);

    function calcERval(e) {
        console.log(e.target.value);
        setERVal(e.target.value);
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return <div class="width80 container">
            <h3 class="my-5">List of Currencies</h3>
            <Card>
                <table class="text-left striped">
                    <thead>
                        <tr class="bot-primary">
                            <th>Currency Symbol</th>
                            <th>Currency Name</th>
                            <th class="row my-0">
                                <td class="align-bottom col-lg-6">Exchange rate from RM</td>
                                <input type="number" value={ERVal} onChange={calcERval} class="bot-primary-focus col-lg-6" min="0" />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(items).map(function (key, index) {
                            return <tr key={index}>
                                <td>{items[key].currencySymbol ? items[key].currencySymbol : "N.A."} / {items[key].id}</td>
                                <td>{items[key].currencyName}</td>
                                {/* <td><FGetSingleConvert FromCurrency="MYR" ToCurrency={items[key].id} /></td> */}
                                <td>{convert[key].rate * ERVal}
                                    <div class="float-right text-secondary">{convert[key].time}</div>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </Card>
            <span class="float-left text-secondary pt-2">*Due to limitations of currencyconverterapi free account, latest and full list of currencies will not be shown.</span>
            <span class="float-left text-secondary pb-2">Disclaimer: The pictures, content, etc. in this work are purely for personal practice use, not for any commercial use.</span>

        </div>
    }
}

