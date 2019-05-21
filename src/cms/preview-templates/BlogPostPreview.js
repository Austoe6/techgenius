import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import kebabCase from 'lodash/kebabCase'

import Layout from '../../components/containers/Layout'
import Container from '../../components/widgets/Container'
import { media } from '../../components/styles/utils'

const BlogPostPreview = ({ entry, widgetFor }) => {
  let title = entry.getIn(['data', 'title'])
  let tags = entry.getIn(['data', 'tags'])
  let date = entry.getIn(['data', 'date'])
  let html = widgetFor('body')

  return (
    <Layout>
      <Container maxWidth={720}>
        <h1>{title}</h1>
        <ArticleDetails>
          <span>
            {tags.map(t => (
              <a key={t} href={`/tags/${kebabCase(t)}`}>
                {t}
              </a>
            ))}
          </span>
          <span>{date} . * min read</span>
        </ArticleDetails>
      </Container>
      <Container maxWidth={720}>
        <ArticleWrapper dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </Layout>
  )
}

const ArticleDetails = styled.div`
  font-weight: 500;
  z-index: 100;
  position: relative;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.textDark};

  span {
    text-transform: uppercase;
    margin-right: 1rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textLight};

    ${media.tablet`
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 1rem;
        font-size: 12px;

        &:nth-child(1) {
          margin-bottom: 1rem;

          a {
            background: #cecece;
            display: block;
            margin-bottom: 0.5rem;
            padding: 0.5rem;
            color: ${({ theme }) => theme.colors.blue};
            font-weight: 400;
          }
        }
    `}
  }

  a {
    margin-right: 0.5rem;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textLight};

    &:hover {
      color: ${({ theme }) => theme.colors.blue};
      text-decoration: underline;
    }
  }

  a:before {
    content: '#';
  }
`
const ArticleWrapper = styled.article`
  padding: 2rem 0;
  position: relative;
  font-size: 1.2rem;
  line-height: 1.5;

  ${media.phone`
    font-size: 1rem;
  `}
`

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview
