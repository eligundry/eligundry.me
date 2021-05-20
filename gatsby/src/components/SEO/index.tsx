import React from 'react'
import Helmet from 'react-helmet'
import { helmetJsonLdProp } from 'react-schemaorg'
import { BlogPosting, WebSite, BreadcrumbList } from 'schema-dts'
import urljoin from 'url-join'

import config from '../../../data/SiteConfig'

interface Props {
  path: string
  title?: string
  description?: string
  post?:
    | GatsbyTypes.BlogPostBySlugQuery['markdownRemark']
    | GatsbyTypes.TalkBySlugQuery['markdownRemark']
}

const SEO: React.FC<Props> = ({
  path,
  post,
  title = '',
  description = config.siteDescription,
  children,
}) => {
  const schemaOrg: ReturnType<typeof helmetJsonLdProp>[] = []
  const url = urljoin(config.siteUrl, path)
  let image: string | undefined = undefined

  if (post) {
    if (post.frontmatter?.title) {
      title = post.frontmatter.title
    }

    if (post.frontmatter?.description) {
      description = post.frontmatter.description
    } else if (post.excerpt) {
      description = post.excerpt
    }

    if (post.frontmatter?.cover) {
      image = urljoin(config.siteUrl, post.frontmatter.cover.publicURL)
    }

    schemaOrg.push(
      helmetJsonLdProp<BlogPosting>({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        url,
        name: title,
        headline: title,
        description,
        datePublished: post.fields?.date ?? undefined,
        image: {
          '@type': 'ImageObject',
          url: image,
        },
      }),
      helmetJsonLdProp<BreadcrumbList>({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@id': url,
              name: title,
            },
          },
        ],
      })
    )
  }

  return (
    <Helmet
      script={[
        helmetJsonLdProp<WebSite>({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          url: config.siteUrl,
          name: config.siteTitle,
          alternateName: config.siteTitleAlt ?? '',
        }),
        ...schemaOrg,
      ]}
    >
      {/* General tags */}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={url} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      {post && <meta property="og:type" content="article" />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:creator"
        content={config.userTwitter ? config.userTwitter : ''}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {children}
    </Helmet>
  )
}

export default SEO