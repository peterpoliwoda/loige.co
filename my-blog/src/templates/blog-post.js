import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Hero from '../components/Hero'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pageContext
    const headerImage = post.frontmatter.header_img ? post.frontmatter.header_img.publicURL : undefined

    return (
      <Layout location={this.props.location}>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <Hero backgroundImage={headerImage}>
          <h1>{post.frontmatter.title}</h1>
        </Hero>
        <pre>
          {JSON.stringify(post.frontmatter, null, 2)}
        </pre>
        <p
          style={{
            display: 'block'
          }}
        >
          {post.frontmatter.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{}}
        />

        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          {previous && (
            <li>
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            </li>
          )}

          {next && (
            <li>
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            </li>
          )}
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        header_img {
          publicURL
        }
      }
    }
  }
`
