import { Link } from "react-router-dom"

const Welcome = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-500 to-blue-700 text-white">
      <h1 className="text-5xl font-bold mb-8">Welcome To My Library</h1>
      <Link
        to="/books"
        className="bg-white text-blue-700 font-bold py-3 px-6 rounded-full shadow-md hover:bg-blue-200 hover:text-blue-800 transition duration-300"
      >
        Get All Books
      </Link>
    </div>
  )
}

export default Welcome