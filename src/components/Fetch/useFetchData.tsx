import { useEffect, useState } from "react";

const useFetchData = (url: string) => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const results = await res.json();
        setData(results);
      } catch (error: any) {
        setError(error.message);
      }
    };
    fetchData();
  }, [url]);

  return { data, error, loading };
};

export default useFetchData;
