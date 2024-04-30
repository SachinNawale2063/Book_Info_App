import Booktable from "../components/Booktable.jsx";
import { useBooks } from "../hooks/useBooks.js";

const Home = () => {

    const { allBookData, allBookDataError } = useBooks();

    if (allBookDataError) {
        return <div className="flex justify-center items-center h-screen bg-gray-50">
            <div className="text-red-600 text-lg">Error: {allBookDataError.message}</div>
        </div>
    }

    if (allBookData) {
        return (<div className="flex flex-col items-center justify-center min-h-screen bg-gray-300">
            <h1 className="text-3xl font-bold mb-8">All Available Books</h1>
            <Booktable data={allBookData} />
        </div>
        )
    }


    return (
        <div className="flex justify-center items-center h-screen bg-gray-50">
            <div className="text-gray-600 text-lg">Data is loading...</div>
        </div>
    )
}

export default Home