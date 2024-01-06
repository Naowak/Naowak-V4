import Image from 'next/image'
import Markdown from '@/components/Markdown';
import { loadArticles } from '@/libs/article';

export default async function Home() {

  const articles = await loadArticles();

  return (
    <main className="flex flex-col items-center justify-between p-8">
      <div className="flex flex-col gap-8">
        {articles.map((article, index) => (
          <div key={index} className="flex flex-row p-4 gap-8">
            <div className="w-3/5 h-60 overflow-hidden rounded-xl shadow-md">
              <img 
                src={article.preview} 
                alt="Article preview" 
                className='w-full h-full object-cover object-center'
              />
            </div>
            <div className='w-full'>
              <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
              <p className="text-sm text-gray-500">{article.date}</p>
              <Markdown>{article.markdown}</Markdown>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}