import {
  useContext,
  createContext,
  useEffect,
  useState,
  useMemo,
  ReactNode,
} from "react";

const SWRegContext = createContext<SWRegValueCont | null>(null);

interface SWRegProviderProps {
  children: ReactNode;
}

interface SWRegValueCont {
  SWReg: ServiceWorkerRegistration | null;
}

const SWRegProvider = ({ children }: SWRegProviderProps) => {
  const [SWReg, setSWReg] = useState<ServiceWorkerRegistration | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator)
      navigator.serviceWorker.ready.then(
        (reg: ServiceWorkerRegistration | null) => {
          setSWReg(reg);
        }
      );
  }, []);

  const contextValue = useMemo(() => ({ SWReg }), [SWReg]);
  return (
    <SWRegContext.Provider value={contextValue}>
      {children}
    </SWRegContext.Provider>
  );
};

export const useSWReg = () => {
  return useContext(SWRegContext);
};

export default SWRegProvider;
