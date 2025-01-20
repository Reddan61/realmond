"use client";

import { createContext, FC, useContext, useState } from "react";
import { ListType } from "@/api/helpers/ApiTransformer";
import { API } from "@/api/api";

interface IStore {
  pending: boolean;
  list: ListType;
}

const StoreContext = createContext<
  IStore & {
    setStore: (store: IStore) => void;
  }
>({
  pending: false,
  list: [],
  setStore: () => {},
});

interface IProviderProps {
  children: React.ReactNode;
}

export const StoreContextProvider: FC<IProviderProps> = ({ children }) => {
  const [store, setStore] = useState({
    list: [],
    pending: false,
  } as IStore);

  return (
    <StoreContext.Provider
      value={{ pending: store.pending, list: store.list, setStore }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStoreContext = () => {
  const { pending, list, setStore } = useContext(StoreContext);

  const search = async (options = { search: "*" }) => {
    try {
      setStore({
        list: [],
        pending: true,
      });

      const { list } = await API.search(options);

      setStore({
        list,
        pending: false,
      });
    } catch {
      console.error("Search error");
    }
  };

  return {
    pending,
    list,
    search,
  };
};
