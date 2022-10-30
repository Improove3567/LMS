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
    width: '100%',
    margin: '20px auto',
  },
  wrapper: {
    width: '80%',
    margin: '40px auto',
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export default useStyles;
