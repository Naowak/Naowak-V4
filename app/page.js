import ArticlePreview from '@/components/ArticlePreview';
import { loadPreviews } from '@/libs/article';


export default async function Home() {

  const articles = await loadPreviews();

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