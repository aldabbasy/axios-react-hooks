import { useState } from 'react';
import axios from 'axios';

type useAxiosPostReturnType = [
  (body:any) => Promise<any>,
  {
    data: any;
    loading: boolean;
  }
]

type useAxiosPostProps = {
  endpoint: string;
  headers: any;
}

const useAxiosPost = ({ endpoint, headers }: useAxiosPostProps): useAxiosPostReturnType => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);

  const api = axios.create({ headers });

  const sendRequest = async(body: any) => {
    setLoading(true);

    await api.post(endpoint, body).then((res:any) => {
      setData(res.data);
      setLoading(false);
    });
  }

  return [sendRequest, { data, loading }];
};

export default useAxiosPost;