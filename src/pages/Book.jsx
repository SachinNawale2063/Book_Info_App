import { useParams } from 'react-router-dom';
import { useBookById } from '../hooks/useBookById.js';
import Bookinfo from '../components/Bookinfo.jsx';

const Book = () => {

    const { bookId } = useParams();

    const { bookData, bookError } = useBookById(bookId);

    if (bookError) {
        return <div className="flex justify-center items-center h-screen bg-gray-50">
            <div className="text-red-600 text-lg">Error: {bookError.message}</div>
        </div>
    }

    if (bookData) {
        return (
            <div>
                <h1 className="text-3xl font-bold text-center text-gray-800 my-6">Information of selected book</h1>

                <Bookinfo
                    id={bookData.id}
                    title={bookData.title}
                    isbn={bookData.isbn}
                    pageCount={bookData.pageCount}
                    authors={bookData.authors}
                />
            </div>
        )
    }


    return (
        <div className="flex justify-center items-center h-screen bg-gray-50">
            <div className="text-gray-600 text-lg">Data is loading...</div>
        </div>
    )
}

export default Book