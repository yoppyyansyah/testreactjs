import React, { useState, useEffect } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import API from '../../services/home/index'

function AutoComplete({ callback, api }) {
    const [data, setData] = useState([]);
    const [getData, setGetData] = useState(false);
    useEffect(() => () => {
        if (!getData) {
            getApi();
        }
    });

    const getApi = () => {
        API.Get(api).then(result => {
            result.forEach((o, i) => o.id = i + 1);
            setData(result);
            setGetData(true);
            callback(result);
        }, (err) => {
            console.log(err);
        })
    }

    const handleOnSearch = (string, results) => {
        if (string === "") {
            getApi();
        }
        setData(results);
        callback(results);
    }

    const handleOnHover = (result) => {
        console.log("handover")

    }

    const handleOnSelect = (item) => {
        let data = [];
        data.push(item);
        setData(data);
        callback(data);
    }

    const handleOnFocus = (item) => {
        console.log("focus")
        getApi();
    }

    const formatResult = (item, index) => {
        return (
            <>
                <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
            </>
        )
    }

    return (
        <>
            <ReactSearchAutocomplete
                items={data}
                onSearch={handleOnSearch}
                onHover={handleOnHover}
                onSelect={handleOnSelect}
                onFocus={handleOnFocus}
                autoFocus
                formatResult={formatResult}
            />
        </>
    )
}
export default AutoComplete;