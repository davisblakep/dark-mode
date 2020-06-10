import { useEffect } from 'react';

import useLocalStorage from './useLocalStorage';


const useDarkMode = () => {
    const [darkValue, setDarkValue] = useLocalStorage()
    useEffect(() => {
        const bTag = document.getElementsByTagName("body")[0];
        return darkValue ? bTag.classList.add("dark-mode") : bTag.classList.remove("dark-mode");
    }, [darkValue])

    const darkSetter = (value) => {
        setDarkValue(value)
    }

    return [darkValue, darkSetter]
}

export default useDarkMode;