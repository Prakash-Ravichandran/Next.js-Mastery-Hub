import Link from "next/link";

// all pages will defaultly receive params props, where we can access the various dynamic route params.
export default function BlogPostPage({params}) {
    return (
        <>
           <h2>This is a blog post - route param - {params.slug}</h2>
           <div>
              <Link href="/blog/post-1"> Blog Post - 1 </Link>
           </div>
           <div>
              <Link href="/blog/post-2"> Blog Post - 2 </Link>
           </div>
        </>
    );
}