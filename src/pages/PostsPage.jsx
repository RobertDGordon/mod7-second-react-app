import {
  Outlet,
  useParams,
  Link,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { useData } from "../hooks/useData";

export default function PostsPage() {
  return (
    <div className="Posts">
      <h1>Posts</h1>
      <Outlet />
    </div>
  );
}

export function PostList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const limit = searchParams.get('limit') ? searchParams.get('limit') : 5
  const postData = useData(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
  );

  const handleChangeLimit = (e) => {
    setSearchParams({ limit: e.target.value})
  }

  const postList = postData?.map((post) => (
    <li key={post.id}>
      <Link to={`/posts/${post.id}`}>Post {post.id}</Link>
    </li>
  ))

  return (
    <>
      <ul>{postList}</ul>
      <select value={limit}
        onChange={(e) => handleChangeLimit(e)}
      >
        <option>5</option>
        <option>10</option>
        <option>20</option>
      </select>
    </>
  )
}

export function Post() {
  const { id } = useParams();
  const post = useData(`https://jsonplaceholder.typicode.com/posts/${id}`);

  const navigate = useNavigate();

  const handleClickNext = () => {
    // identify current post and add 1
    const nextPostId = Number(id) + 1;
    navigate(`/posts/${nextPostId}`);
  };

  return (
    <div className="Post">
      {post ? (
        <>
          <h3>
            Post #{post.id}: {post.title}
          </h3>
          <p>{post.body}</p>
          <button onClick={() => navigate(-1)}>Back</button>
          <button onClick={() => handleClickNext()}>Next</button>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
