import ReactMarkdown from 'react-markdown'
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi'

export default function Markdown ({ children }) {

  const components = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5, // Signature bottom right
    img: Media,
    li: Line,
    p: Paragraph,
    a: Anchor,
    blockquote: Quote,
    code: Code,
  }

  return (
    <ReactMarkdown
      components={components}
      className='flex flex-col gap-4 w-full text-base'
    >
      {children}
    </ReactMarkdown>
  )
}

function H1 (props) {
  return (
    <h1 className="text-3xl font-bold mb-1" {...props} />
  )
}

function H2 (props) {
  return (
    <h1 className="text-2xl font-bold mb-1" {...props} />
  )
}

function H3 (props) {
  return (
    <h1 className="text-xl font-bold mb-1" {...props} />
  )
}

function H4 (props) {
  return (
    <h1 className="text-lg font-bold mb-1" {...props} />
  )
}

function H5 (props) {
  return (
    <h1 className="text-lg font-bold text-right mt-4" {...props} />
  )
}

function Media (props) {

  // Youtube Video
  if (props.src.includes('youtube') || props.src.includes('youtu.be')) {
    const id = props.src.split('v=')[1]
    const link = `https://www.youtube.com/embed/${id}`
    return (
      <span className="flex flex-col items-center p-4 xl:p-8 gap-4 my-4 text-md text-gray-400">
        <iframe 
          className='aspect-video w-full'
          src={link} 
          frameborder="0"
          allow 
          allowFullScreen
        />
        {props.alt}
      </span>
    )
  }

  // Image & Video
  return (
    <span className="flex flex-col items-center p-4 xl:p-8 gap-4 my-4 text-md text-gray-400">
      <img {...props} />
      {props.alt}
    </span>
  )
}

function Line (props) {
  if (!props.ordered) {
    return <span className="mb-1 text-primary">• {props.children}<br/></span>
  }
  return (
    <span className='flex flex-row gap-2 pl-4 items-start'>
      <h1 className="text-primary font-semibold">{`${props.index+1}.`}</h1>
      <h1 className="text-primary -mt-2">{props.children}</h1>
    </span>
  )
}


function Paragraph (props) {
  return (
    <p className="w-full mb-1 text-md text-start" {...props} />
  )
}

function Anchor (props) {
  return (
    <a className="text-red-800 underline underline-offset-2" {...props} />
  )
}

function Quote (props) {
  return (
    <div className='bg-gray-200 rounded-md p-4 xl:p-8'>
      <BiSolidQuoteAltLeft color='gray' className='ml-1'/>
        <h1 className="pl-2 italic text-gray-800" {...props} />
      <BiSolidQuoteAltRight color='gray' className='ml-1'/>
    </div>
  )
}

function Code (props) {
  if (props.inline) {
    return (
      <span className='bg-gray-100 font-code rounded break-all p-1 rounded'>
        {props.children}
      </span>
    )
  }
  return (
    <div className='bg-gray-100 font-code overflow-x-scroll p-4 pb-0 rounded text-start'>
      {props.children[0].split('\n').map((line, i) => (
        <span key={i} className='break-all'>{line}<br/></span>
      ))}
    </div>
  )
}
