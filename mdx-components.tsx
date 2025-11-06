import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
import Link from 'next/link'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold text-cyan-400 mt-8 mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold text-cyan-400 mt-8 mb-4 border-b border-cyan-800 pb-2">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold text-cyan-300 mt-6 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-bold text-cyan-300 mt-4 mb-2">
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="text-cyan-100 leading-relaxed mb-4">
        {children}
      </p>
    ),
    a: ({ href, children }) => (
      <Link 
        href={href as string} 
        className="text-cyan-400 hover:text-cyan-300 underline transition-colors"
      >
        {children}
      </Link>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside text-cyan-100 mb-4 space-y-2 ml-4">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside text-cyan-100 mb-4 space-y-2 ml-4">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-cyan-100">
        {children}
      </li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-cyan-500 pl-4 italic text-cyan-300 my-4 bg-cyan-900/10 py-2">
        {children}
      </blockquote>
    ),
    code: ({ children, className }) => {
      const isInline = !className
      if (isInline) {
        return (
          <code className="bg-cyan-900/30 text-cyan-300 px-2 py-1 rounded text-sm font-mono">
            {children}
          </code>
        )
      }
      return (
        <code className={className}>
          {children}
        </code>
      )
    },
    pre: ({ children }) => (
      <pre className="bg-gray-900 border border-cyan-800 rounded-lg p-4 overflow-x-auto mb-4 text-sm">
        {children}
      </pre>
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border border-cyan-800">
          {children}
        </table>
      </div>
    ),
    th: ({ children }) => (
      <th className="bg-cyan-900/30 text-cyan-300 px-4 py-2 text-left border border-cyan-800">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="text-cyan-100 px-4 py-2 border border-cyan-800">
        {children}
      </td>
    ),
    Image: (props: ImageProps) => (
      <Image 
        {...props} 
        className="rounded-lg border border-cyan-800 my-4"
      />
    ),
    ...components,
  }
}