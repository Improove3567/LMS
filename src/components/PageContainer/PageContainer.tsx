import React from 'react';
import { Button, Typography, Grid } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTranslation } from 'react-i18next';
import useStyles from './PageContainer.styles';

interface PageContainerProps {
  children: React.ReactNode | string;
  name: string;
  puth: string;
  btnText?: string;
  isGoBack?: boolean;
  isDetail?: boolean;
  isDetailId?: number | string;
}

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  name,
  puth,
  btnText,
  isGoBack = false,
  isDetail,
  isDetailId,
}) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const detailNavigate = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    navigate(`/createStudent?id=${isDetailId}`);
  };
  return (
    <div className={classes.container}>
      {isGoBack && (
        <Button onClick={() => navigate(-1)} size="medium">
          <ArrowBackIcon />
          Go back
        </Button>
      )}
      <div className={classes.wrapper}>
        <Typography variant="h5">{name}</Typography>
        <Grid>
          {isDetail && (
            <Button
              onClick={detailNavigate}
              sx={{ marginRight: '10px' }}
              variant="contained"
              size="large"
            >
              {t('Groups.change')}
            </Button>
          )}
          <Link to={puth} style={{ textDecoration: 'none' }}>
            {btnText && (
              <Button variant="contained" size="large">
                {btnText}
              </Button>
            )}
          </Link>
        </Grid>
      </div>
      <div className={classes.content_wrapper}>{children}</div>
    </div>
  );
};

export default PageContainer;
