import Markdown from '@/components/Markdown'
import { loadArticle } from '@/libs/article'

export default async function ArticlePage ({ params }) {

  const article = await loadArticle(params.id)

  return (
    <Markdown>{article.markdown}</Markdown>
  )
}