import ArticleCard from './ArticleCard'
import React from 'react'

import { withStyles } from 'material-ui/styles'

class Articles extends React.Component {
  handleClick = articleId => {
    this.props.handleClickArt(articleId)
  }
  render() {
    const { articles } = this.props
    return (
      <div>
        {articles.map(article => {
          return (
            <ArticleCard
              article={article}
              key={article.title}
              handleClickArticle={this.handleClick}
            />
          )
        })}
      </div>
    )
  }
}
const styles = {
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}

export default withStyles(styles)(Articles)
