import ArticlePreview from '@/components/ArticlePreview';
import { loadArticles } from '@/libs/article';


export default async function Home() {

  const articles = await loadArticles();

  return (
    <main className="flex flex-col items-center justify-between p-8">
      <div className="flex flex-col gap-8">
        {articles.map((article, index) => (
          <ArticlePreview article={article} key={index} />
        ))}
      </div>
    </main>
  )
}