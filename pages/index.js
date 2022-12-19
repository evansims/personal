import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 10

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div>
        <h2 className="pb-3 font-medium text-neutral-500">Recent Posts</h2>
        <ul>
          {!posts.length && 'No posts found.'}

          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter

            return (
              <li key={slug}>
                <article>
                  <div className="space-y-2 leading-6 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <div className="space-y-5 xl:col-span-3">
                      <div>
                        <h3>
                          <Link
                            href={`/blog/${slug}`}
                            className="block py-3 text-neutral-200 decoration-neutral-500 underline-offset-4 transition-colors duration-100 hover:text-white hover:underline"
                          >
                            {title}
                          </Link>
                        </h3>
                      </div>
                    </div>
                    <dl className="text-right">
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-neutral-500">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex py-3 leading-6">
          <Link
            href="/blog"
            className="block text-neutral-500 decoration-neutral-500 underline-offset-4 transition-colors duration-100 hover:text-white hover:underline"
            aria-label="all posts"
          >
            Previous Posts &rarr;
          </Link>
        </div>
      )}
      {/* {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
