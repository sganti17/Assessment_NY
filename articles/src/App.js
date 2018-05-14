import React, { Component } from 'react'

import { withStyles } from 'material-ui/styles'
import Header from './Components/Header'
import { data } from './data'
import Articles from './Components/Articles'
import ArticleCard from './Components/ArticleCard'
import MainSection from './Components/MainSection'
//higher order components

class App extends Component {
  state = {
    articles: [],
    selectedArticle: {},
  }

  componentWillMount = () => {
    //

    // axios.get('/getArticles', (req, res) => {
    //   let data = res.data
    // })

    const first4 = data.slice(0, 4)
    this.setState({ articles: first4, selectedArticle: data[4] })
  }
  handleClickArt = articleId => {
    const { articles, selectedArticle } = this.state

    const articleRemoved = articles.filter(function(el) {
      return el.id === articleId
    })[0]

    let newArticles = articles.filter(function(el) {
      return el.id !== articleId
    })

    newArticles = [...newArticles, selectedArticle]

    this.setState({
      articles: newArticles,
      selectedArticle: articleRemoved,
    })
  }

  handleClick = () => {}
  render() {
    const { classes } = this.props
    const { articles, selectedArticle } = this.state
    return (
      <div>
        <Header className={classes.header} />
        <div className={classes.root}>
          <div className={classes.articles}>
            <Articles
              articles={articles}
              handleClickArt={this.handleClickArt}
            />
          </div>
          <div className={classes.mainSection}>
            <MainSection selectedArticle={selectedArticle} />
          </div>
          
        </div>
      </div>
    )
  }
}

const styles = {
  header: {},
  root: {
    border: '1px solid black',
    display: 'flex',
  },
  articles: {
    flex: 1,
    border: '1px solid black',
  },
  mainSection: {
    flex: 2,
    border: '1px solid black',
  },
}
export default withStyles(styles)(App)
