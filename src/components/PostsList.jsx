import { useState } from 'react';
import Modal from './Modal';
import NewPost from './NewPost';
import Post from './Post';
import classes from './PostsList.module.css';

function PostsList({ isPosting, onStopPosting }) {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} />
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
