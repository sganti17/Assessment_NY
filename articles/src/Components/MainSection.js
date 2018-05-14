import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import classnames from 'classnames'
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

class MainSection extends React.Component {
  state = { expanded: false }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    const { classes, selectedArticle } = this.props

    return (
      <div>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {selectedArticle.title.split('')[0]}
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={selectedArticle.title}
          subheader={selectedArticle.createdAt}
        />
        <CardMedia className={classes.media} title="Contemplative Reptile" />
            <Image src ={selectedArticle.image_url}/>
        <CardMedia />
        <CardContent>
          <Typography component="p">{`caption: ${selectedArticle.caption}`}</Typography>
          <Typography component="p">{`Author:${selectedArticle.author}`}</Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton aria-label="Comment">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M17 3c0-.55-.45-1-1-1H2c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h11.5l3.5 3V3zm-4 8H5V9h8v2zm0-3H5V6h8v2z"/></svg>								
          </IconButton>
        </CardActions>

        <CardContent>
          <Typography paragraph variant="body2">
          </Typography>
          <Typography paragraph>
          </Typography>
          <Typography paragraph>{selectedArticle.body}</Typography>
        </CardContent>
      </div>
    )
  }
}

MainSection.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MainSection)
