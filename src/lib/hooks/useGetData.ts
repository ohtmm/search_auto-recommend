import { useEffect, useState } from "react";
import axios from "axios";
import API from "../api/api";

const instance = axios.create({
  baseURL: "http://localhost:4000"
});

const api = new API(instance);

const useGetData = <Tdata>() => {
  const [data, setData] = useState<Tdata>();

  const getData = async () => {
    const { data } = await api.fetch("/sick");
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return { data };
};

export default useGetData;
