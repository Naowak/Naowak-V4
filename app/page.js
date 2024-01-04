import Image from 'next/image'
import fs from 'fs';
import path from 'path';
import Markdown from '@/components/Markdown';

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

  const content = await readMarkdownFile()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Markdown>{content}</Markdown>
    </main>
  )
}
