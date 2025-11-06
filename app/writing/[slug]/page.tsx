import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import { getPostBySlug, getPostSlugs } from '@/lib/blog'
import { MDXRemote } from 'next-mdx-remote/rsc'
// import rehypeHighlight from 'rehype-highlight'
// import rehypeSlug from 'rehype-slug'
// import remarkGfm from 'remark-gfm'
import 'highlight.js/styles/github-dark.css'

export async function generateStaticParams() {
  const slugs = getPostSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

// export async function generateMetadata({ params }: { params: { slug: string } }) {
//   const post = getPostBySlug(params.slug)
type Params = { slug: string };

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

//   const options = {
//     mdxOptions: {
//       remarkPlugins: [remarkGfm],
//       rehypePlugins: [rehypeHighlight, rehypeSlug],
//     },
//   }

  return (
    <main className="min-h-screen bg-black text-text-primary">
      <article className="max-w-4xl mx-auto px-6 py-20">
        {/* Back Button */}
        <Link
          href="/writing"
          className="text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-2 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK_TO_WRITING</span>
        </Link>

        {/* Header */}
        <header className="mb-8 pb-8 border-b border-cyan-800">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
            {post.metadata.title}
          </h1>
          
          <p className="text-xl text-cyan-200 mb-6">
            {post.metadata.description}
          </p>

          <div className="flex items-center gap-6 text-sm text-cyan-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.metadata.date}>
                {new Date(post.metadata.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.metadata.readingTime}</span>
            </div>
          </div>

          {post.metadata.tags && post.metadata.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.metadata.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 border border-cyan-800 text-sm text-cyan-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Content */}
        <div className="prose prose-invert prose-cyan max-w-none">
          {/* <MDXRemote source={post.content} /> */}
          <article>{post.content}</article>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-cyan-800">
          <div className="flex items-center justify-between">
            <Link
              href="/writing"
              className="text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>More Posts</span>
            </Link>
            
            <Link
              href="/"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </footer>
      </article>
    </main>
  )
}