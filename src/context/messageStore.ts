import { create } from "zustand";

interface MessageState {
  message: string;
  setMessage: (message: string) => void;
}

const useMessageStore = create<MessageState>((set) => ({
  message: "",
  setMessage: (message) =>
    set(() => ({
      message,
    })),
}));

export default useMessageStore;
