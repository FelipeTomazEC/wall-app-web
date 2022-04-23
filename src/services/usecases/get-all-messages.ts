import { Message } from "../../contexts/Messages";
import { api } from "../api";

type GetMessagesResponse = {
  messages: Message[];
}
export const getAllMessages = async (): Promise<Message[]> => {
  try {
    const endpoint = '/messages';
    const response = await api.get<GetMessagesResponse>(endpoint);
    return response.data.messages;
  } catch(error) {
    console.error(error);
    return [];
  }
}