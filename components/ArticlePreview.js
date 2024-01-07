import Markdown from '@/components/Markdown';


export default function ArticlePreview({ article }) {

  return (
    <div className="flex flex-row p-4 gap-8">
      <div className="w-3/5 h-60 overflow-hidden rounded-xl shadow-md">
        <img 
          src={article.preview} 
          alt="Article preview" 
          className='w-full h-full object-cover object-center'
        />
      </div>
      <div className='w-full'>
        <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
        <p className="text-sm text-gray-500">{article.date}</p>
        <Markdown>{article.markdown}</Markdown>
      </div>
    </div>
  )
}