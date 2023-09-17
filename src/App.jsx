import { useMemo, useContext, useEffect } from "react";
import { Context } from "./context/FirestoreContext";
import { useAuthContext } from "./context/AuthContext";
import "./App.css";
import List from './components/List';

function App() {
  const { state, read } = useContext(Context);
  const { authenticate } = useAuthContext();

  useEffect(() => {
    read();
    authenticate();
  }, []);

  const count = useMemo(() => {
    return `you have ${state.items.length} image${
      state.items.length > 1 ? "s" : ""
    }`;
  }, [state.items]);

  return (
    <>
      <h1 className="text-center">Gallery</h1>
      {count}
      <List items={state.items} />
    </>
  );
}

export default App;
