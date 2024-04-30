const BASE_URL = "https://softwium.com/api/"

const apiGet = async (queryString) =>{
    const response = await fetch(`${BASE_URL}${queryString}`);
    const body = await response.json();
    return body;
}

export const getbooks = () => apiGet(`/books`)
export const getbookbyid = (id) => apiGet(`/books/${id}`)