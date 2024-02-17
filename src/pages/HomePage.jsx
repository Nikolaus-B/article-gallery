import { UserList } from 'components/UserList/UserList';
import { UserForm } from '../components/UserForm/UserForm';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { resetArticles } from '../redux/acrticles/articlesSlice';
import { Searchbar } from 'components/Searchbar/Searchbar';

export default function HomePage() {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState();

  useEffect(() => {
    dispatch(resetArticles());
  }, [dispatch]);

  const changeFilter = str => {
    setFilter(str);
  };
  return (
    <div style={{ display: 'flex', gap: '30px' }}>
      <UserForm />
      <div>
        <Searchbar changeFilter={changeFilter} />
        <UserList filter={filter} />
      </div>
    </div>
  );
}
