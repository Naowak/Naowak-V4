import Link from 'next/link';
import Markdown from '@/components/Markdown';


export default function ArticlePreview({ article }) {

  return (
    <div className="flex flex-col xl:flex-row p-4 gap-8">
      <div className="w-full xl:w-3/5 h-60 overflow-hidden rounded-xl shadow">
        <Link href={`/article/${article.id}`}>
          <img 
            src={article.preview} 
            alt="Article preview" 
            className='w-full h-full object-cover object-center'
          />
        </Link>
      </div>
      <div className='w-full'>
        <Link href={`/article/${article.id}`}>
          <h2 className="text-2xl font-semibold mb-1">{article.title}</h2>
        </Link>
        <p className="text-sm text-gray-500 mb-2">{article.date}</p>
        <Markdown>{article.markdown}</Markdown>
      </div>
    </div>
  )
}