import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  container: {
    position: 'sticky',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 99,
    width: '100%',
  },
  wrapper: {
    minWidth: '180px',
    minHeight: '100vh',
    borderRight: '1px dashed rgb(205 221 237)',
    padding: '0 10px',
  },
  active_wrapper: {
    minHeight: '100vh',
    background: 'rgba(145, 158, 171, 0.16)',
  },
  content_wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card_content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '50px',
    width: '100%',
    marginTop: '10px',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'rgb(33, 43, 54)',
  },
  active_card: {
    background: 'rgba(145, 158, 171, 0.16)',
    borderRadius: '10px',
  },
  name: {
    marginLeft: '10px',
  },
  name_block: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(145, 158, 171, 0.16)',
    width: '100%',
    height: '80px',
    borderRadius: '10px',
    margin: '40px 0px',
    fontWeight: '500',
    padding: '10px',
  },
  icon_container: {
    marginRight: '10px',
    display: 'flex',
    alignItems: 'center',
  },
  icons: {
    width: '30px',
    height: '30px',
    display: 'inline-block',
    marginLeft: '15px',
  },
  modal_icons: {
    width: '30px',
    height: '30px',
  },
  avatar_container: {
    width: '20%',
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '100px',
  },
  burger_container: {
    display: 'none',
  },
  arrow_container: {
    display: 'none',
  },
  '@media (max-width: 1200px)': {
    container: {
      position: 'absolute',
      top: '0',
      width: '50%',
    },
    wrapper: {
      position: 'fixed',
      top: '0',
      left: '-100%',
      transition: '850ms',
    },
    active_wrapper: {
      position: 'fixed',
      background: '#F4F4F4',
      top: '0',
      left: '0',
      transition: '700ms',
      padding: '0 10px',
    },
    burger_container: {
      width: '60px',
      height: '60px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    arrow_container: {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    modal_icons: {
      width: '30px',
      height: '30px',
      marginTop: '15px',
    },
  },
  '@media (max-width: 585px)': {
    active_wrapper: {
      width: '40%',
    },
  },
  '@media (max-width: 470px)': {
    active_wrapper: {
      width: '60%',
    },
  },
}));

export default useStyles;
