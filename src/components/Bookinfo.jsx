/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const Bookinfo = ({ id, title, isbn, pageCount, authors }) => {
    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-4 bg-gray-600 text-white">
                <h2 className="text-xl font-semibold">{title}</h2>
            </div>
            <div className="px-6 py-4">
                <p className="text-gray-700"><span className="font-semibold">ID:</span> {id}</p>
                <p className="text-gray-700"><span className="font-semibold">ISBN:</span> {isbn}</p>
                <p className="text-gray-700"><span className="font-semibold">Page Count:</span> {pageCount}</p>
                <p className="text-gray-700"><span className="font-semibold">Authors:</span> {authors.join(', ')}</p>
            </div>
        </div>
    )
}

export default Bookinfo