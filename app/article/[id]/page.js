import Markdown from '@/components/Markdown'
import { loadArticle } from '@/libs/article'

export default async function ArticlePage ({ params }) {

  const article = await loadArticle(params.id)

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <Markdown>{article.markdown}</Markdown>
  );
}