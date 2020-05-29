module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: "Ivraj's Portfolio", // Navigation and Site Title
  titleAlt: 'ivraj.me', // Title for JSONLD
  description: "Ivraj's Portfolio Page.",
  headline: "Ivraj's Portfolio Page.", // Headline for schema.org JSONLD
  url: 'https://ivraj.me', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/logos/logo-1024.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  // favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'Portfolio', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Ivraj', // Author for schemaORGJSONLD
  themeColor: '#FFF',
  backgroundColor: '#000',

  googleAnalyticsID: 'UA-146418426-1',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
};
