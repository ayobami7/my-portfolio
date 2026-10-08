import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { getAllPosts } from '@/lib/blog'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PostMeta from '@/components/PostMeta'
import { Brackets, SectionHeader } from '@/components/ui/hud'

export const metadata = {
  title: 'Technical Writing | Ayobami Paul Adeyemo',
  description: 'Thoughts on software engineering, system design, and building scalable applications.',
}

export default function WritingPage() {
  const posts = getAllPosts()

  return (
    <main className="relative min-h-screen bg-ink text-fg">
      <div className="hud-grid pointer-events-none fixed inset-0" aria-hidden />
      <Navbar />

      <div className="relative mx-auto max-w-4xl px-4 pt-28 pb-20 sm:px-6">
        <SectionHeader
          index="SECTION > WRITING"
          title="Technical Writing"
          count={posts.length}
          subtitle="Thoughts on software engineering, architecture decisions, and lessons learned building systems."
        />

        {posts.length === 0 ? (
          <div className="border border-dashed border-line p-10 text-center text-sm text-faint">
            &gt; No posts yet. Check back soon!
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/writing/${post.slug}`}
                className="group relative block border border-line bg-panel/80 p-4 transition-colors hover:border-line-strong sm:p-6"
              >
                <Brackets className="opacity-0 transition-opacity group-hover:opacity-100" />
                <p className="mb-2 text-[11px] text-faint">
                  Log Entry: <span className="text-fg">{String(posts.length - i).padStart(3, '0')}</span>
                </p>
                <h2 className="mb-3 text-lg leading-snug text-fg transition-colors group-hover:text-signal sm:text-xl">
                  {post.metadata.title}
                </h2>
                <p className="mb-4 font-sans text-sm leading-relaxed text-dim">{post.metadata.description}</p>
                <PostMeta metadata={post.metadata} />
                <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-wide text-dim group-hover:text-fg">
                  Read entry <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        )}

        <Link href="/" className="mt-12 inline-flex items-center gap-2 text-xs uppercase tracking-wide text-dim hover:text-fg">
          <ArrowLeft className="h-3.5 w-3.5" />
          BACK_TO_HOME
        </Link>
      </div>

      <Footer />
    </main>
  )
}
