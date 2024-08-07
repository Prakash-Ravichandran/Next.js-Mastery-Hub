import Link from "next/link";


export default function BlogPostPage() {
    return (
        <>
           <h2>This is a blog post</h2>
           <div>
              <Link href="/blog/post-1"> Blog Post - 1</Link>
           </div>
           <div>
              <Link href="/blog/post-2"> Blog Post - 2</Link>
           </div>
        </>
    );
}