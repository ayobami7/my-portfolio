import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import 'highlight.js/styles/github-dark.css'
import { getPostBySlug, getPostSlugs } from '@/lib/blog'
import { mdxComponents } from '@/mdx-components'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PostMeta from '@/components/PostMeta'

type Params = { slug: string };

export const dynamicParams = false;

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata(props: { params: Promise<Params> }) {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.metadata.title} | Ayobami Paul Adeyemo`,
    description: post.metadata.description,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      type: 'article',
      publishedTime: post.metadata.date,
      authors: [post.metadata.author],
      tags: post.metadata.tags,
    },
  }
}

export default async function BlogPostPage(props: { params: Promise<Params> }) {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound()
  }

  return (
    <main className="relative min-h-screen bg-ink text-fg">
      <div className="hud-grid pointer-events-none fixed inset-0" aria-hidden />
      <Navbar />

      <article className="relative mx-auto max-w-3xl px-4 pt-28 pb-20 sm:px-6">
        <Link href="/writing" className="mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-wide text-dim hover:text-fg">
          <ArrowLeft className="h-3.5 w-3.5" />
          BACK_TO_WRITING
        </Link>

        <header className="mb-10 border-b border-line pb-8">
          <div className="mb-3 flex items-center gap-2 text-[11px] uppercase tracking-widest text-faint">
            <span className="h-1.5 w-1.5 bg-signal" />
            <span>Log Entry</span>
          </div>
          <h1 className="mb-4 text-2xl leading-tight text-fg sm:text-3xl md:text-4xl">
            {post.metadata.title}
          </h1>
          <p className="mb-6 font-sans text-base leading-relaxed text-dim sm:text-lg">
            {post.metadata.description}
          </p>
          <PostMeta metadata={post.metadata} />
        </header>

        <div className="min-w-0">
          <MDXRemote
            source={post.content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeSlug, rehypeHighlight],
              },
            }}
          />
        </div>

        <footer className="mt-12 flex flex-col gap-4 border-t border-line pt-8 text-xs uppercase tracking-wide sm:flex-row sm:items-center sm:justify-between">
          <Link href="/writing" className="inline-flex items-center gap-2 text-dim hover:text-fg">
            <ArrowLeft className="h-3.5 w-3.5" />
            More Posts
          </Link>
          <Link href="/" className="text-dim hover:text-fg">
            Back to Home
          </Link>
        </footer>
      </article>

      <Footer />
    </main>
  )
}
