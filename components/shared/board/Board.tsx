import Post from "./Post";
import { PostPayload } from "@/types";

const Board = ({ posts }: { posts: PostPayload[] }) => {

    return (
        <div
            className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 place-items-center items-start justify-center"
        >
            {posts.map(post => <Post title={post.title} body={post.body} imageURLs={post.imageURLs} link={post.link} />)}
        </div>
    )
}

export default Board;