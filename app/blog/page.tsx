import Link from "next/link";
type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};
export default async function BlogPage() {
  //const response = await fetch("https://jsonplaceholder.typicode.com/posts"); //request only ek baar jayegi bas
  //   const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //     cache: "no-store", //cache mat kro har request pe data new fetch hoga
  //   });
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 }, //har 60secs baad new request bhejo
  });

  const posts: Post[] = await response.json();
  return (
    <div>
      <h1>Blog Page</h1>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link href={`/blog/${post.id}`}>
              <button>Click for More Info</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
