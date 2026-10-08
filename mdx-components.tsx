import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
import Link from 'next/link'

export const mdxComponents: MDXComponents = {
  h1: (props) => <h1 {...props} className="mt-10 mb-4 scroll-mt-20 text-3xl text-fg sm:text-4xl" />,
  h2: (props) => (
    <h2 {...props} className="mt-12 mb-4 scroll-mt-20 border-b border-line pb-2 text-xl text-fg before:mr-2 before:text-signal before:content-['#'] sm:text-2xl" />
  ),
  h3: (props) => <h3 {...props} className="mt-8 mb-3 scroll-mt-20 text-lg text-fg sm:text-xl" />,
  h4: (props) => <h4 {...props} className="mt-6 mb-2 scroll-mt-20 text-base text-fg" />,
  p: (props) => <p {...props} className="mb-5 font-sans text-[15px] leading-7 text-dim sm:text-base" />,
  a: ({ href = '', children, ...props }) =>
    href.startsWith('/') || href.startsWith('#') ? (
      <Link href={href} className="text-signal underline underline-offset-4 hover:text-fg">
        {children}
      </Link>
    ) : (
      <a {...props} href={href} target="_blank" rel="noopener noreferrer" className="text-signal underline underline-offset-4 hover:text-fg">
        {children}
      </a>
    ),
  strong: (props) => <strong {...props} className="font-semibold text-fg" />,
  em: (props) => <em {...props} className="text-fg" />,
  hr: () => <hr className="my-10 border-line" />,
  ul: (props) => <ul {...props} className="mb-5 ml-5 list-[square] space-y-2 font-sans text-[15px] text-dim marker:text-signal sm:text-base" />,
  ol: (props) => <ol {...props} className="mb-5 ml-5 list-decimal space-y-2 font-sans text-[15px] text-dim marker:text-faint sm:text-base" />,
  li: (props) => <li {...props} className="pl-1 leading-7 [&>p]:mb-2" />,
  blockquote: (props) => (
    <blockquote {...props} className="my-6 border-l-2 border-signal bg-panel px-4 py-3 text-dim [&>p]:mb-0" />
  ),
  // Inline code is styled here; code inside <pre> is reset by the pre styles below
  code: ({ className, ...props }) => (
    <code {...props} className={`${className ?? ''} border border-line bg-panel-raised px-1.5 py-0.5 font-mono text-[0.85em] text-fg`} />
  ),
  pre: (props) => (
    <pre
      {...props}
      className="mb-6 overflow-x-auto border border-line bg-panel p-4 text-xs leading-relaxed sm:text-sm [&>code]:border-0 [&>code]:bg-transparent [&>code]:p-0 [&>code]:text-[1em]"
    />
  ),
  table: (props) => (
    <div className="mb-6 overflow-x-auto border border-line">
      <table {...props} className="w-full border-collapse text-left text-sm" />
    </div>
  ),
  th: (props) => <th {...props} className="border-b border-line bg-panel-raised px-4 py-2 font-normal text-fg" />,
  td: (props) => <td {...props} className="border-b border-line px-4 py-2 text-dim" />,
  img: ({ alt, ...props }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img {...props} alt={alt ?? ''} className="my-6 h-auto max-w-full border border-line" />
  ),
  Image: (props: ImageProps) => (
    <Image {...props} className="my-6 h-auto max-w-full border border-line" />
  ),
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { ...mdxComponents, ...components }
}
