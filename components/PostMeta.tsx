import { Calendar, Clock } from 'lucide-react'
import { Tag } from '@/components/ui/hud'
import type { PostMetadata } from '@/lib/blog'

export const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })

const PostMeta = ({ metadata }: { metadata: PostMetadata }) => (
  <>
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-faint">
      <div className="flex items-center gap-2">
        <Calendar className="h-3.5 w-3.5" />
        <time dateTime={metadata.date}>{formatDate(metadata.date)}</time>
      </div>
      <div className="flex items-center gap-2">
        <Clock className="h-3.5 w-3.5" />
        <span>{metadata.readingTime}</span>
      </div>
    </div>

    {metadata.tags?.length > 0 && (
      <div className="mt-4 flex flex-wrap gap-2">
        {metadata.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    )}
  </>
)

export default PostMeta
