import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import {
  BookmarkIcon,
  BoxIcon,
  HashtagIcon,
  MessageIcon,
  PhotoIcon,
  SearchIcon,
  SmartphoneIcon,
} from '@iconicicons/react'

const LayoutWrapper = ({ children }) => {
  return (
    <div>
      <div className="pointer-events-none -top-32 left-64 z-0 z-0 hidden h-64 w-80 rounded-full bg-neutral-800/50 blur-3xl md:fixed md:block">
        <a href="#content" className="sr-only">
          Skip to Content
        </a>
      </div>

      <div className="relative z-20 hidden md:fixed md:inset-y-0 md:block md:flex md:w-80 md:flex-col md:border-r md:border-neutral-800 lg:w-96">
        <div className="flex min-h-0 flex-1 flex-col p-10 py-8">
          <aside className="flex-shrink-0 leading-relaxed text-neutral-500">
            <p className="mb-4">
              <Link
                href="/about"
                className="text-neutral-200 underline decoration-neutral-500 underline-offset-4 hover:text-white"
              >
                Evan Sims
              </Link>{' '}
              is a software engineer from Champaign-Urbana, Illinois area who's passionate about
              crafting great software and helping others do the same.
            </p>

            <p>
              He's currently a Senior Engineer on the Developer Experience team at{' '}
              <Link
                href="https://okta.com"
                className="text-neutral-200 decoration-neutral-500 underline-offset-4 hover:text-white hover:underline"
              >
                Okta &#x2197;
              </Link>{' '}
              leading development on PHP SDKs.
            </p>
          </aside>

          <div className="flex grow overflow-y-auto pt-6">
            <h2 className="sr-only">Navigation</h2>
            <nav className="leading-loose">
              <ul>
                <li>
                  <Link
                    href="/blog"
                    className="text-neutral-200 decoration-neutral-500 underline-offset-4 hover:text-white hover:underline"
                  >
                    <BookmarkIcon className="mr-1 inline-block" /> Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tags/photos"
                    className="text-neutral-200 decoration-neutral-500 underline-offset-4 hover:text-white hover:underline"
                  >
                    <PhotoIcon className="mr-1 inline-block" /> Photos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tags/speaking"
                    className="text-neutral-200 decoration-neutral-500 underline-offset-4 hover:text-white hover:underline"
                  >
                    <MessageIcon className="mr-1 inline-block" /> Speaking
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tags/podcast"
                    className="text-neutral-200 decoration-neutral-500 underline-offset-4 hover:text-white hover:underline"
                  >
                    <SmartphoneIcon className="mr-1 inline-block" /> Podcast
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-neutral-200 decoration-neutral-500 underline-offset-4 hover:text-white hover:underline"
                  >
                    <BoxIcon className="mr-1 inline-block" /> Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-neutral-200 decoration-neutral-500 underline-offset-4 hover:text-white hover:underline"
                  >
                    <HashtagIcon className="mr-1 inline-block" /> About
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <footer className="flex-shrink-0">
            <nav className="leading-loose">
              <h2 className="text-neutral-500">Elsewhere</h2>
              <ul>
                <li>
                  <Link
                    href="https://social.evansims.com/@hello"
                    rel="me"
                    className="text-neutral-200 decoration-neutral-500 underline-offset-4 hover:text-white hover:underline"
                  >
                    Mastodon
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/evansims"
                    rel="me"
                    className="text-neutral-200 decoration-neutral-500 underline-offset-4 hover:text-white hover:underline"
                  >
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://instagram.com/evansims"
                    rel="me"
                    className="text-neutral-200 decoration-neutral-500 underline-offset-4 hover:text-white hover:underline"
                  >
                    Instagram
                  </Link>
                </li>
              </ul>
            </nav>
          </footer>
        </div>
      </div>

      <main className="relative relative z-10 block md:pl-80 lg:pl-96">
        <header className="sticky top-0 z-40 flex-none border-b border-neutral-800 backdrop-blur transition-colors duration-500">
          <div className="mx-4 py-4 lg:px-8">
            <div className="relative flex items-center">
              <Link
                href="/"
                className="mr-3 block grow overflow-hidden text-neutral-500 transition-colors duration-100 hover:text-white md:w-auto"
              >
                <SearchIcon className="inline" /> Search
              </Link>

              <div className="relative ml-auto hidden items-center lg:flex">
                <nav className="text-neutral-500">
                  <ul className="flex space-x-8">
                    <li>
                      <Link
                        href="/newsletter"
                        className="transition-colors duration-100 hover:text-white"
                      >
                        Newsletter
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/feed.xml"
                        className="transition-colors duration-100 hover:text-white"
                      >
                        RSS
                      </Link>
                    </li>
                  </ul>
                </nav>

                <MobileNav />
              </div>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-7xl py-8 px-10">{children}</div>
      </main>
    </div>
  )
}

export default LayoutWrapper
