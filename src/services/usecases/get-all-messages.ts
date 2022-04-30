import { Message } from "../../types/message";
import { api } from "../api";

type GetMessagesResponse = {
  messages: Message[];
}

export const getAllMessages = async (): Promise<Message[]> => {
  const endpoint = '/messages';
  const response = await api.get<GetMessagesResponse>(endpoint);
  return response.data.messages;
}