import React, {useEffect, useState} from 'react';
import login from "../../components/Login/Login";

interface useLocalStorageProps {
    (key?: string,
     initialValue?: any): [any, React.Dispatch<any>];
}

const PREFIX = 'message-app';

const useLocalStorage: useLocalStorageProps = (key, initialValue) => {
    const prefixedKey = PREFIX + key;
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey);
        if (jsonValue) return JSON.parse(jsonValue)

        if (typeof initialValue === 'function') {
            return initialValue();
        } else {
            return initialValue;
        }
    })

    useEffect(() => {
        if (value)
            localStorage.setItem(prefixedKey, JSON.stringify(value));
    }, [prefixedKey, value]);

    return [value, setValue];

};

export default useLocalStorage;