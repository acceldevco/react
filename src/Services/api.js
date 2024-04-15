import axios from "axios";

export async function makeRequest(url, method='GET', data='', progressCallback) {
    try {
        const response = await axios({
            method,
            url,
            data,
            headers: {
                'Content-Type': 'application/json',  // Example header for JSON data
                'Authorization': `Bearer ${localStorage.token && localStorage.token}`,
            }
        });
        return response;
    } catch (error) {
        throw new Error("Request failed:", error);
    }
}