import { makeStyles, Theme, createStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    coverImage: {
      width: '100%',
      height: '200%',
      objectFit: 'cover',
      borderRadius: 2,
      padding: '8px',
    },
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 40,
      padding: '0 30px',
      textTransform: 'capitalize',
    },
    header: {
      fontWeight: 'bold',
      fontSize: '50px',
    },
  })
);
