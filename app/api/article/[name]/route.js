import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

function readMarkdownFile() {
  const filePath = './public/articles/alakazam/markdown.txt'

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file from disk: ${err}`);
    } else {
      console.log(`File contents: ${data}`);
    }
  });
}

export async function GET(request, { params }) {
  try {
    // Retrieve image id from query string
    const name = params.name;

    readMarkdownFile();

    return NextResponse.json({ success: true, name: params.name}, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message}, { status: 500 });
  }
}

//export const dynamic = "force-static";
//export const dynamic = 'force-dynamic';


// // Get article
// export async function GET(request) {
//   try {

//     // Retrieve params
//     const {searchParams} = new URL(request.url);

//     // if name is present, return article with name
//     const name = searchParams.get("name");
//     if (name) {
//       // Return article with _id
//       const article = await Article.find({ _id, hidden: false });
//       const previous = await Article.find({ createdAt: { $lt: article.createdAt }, hidden: false }).sort({ createdAt: -1 }).limit(1);
//       if (!article) {
//         return NextResponse.json({ success: false, message: 'Article not found.' }, { status: 404 });
//       }
//       return NextResponse.json({ success: true, article, previous: previous[0] }, { status: 200 });
//     }
    
//     // if last is present, return last article
//     const last = searchParams.get("last");
//     if (last) {
//       // Return n last article
//       const lastArticles = await Article.find({ hidden: false }).sort({ createdAt: -1 }).limit(parseInt(last));
//       if (!lastArticles) {
//         return NextResponse.json({ success: false, message: 'Article not found.' }, { status: 404 });
//       }
//       return NextResponse.json({ success: true, articles: lastArticles }, { status: 200 });
//     }
    
//     // Return all articles
//     const articles = await Article.find({ hidden: false }).sort({ createdAt: -1});
//     return NextResponse.json({ success: true, articles }, { status: 200 });



//   } catch (error) {
//     console.log('error', error)
//     return NextResponse.json({ success: false, message: 'Error getting the article.' }, { status: 500 });
//   }
// }