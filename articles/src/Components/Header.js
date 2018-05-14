import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

const Header = props => {
  const { classes } = props
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            {'Blogging!!!!'}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
const styles = {
  root: {
    flexGrow: 1,
  },
}
export default withStyles(styles)(Header)
