import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: { hl: "en", gl: "US" },
    headers: {
        "X-RapidAPI-Key":'1c9fc20a5fmsh07af003f0f0a01ep1fdd90jsnf4b4d56c2789',
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
