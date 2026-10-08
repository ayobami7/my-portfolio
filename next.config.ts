import type { NextConfig } from "next";
import createMDX from '@next/mdx'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkGfm from 'remark-gfm'

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  // Bundle next-mdx-remote with Next's own React; loading it as an external
  // package pulls in a second React copy and crashes post pages in `next dev`
  transpilePackages: ['next-mdx-remote'],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
})


export default withMDX(nextConfig);