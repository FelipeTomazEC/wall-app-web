import useSWR from 'swr';
import { getAllMessages } from '../services/usecases/get-all-messages';

export const useMessages = () => {
  const swrConfig = {
    suspense: true,
    refreshInterval: 5000
  }
  const { data } = useSWR('/messages', getAllMessages, swrConfig);
  return data;
}