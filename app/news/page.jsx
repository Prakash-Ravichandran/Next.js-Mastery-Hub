import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";

export default function NewsPage({ params }) {
  const { id } = params;
  return (
    <>
      <h2>This is a News Detail Page - {id}</h2>
      <ul className="news-list">
        {DUMMY_NEWS.map((newsItem) => (
          <li key={newsItem.id}>
            <Link href={`/news/${newsItem.slug}`}>
              <img
                src={`/images/news/${newsItem.image}`}
                alt={newsItem.title}
              />
              <span>{newsItem.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
