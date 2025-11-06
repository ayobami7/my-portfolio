import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import { Calendar, Clock } from 'lucide-react'

export const metadata = {
  title: 'Technical Writing | Ayobami Paul Adeyemo',
  description: 'Thoughts on software engineering, system design, and building scalable applications.',
}

export default function WritingPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen bg-black text-text-primary">
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-12">
          <div className="text-xs text-cyan-700 mb-2">SECTION &gt; WRITING</div>
          <h1 className="text-4xl font-bold text-cyan-400 mb-4">
            TECHNICAL_WRITING
          </h1>
          <div className="h-1 w-20 bg-cyan-500 mb-4"></div>
          <p className="text-cyan-300 text-lg">
            Thoughts on software engineering, architecture decisions, and lessons learned building systems.
          </p>
        </div>

        {/* Posts List */}
        {posts.length === 0 ? (
          <div className="border border-cyan-800 p-8 text-center">
            <p className="text-cyan-400">No posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/writing/${post.slug}`}
                className="block border border-cyan-900 p-6 hover:border-cyan-500 transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h2 className="text-2xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    {post.metadata.title}
                  </h2>
                </div>

                <p className="text-cyan-100 mb-4 leading-relaxed">
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
                        className="px-2 py-1 border border-cyan-800 text-xs text-cyan-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>
        )}

        {/* Back Link */}
        <div className="mt-12">
          <Link
            href="/"
            className="text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-2"
          >
            <span>&lt;</span>
            <span>BACK_TO_HOME</span>
          </Link>
        </div>
      </div>
    </main>
  )
}