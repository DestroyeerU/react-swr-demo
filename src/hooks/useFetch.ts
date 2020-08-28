/* eslint-disable no-shadow */
import useSWR, { ConfigInterface } from 'swr';

import api from '~/services/api';

export function useFetch<T = any, D = any>(url: string, config?: ConfigInterface<T, D>) {
  const { data, error, mutate } = useSWR<T, D>(
    url,
    async (url: string) => {
      const response = await api.get(url);

      return response.data;
    },
    config
  );

  return { data, error, mutate };
}
