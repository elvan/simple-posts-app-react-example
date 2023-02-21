import { useState } from 'react';
import Modal from './Modal';
import NewPost from './NewPost';
import Post from './Post';
import classes from './PostsList.module.css';

function PostsList() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      {modalIsVisible && (
        <Modal onClose={hideModalHandler}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post
          author='Aaron'
          body='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore quam dolorem recusandae distinctio qui voluptatem expedita quo cumque, nisi nesciunt veniam illo aliquam quaerat odit maxime similique obcaecati inventore amet.'
        />
        <Post
          author='Billy'
          body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repellat unde corrupti aut ipsa ut ipsum perspiciatis ea cumque voluptas sapiente neque dicta asperiores, mollitia atque sit in architecto corporis.'
        />
        <Post
          author='Cindy'
          body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate vel repudiandae officiis consequatur delectus consectetur praesentium autem ullam asperiores ipsum fuga dolor error aspernatur labore eveniet, veritatis atque quae at.'
        />
      </ul>
    </>
  );
}

export default PostsList;
