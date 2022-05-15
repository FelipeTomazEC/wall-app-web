import useSWR from 'swr';
import { getAllMessages } from '../services/usecases/get-all-messages';
import { postMessage } from '../services/usecases/post-message';
import { Message } from '../types/message';

export const useMessages = () => {
  const ONE_MINUTE = 60 * 1000;
  const swrConfig = {
    suspense: true,
    refreshInterval: ONE_MINUTE
  }
  
  const { data = [], mutate } = useSWR('/messages', getAllMessages, swrConfig);
  const postNewMessage = async (
    message: string,
    onSuccess: () => void,
    onError: (message: string) => void
  ) => {
    const newMessage: Message = {
      id: Date.now().toString(), 
      postedAt: new Date(), 
      text: message, 
      username: 'You'
    }

    mutate(postMessage(message, onSuccess, onError).then(() => getAllMessages()), {
      optimisticData: [...data, newMessage],
      rollbackOnError: true,
      populateCache: true,
      revalidate: false
    })
  }

  return { messages: data, postNewMessage };
}