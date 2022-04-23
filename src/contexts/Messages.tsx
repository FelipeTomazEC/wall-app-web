import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { postMessage } from "../services/usecases/post-message";
import { getAllMessages } from "../services/usecases/get-all-messages";

export type Message = {
  id: string;
  username: string;
  postedAt: Date;
  text: string;
}

type MessagesContextData = {
  messages: Message[];
  postNewMessage: (message: string) => Promise<void>;
}

export const MessagesContext = createContext({} as MessagesContextData);

export const MessagesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([]);

  const postNewMessage = async (text: string) => {
    await postMessage(text);
    const messages = await getAllMessages();
    setMessages(messages);
  }

  useEffect(() => {
    const loadMessages = async () => {
      const messages = await getAllMessages();
      setMessages(messages);
    }

    loadMessages();
  }, []);

  return (
    <MessagesContext.Provider value={{ messages, postNewMessage }}>
      { children }
    </MessagesContext.Provider>
  );
}

export const useMessages = () => useContext(MessagesContext);