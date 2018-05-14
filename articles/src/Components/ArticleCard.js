import { withStyles } from 'material-ui/styles'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import Card, {
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
} from 'material-ui/Card'
import Collapse from 'material-ui/transitions/Collapse'
import Avatar from 'material-ui/Avatar'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import red from 'material-ui/colors/red'
import FavoriteIcon from 'material-ui-icons/Favorite'
import ShareIcon from 'material-ui-icons/Share'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import MoreVertIcon from 'material-ui-icons/MoreVert'
import Image from 'material-ui-image'

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: 10, // 16:9
  },
  actions: {
    display: 'flex',
  },
  avatar: {
    backgroundColor: red[500],
  },
})

class ArticleCard extends React.Component {
  state = { expanded: false }

  handleClick = articleId => {
    this.props.handleClickArticle(articleId)
  }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    const { classes, article } = this.props

    return (
      <div onClick={() => this.handleClick(article.id)}>
        <CardHeader
          avatar={
            <Avatar
              className={classes.avatar}
              articleId={article.id}
            >
              {article.title.split('')[0]}
            </Avatar>
          }
          title={article.title}
          subheader={article.createdAt}
        />
        <CardMedia className={classes.media} title="Contemplative Reptile" />
            <Image src ={article.image_url}/>
        <CardMedia />
        <CardContent>
          <Typography component="p">{article.caption}</Typography>
          <Typography component="p">{`Author: ${article.author}`}</Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </div>
    )
  }
}

ArticleCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ArticleCard)
