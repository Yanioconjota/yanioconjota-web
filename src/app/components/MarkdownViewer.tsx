'use client'

import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function MarkdownViewer() {
  const [markdown, setMarkdown] = useState('Cargando...')
  //const urlLocal = '/content/about.md'
  const urlRemote = 'https://raw.githubusercontent.com/Yanioconjota/yanioconjota/main/README.md'

  useEffect(() => {
    fetch(urlRemote)
      .then(res => res.text())
      .then(setMarkdown)
  }, [])

  return (
    <div className="prose dark:prose-invert max-w-3xl mx-auto p-6 col-12">
      <ReactMarkdown
        components={{
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          code({ inline, className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                style={oneDark}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          }
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  )
}
