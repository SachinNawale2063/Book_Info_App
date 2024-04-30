import { useState, useEffect } from "react";
import { getbooks } from "../api/bookapi.js";

export const useBooks = () => {

    const [allBookData, setallBookData] = useState(null);
    const [allBookDataError, setallBookDataError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getbooks();
                setallBookData(data);
            } catch (error) {
                setallBookDataError(null)
            }

        }
        fetchData();
    }, [])

    return { allBookData, allBookDataError }
}
