import { makeStyles, Theme, createStyles, alpha } from '@material-ui/core';
import { deepOrange } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(1),
    },

    appBar: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },

    toolbar: {
      display: 'flex',
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
    },

    title: {
      display: 'none',
      color: '#fff',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
      fontFamily: 'ABeeZee',
      fontWeight: 400,
    },

    search: {
      position: 'relative',
      borderRadius: 1,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      border: '1px solid black',
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
        cursor: 'pointer',
        border: '1px solid #fff',
      },
      
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(2, 2, 2, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        '&:focus': {
          width: '100ch',
          cursor: 'pointer',
        },
      },
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.25),
        cursor: 'pointer',
      },
    },
    square: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
    },
  })
);
