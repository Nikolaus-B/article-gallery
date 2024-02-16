import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectArticles,
  selectArticlesToLoad,
  selectFilter,
  selectPage,
  selectTotal,
} from '../../redux/acrticles/ariclesSelectors';
import { fetchArticles } from '../../redux/acrticles/operations';
import { ArticleItem } from 'components/ArticleItem/ArticleItem';
import { List } from './ArticleList.styled';
import { morePage } from '../../redux/acrticles/articlesSlice';
import { uid } from 'uid';

export const ArticleList = () => {
  const dispatch = useDispatch();
  const articles = useSelector(selectArticles);
  const page = useSelector(selectPage);
  const articlesToLoad = useSelector(selectArticlesToLoad);
  const total = useSelector(selectTotal);
  const filter = useSelector(selectFilter);

  const articlesToLoadHandler = () => {
    return total - page * 10 < 10 ? total % 10 : 10;
  };

  useEffect(() => {
    dispatch(fetchArticles({ page, articlesToLoad }));
  }, [dispatch, page, articlesToLoad]);

  const filterArticles = () => {
    return articles.filter(article => {
      if (article.source.name === null || article.description === null) {
        return article;
      }
      const articleName = article.source?.name.toLowerCase();
      const articleDescription = article?.description.toLowerCase();

      return (
        articleName.includes(filter.toLowerCase()) ||
        articleDescription.includes(filter)
      );
    });
  };

  const filteredArticles = filterArticles();

  return (
    <>
      <List>
        {filteredArticles.map(item => {
          return <ArticleItem key={uid()} article={item} />;
        })}
      </List>
      <button
        disabled={articlesToLoad < 10}
        onClick={() => {
          dispatch(morePage(articlesToLoadHandler()));
        }}
      >
        More Articles({articlesToLoad < 10 ? 0 : articlesToLoadHandler()})
      </button>
    </>
  );
};
