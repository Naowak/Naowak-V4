import Markdown from '@/components/Markdown'
import { loadArticle, loadPreviews } from '@/libs/article'

export default async function ArticlePage ({ params }) {

  const article = await loadArticle(params.id)

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <Markdown>{article.markdown}</Markdown>
  );
}

// This function can statically allow nextjs to find all the posts that you
// have made, and statically generate them
export async function generateStaticParams() {
  const articles = await loadPreviews()
  return articles.map(a => ({
    id: a.id,
    title: a.title,
  }))
}
 
// Set the title of the page to be the post title, note that we no longer use
// e.g. next/head in app dir, and this can be async just like the server
// component
export async function generateMetadata({ params: { id } }) {
  const article = await loadArticle(id)
  return { title: "Naowak -> " + article.title.split(' : ')[0] }
}