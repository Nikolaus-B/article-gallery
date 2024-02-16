import { ArticleList } from './ArticleList/ArticleList';
import { Container, GlobalStyle } from './GlobalStyle';
import { Searchbar } from './Searchbar/Searchbar';

export const App = () => {
  return (
    <Container>
      <Searchbar />
      <ArticleList />
      <GlobalStyle />
    </Container>
  );
};
