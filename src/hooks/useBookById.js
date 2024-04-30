import { useEffect, useState } from "react";
import { getbookbyid } from "../api/bookapi";

export const useBookById = (bookId) => {

    const [bookData, setBookData] = useState(null);
    const [bookError, setBookError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getbookbyid(bookId);
                setBookData(data);
            } catch (error) {
                setBookError(null)
            }

        }
        fetchData();
    }, [bookId])

    return { bookData, bookError }
}
