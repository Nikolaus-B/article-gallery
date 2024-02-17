import * as Yup from 'yup';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserArticles } from '../../redux/userArticle/userArticleSelectors';
import { addArticle } from '../../redux/userArticle/userArticleSlice';
import { uid } from 'uid';
import {
  FormButton,
  FormContainer,
  FormErrorMessage,
  FormField,
  Label,
} from './UserForm.styled';

const ArticleSchema = Yup.object().shape({
  imageUrl: Yup.string(),
  author: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  description: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const UserForm = () => {
  const dispatch = useDispatch();
  const userArticles = useSelector(selectUserArticles);
  return (
    <Formik
      initialValues={{
        imageUrl: '',
        author: '',
        description: '',
        title: '',
      }}
      validationSchema={ArticleSchema}
      onSubmit={(values, actions) => {
        actions.resetForm();
        if (
          userArticles.some(
            article =>
              article.title.toLowerCase() === values.title.toLowerCase()
          )
        ) {
          return;
        }
        dispatch(addArticle({ ...values, id: uid() }));
      }}
    >
      <FormContainer>
        <Label>
          Image Url
          <FormField name="imageUrl" />
          <FormErrorMessage component={'span'} name="imageUrl" />
        </Label>
        <Label>
          Author
          <FormField name="author" placeholder="Jane" />
          <FormErrorMessage component={'span'} name="author" />
        </Label>

        <Label>
          Description
          <FormField name="description" placeholder="lorem" />
          <FormErrorMessage component={'span'} name="description" />
        </Label>

        <Label>
          Title
          <FormField name="title" placeholder="lorem" />
          <FormErrorMessage component={'span'} name="title" />
        </Label>

        <FormButton type="submit">Add article</FormButton>
      </FormContainer>
    </Formik>
  );
};
