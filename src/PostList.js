import Post from "./Post";
import {v4 as uuidv4} from "uuid";

export default function PostList ({posts = []}) {
    
    return (
        <div>
            {posts.map((p, i) => (
                //example below - easier than typing out every prompt like above 
                //<Post title={p.title} content={p.content} author={p.author} key={"post-" + i} />
                
                <Post {...p} key={uuidv4()} />

                // key is critical for referencing/deletion
            ))}
        </div>
    );
}
