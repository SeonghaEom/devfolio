module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://seonghaeom.netlify.app/`,
    // Your Name
    name: 'Seongha Eom',
    // Main Site Title
    title: `Seongha Eom | MS Student at KAIST AI`,
    // Description that goes under your name in main bio
    description: `doubleb@kaist.ac.kr`,
    // Optional: Twitter account handle
    author: `@sunghaa2`,
    // Optional: Github account URL
    github: `https://github.com/SeonghaEom`,
    // Optional: LinkedIn account URL
    linkedin: `https://drive.google.com/file/d/1F3GxFVYS2ZsVzVVhuLWIeLYas4zZp3Vs/view?usp=sharing`,
    // Content of the About Me section
    about: `I am a MS student at OSI Lab(advised by Prof. Se-young Yun) in KAIST AI. My research interests are in computer vision and transfer learning, and data imbalance. Currently, my research topic is an efficient transfer learning method in multi-label classification. I try to achieve both efficiency and performance which is challenging but interesting. I believe considering the trade-offs helps solving practical problems of applying ML/DL models in various real-world tasks.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    researches: [
      {
        name: 'Layover Intermediate Layer for Multi-Label Classification in Efficient Transfer Learning',
        description:
          'This paper achieves efficient transfer learning by utilizing intermediate representation and feature extracted from pre-trained network for multi-label classification',
        link: 'https://openreview.net/forum?id=mbOHmKLxBH',
      },
      {
        name: 'Real-time and Explainable Detection of Epidemics with Global News Data',
        description:
          'This paper achieves early detection of epidemics, including COVID-19, by processing real-time global news data into graph clusters and retreive explainable information',
        link: 'https://proceedings.mlr.press/v184/kim22a.html',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Detection and prediction model for infectious disease',
        description: 'Supported by Institute for Security Convergence Research (ISCR), Developed detection model for epidemic prevention framework , Feb 2022 – Dec 2022',
        link: 'https://github.com/sungnyun/epidemic-modeling',
      },
      {
        name: 'Server Manager (Czar) ',
        description: 'Supported for setting environments and managing resources for shared lab servers, November 2021 - August 2022',
        link: 'https://drive.google.com/file/d/15lMCB79GhSl6uUgO0bzryKwV7UOcuqBv/view?usp=sharing',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    awards: [
      {
        name: '초거대 인공지능 API 의료 분야 적용 아이디어 경진대회  ',
        description:
          'Hosted by NAVER Cloud, 6th place, Sept 2022',
      },
      {
        name: '2022 Neurips Weather4cast Challenge',
        description: 'Hosted by IARAI(Institute of advanced research in artificial intelligence, ends at Nov 2022',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
