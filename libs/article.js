import fs from 'fs';
import path from 'path';
import { compareDate } from '@/libs/date';

const previewArticle = (article) => {    

  /* Find first part */
  const splited = article.split('\n')
  const specialChars = ['#', '!']

  let flag_begin = false
  let flag_stop = false
  const lines = splited.reduce((lines, l) => {
    if (!flag_begin && !specialChars.includes(l[0]) && l !== '') {
      // begin of the text
      flag_begin = true
    }
    if (flag_begin && !flag_stop && l === '') {
      // empty line and already begin : end of the text
      flag_stop = true
      return lines
    }
    if (flag_begin && !flag_stop && specialChars.includes(l[0])) {
      // special char and already begin : end of the text
      flag_stop = true
      return lines
    }
    if (flag_begin && !flag_stop) {
      // text continue 
      return [...lines, l]
    }
    return lines
  }, [])

  const text = lines.join('\n').split(' ')
  if (text.length > 100) return text.slice(0, 50).join(' ') + '...'
  return text.join(' ')
}

export async function loadArticles() {
  const articlesDir = './public/articles';
  const articleDirs = await fs.promises.readdir(articlesDir);

  let articles = await Promise.all(articleDirs.map(async (dir) => {
    const markdownPath = path.join(articlesDir, dir, 'markdown.txt');
    const previewPath = path.join(articlesDir, dir, 'preview.png');
    const configPath = path.join(articlesDir, dir, 'config.json');

    const markdown = await fs.promises.readFile(markdownPath, 'utf8');
    const preview = `/${path.relative('./public', previewPath)}`;
    const config = JSON.parse(await fs.promises.readFile(configPath, 'utf8'));

    return { markdown: previewArticle(markdown), preview, title: config.title, date: config.date };
  }));

  articles = articles.sort((a, b) => compareDate(a.date, b.date));
  return articles;
}