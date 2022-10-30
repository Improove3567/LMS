import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    height: '100%',
  },
  btn: {
    width: '100px',
    height: '30px',
  },
  btnText: {
    fontSize: '10px',
  },
  content_wrapper: {
    paddingRight: '70px',
    paddingLeft: '70px',
    marginTop: '20px',
    '@media (max-width: 1200px)': {
      paddingRight: '40px',
      paddingLeft: '40px',
    },
    '@media (max-width: 768px)': {
      paddingRight: '20px',
      paddingLeft: '20px',
    },
    '@media (max-width: 375px)': {
      paddingRight: '10px',
      paddingLeft: '10px',
    },
  },
  wrapper: {
    paddingRight: '70px',
    paddingLeft: '70px',
    marginTop: '40px',
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 1200px)': {
      paddingRight: '40px',
      paddingLeft: '40px',
    },
    '@media (max-width: 768px)': {
      paddingRight: '20px',
      paddingLeft: '20px',
    },
    '@media (max-width: 375px)': {
      paddingRight: '10px',
      paddingLeft: '10px',
    },
  },
}));

export default useStyles;
