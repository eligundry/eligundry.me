import React from 'react'
import { Link } from 'gatsby'

import Time from '../Shared/Time'
import EmojiText from '../Shared/EmojiText'
import './listing.css'

interface Props {
  postEdges: GatsbyTypes.BlogListingQuery['allMdx']['edges']
  pathPrefix: string
}

const PostListing: React.FC<Props> = ({ postEdges, pathPrefix }) => {
  const postList = postEdges
    .map(postEdge => ({
      path: postEdge?.node?.fields?.slug,
      cover: postEdge?.node?.frontmatter?.cover?.publicURL,
      title: postEdge?.node?.frontmatter?.title,
      date: postEdge?.node?.fields?.date,
      excerpt: postEdge.node.excerpt,
      timeToRead: postEdge.node.timeToRead,
      description: postEdge?.node?.frontmatter?.description,
      dateModified: postEdge?.node?.fields?.latestCommitDate,
    }))
    .filter(post => !!post.title)

  return (
    <main>
      {postList.map(post => (
        <article
          key={post.path}
          itemScope
          itemType="https://schema.org/BlogPosting"
          className="listing-post"
        >
          <link itemProp="author publisher" href="#eli-gundry" />
          <meta itemProp="image" content={post.cover} />
          <meta itemProp="dateModified" content={post.dateModified} />
          <h1 itemProp="name headline">
            <Link to={`/${pathPrefix}/${post.path}`} itemProp="url">
              {post.title}
            </Link>
          </h1>
          {post.date && (
            <Time dateTime={new Date(post.date)} itemProp="datePublished" />
          )}
          {post.description && (
            <p itemProp="description" className="description">
              <EmojiText label="description of the blog post" emoji="📝">
                {post.description}
              </EmojiText>
            </p>
          )}
        </article>
      ))}
    </main>
  )
}

export default PostListing
