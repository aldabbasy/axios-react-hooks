import { useEffect, useState } from 'react';
import axios from 'axios';

type useAxiosGetReturnType = {
  data: any;
  loading: boolean;
  refetch: () => Promise<any>;
  error: any;
}

type useAxiosGetProps = {
  endpoint: string;
  headers: any;
}

const useAxiosGet = ({ endpoint, headers }: useAxiosGetProps): useAxiosGetReturnType => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(null);

  const api = axios.create({headers});

  const refetch = async() => {
    setLoading(true);
    await api.get(endpoint).then(res => {
      setData(res.data);
    }).catch((err) => {
      setError(err);
    }).finally(() => {
      setLoading(false);
    });
  }

  useEffect(() => {
    api.get(endpoint).then(res => {
      setData(res.data);
    }).catch((err) => {
      setError(err);
    }).finally(() => {
      setLoading(false);
    });

  }, [endpoint]);

  return { data, loading, refetch, error };
};

export default useAxiosGet;