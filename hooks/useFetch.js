import { useState, useEffect } from "react";

const useFetch = async (endpoint, query) => {
  const [data, setData] = useState([{ toto: "" }]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const params = new URLSearchParams(query);
  const url = `https://jsearch.p.rapidapi.com/${endpoint}?${params}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "2fc7bef173mshfd0b5aef735291cp1f381djsn0d2b0c2b0800",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url, options);
      const json = await response.json();
      setData(json.data);
    } catch (error) {
      setError(error);
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
