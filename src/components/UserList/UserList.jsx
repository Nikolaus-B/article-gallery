import { useSelector } from 'react-redux';
import {
  selectPinedArticle,
  selectUserArticles,
} from '../../redux/userArticle/userArticleSelectors';

import { PinnedItem } from 'components/PinedItem/PinedItem';
import { UserArticle } from 'components/UserArticle/UserArticle';
import { UserListStyled } from './UserList.styled';

export const UserList = ({ filter }) => {
  const userArticles = useSelector(selectUserArticles);
  const pinedArticle = useSelector(selectPinedArticle);

  let filteredArticles = userArticles.filter(article => {
    const pattern = new RegExp(filter, 'i');
    return (
      (pattern.test(article.author) || pattern.test(article.description)) &&
      article.id !== pinedArticle.id
    );
  });

  return (
    <div>
      <UserListStyled>
        {pinedArticle.id && <PinnedItem pinedArticle={pinedArticle} />}
        {filteredArticles.map(el => {
          return <UserArticle key={el.id} article={el} />;
        })}
      </UserListStyled>
    </div>
  );
};
