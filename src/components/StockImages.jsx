import List from "./List";
import { useFirestoreContext } from '../context/FirestoreContext';
import { useAuthContext } from '../context/AuthContext';
import { useMemo } from 'react';


const StockImages = () => {
  const { state } = useFirestoreContext();
  const {currentUser} = useAuthContext();

  
  const items = useMemo(() => {
    const username = currentUser?.displayName.split(' ').join('');
    const filtered = state.items.filter((item) => item.user === username);
    return currentUser ? filtered : [];
  }, [currentUser, state.items])

  return (
    <>
      <h1>My stock images</h1>
      <List items={[]} />
    </>
  );
};

export default StockImages;
