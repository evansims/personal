const siteMetadata = {
  title: 'Evan Sims',
  author: 'Evan Sims',
  headerTitle: 'Evan Sims',
  description: 'Thoughts on software development, technology, and life.',
  language: 'en-us',
  theme: 'dark',
  siteUrl: 'https://evansims.com',
  siteRepo: 'https://github.com/evansims/personal',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'hello@evansims.com',
  github: 'https://github.com/evansims',
  twitter: 'https://twitter.com/evansims',
  mastodon: 'https://social.evansims.com/@hello',
  facebook: 'https://facebook.com/evansims',
  youtube: 'https://youtube.com/evansims',
  linkedin: 'https://www.linkedin.com/in/evansims',
  locale: 'en-US',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
    posthogAnalyticsId: '', // posthog.init e.g. phc_5yXvArzvRdqtZIsHkEm3Fkkhm3d0bEYUXCaFISzqPSQ
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: 'evansims/personal',
      repositoryId: 'R_kgDOIo4qZw',
      category: 'Blog Discussions',
      categoryId: 'DIC_kwDOIo4qZ84CTI9e',
      mapping: 'pathname',
      reactions: '1',
      metadata: '1',
      theme: 'dark_dimmed',
      inputPosition: 'top',
      lang: 'en',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
  },
}

module.exports = siteMetadata
