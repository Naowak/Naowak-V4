import Image from 'next/image'
import fs from 'fs';
import path from 'path';
import Markdown from '@/components/Markdown';

async function loadArticles() {
  const articlesDir = './public/articles';
  const articleDirs = await fs.promises.readdir(articlesDir);

  const articles = await Promise.all(articleDirs.map(async (dir) => {
    const markdownPath = path.join(articlesDir, dir, 'markdown.txt');
    const previewPath = path.join(articlesDir, dir, 'preview.png');

    const markdown = await fs.promises.readFile(markdownPath, 'utf8');
    const preview = `/${path.relative('./public', previewPath)}`;

    return { markdown, preview };
  }));

  return articles;
}

async function readMarkdownFile() {
  const filePath = './public/articles/alakazam/markdown.txt'
  try {
    const data = await fs.promises.readFile(filePath, 'utf8');
    return data;
  } catch (err) {
    console.error(`Error reading file from disk: ${err}`);
  }
}

export default async function Home() {

  // const content = await readMarkdownFile()
  const articles = await loadArticles();

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <Markdown>{content}</Markdown>
    // </main>
    <main className="flex flex-col items-center justify-between p-8">
      <div className="flex flex-col gap-8">
        {articles.map((article, index) => (
          <div key={index} className="flex flex-row p-4 gap-8">
            <img src={article.preview} alt="Article preview" width={500} height={300} className='rounded-xl'/>
            <Markdown>{article.markdown.slice(0, 400)}</Markdown>
          </div>
        ))}
      </div>
    </main>
  )
}
