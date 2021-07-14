import { ChangeEvent } from 'react';
import './Header.style.ts';
import { AppBar, Toolbar, Typography, InputBase } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from './Header.style';
import { useStoreActions } from '../../store/redux';

interface Props {
  onSearch?: (searchText: string) => void;
}

const Header = ({ onSearch }: Props) => {
  const classes = useStyles();
  const getNews = useStoreActions((actions) => actions.getNews);
  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    getNews({ pageSize: 10, keyword: e.target.value });
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.toolbar}>
          <Avatar
            alt="Viact News"
            src="https://media.istockphoto.com/photos/flamy-symbol-picture-id178623436?k=6&m=178623436&s=612x612&w=0&h=BRM-Wz0T7HRInaP8p2JYEUvAF4E9NxX7xb9RrejBD9U="
            // variant="square"
          ></Avatar>

          <Typography className={classes.title} variant="h3" noWrap>
            VIACT NEWS
          </Typography>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>

            <InputBase
              placeholder="Type to Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleChange}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
