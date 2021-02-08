import React from 'react'

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { navStyles } from './navitem.styles';


export default function NavItem({ active, text, onClick }) {

    const styles = navStyles({active});

    return (
      <ListItem
      onClick={ onClick }
      className={styles.list} button>
        <ListItemIcon></ListItemIcon>
        <ListItemText className={styles.text} primary={text} />
      </ListItem>
    )
}
