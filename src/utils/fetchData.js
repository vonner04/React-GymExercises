export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_EXERCISE_DB_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {

    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}