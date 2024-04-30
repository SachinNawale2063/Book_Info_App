/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"
const Booktable = ({ data }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full">
                <thead>
                    <tr className="bg-gray-800 text-white">
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Id</th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Title of the Book</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((temp) => (
                        <tr key={temp.id} className="hover:bg-gray-100 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap">{temp.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <Link to={`/books/${temp.id}`} className="text-blue-500 hover:underline">
                                    {temp.title}
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Booktable