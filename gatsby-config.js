module.exports = {
  siteMetadata: {
    title: `Increase Your Impact with Justin Su'a`,
    description: `The Increase Your Impact Podcast with Justin Su'a is for leaders -- that means you! Each episode is aimed to provide you with insights, principles and strategies to help you lead yourself so that you can lead others at work, home, and in life.`,
    author: `A Podcast For Leaders`,
    twitter: `https://twitter.com/Justinsua?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor`,
    instagram: `https://www.instagram.com/justinsua/`,
    facebook: ``,
    youtube: ``,
    apple: `https://podcasts.apple.com/podcast/id1058589696?ct=podlink&mt=2`,
    google: `https://podcasts.google.com/?feed=aHR0cDovL2luY3JlYXNleW91cmltcGFjdC5saWJzeW4uY29tL3Jzcw==`,
    pocket: `https://pca.st/itunes/1058589696`,
    spotify: `https://open.spotify.com/show/0yqTTN0aAzgEnB4ryiYVxI`,
    overcast: `https://overcast.fm/itunes1058589696`,
    castbox: `https://castbox.fm/vic/1058589696`,
    castro: `https://castro.fm/itunes/1058589696`,
    podbean: ``,
    beaker: `https://www.breaker.audio/shows?feed_url=http%3A%2F%2Fincreaseyourimpact.libsyn.com%2Frss`,
    stitcher: ``
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `https://pbcdn1.podbean.com/imglogo/image-logo/2144795/26850174_531238480575311_1377019303222901017_o_1_.png`, // This path is relative to the root of the site.
        icon: `src/images/logo.png` // This path is relative to the root of the site.
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        // url: `https://www.gatsbyjs.org/blog/rss.xml`,
        // url: `https://boysinthecave.com/feed/podcast/`,
        // url: `http://boysinthecave.libsyn.com/rss`,
        url: `http://increaseyourimpact.libsyn.com/rss`,
        name: `GatsbyBlog`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
        parserOption: {
          customFields: {
            channel: ["title", "image"]
            // item: ["itunes:summary"],
            // item: ["itunes:image", "img"],
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`tailwindcss`)]
      }
    }
  ]
};
