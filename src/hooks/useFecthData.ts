import useSWR, { SWRConfiguration } from 'swr';

const useFecthData = (
  url: string,
  config: SWRConfiguration = {
    revalidateOnFocus: false,
    revalidateIfStale: false,
  }
) => {
  const { data, error } = useSWR(`/api${url}`, config);

  return {
    state: data || [],
    isLoading: !error && !data,
    isError: error,
  };
};

export default useFecthData;
