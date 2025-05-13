import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default function NewsDetailPage({ params }) {
  const newsSlug = params.slug;
  const individualNewsItem = DUMMY_NEWS.find((news) => news.slug === newsSlug);

  if (!individualNewsItem) {
    notFound();
  }

  return (
    <>
      <article className="news-article">
        <header>
          <img
            src={`/images/news/${individualNewsItem.image}`}
            alt={individualNewsItem.title}
          />
          <span>{individualNewsItem.title}</span>
          <time dateTime={individualNewsItem.date}>
            {individualNewsItem.date}
          </time>
        </header>
        <p>{individualNewsItem.content}</p>
      </article>
    </>
  );
}
