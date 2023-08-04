import Post from './Post';
import { PostPayload } from '@/types';

const Board = ({ posts }: { posts: PostPayload[] }) => {
  return (
    <div className='grid grid-cols-1 place-items-center items-start justify-center gap-x-4 gap-y-4 xl:grid-cols-2'>
      {posts.map((post, key) => (
        <Post
          key={key}
          title={post.title}
          body={post.body}
          imageURLs={post.imageURLs}
          link={post.link}
        />
      ))}
    </div>
  );
};

export default Board;
