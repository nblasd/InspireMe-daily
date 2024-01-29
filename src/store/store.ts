import { create } from "zustand";

interface quotesState {
  quote: string;
  author: string;
}

interface Quotesstate {
  quotes: quotesState[];
}

const useStore = create<Quotesstate>((set) => ({
  quotes: [
    {
      quote:
        "The difference between successful people and others is not a lack of strength, not a lack of knowledge, but rather a lack of will.",
      author: "Vince Lombardi",
    },
    {
      quote:
        "The only person you are destined to become is the person you decide to be.",
      author: "Ralph Waldo",
    },
    {
      quote: "A journey of a thousand miles begins with a single step.",
      author: "Lao Tzu",
    },
  ],
}));

export default useStore;
