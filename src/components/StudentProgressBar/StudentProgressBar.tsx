import React from 'react';
import { useStyles } from './StudentProgressBar.style';

interface IStudentProgress {
  level: string;
  levelIcon: string;
  completedPercent: number;
}

const StudentProgressBar: React.FC<IStudentProgress> = ({
  level,
  levelIcon,
  completedPercent,
}) => {
  const styles = useStyles();

  return (
    <div className={styles.progress_card}>
      <img src={levelIcon} alt="level" />
      <div className={styles.progress_card_right}>
        <p>{level}</p>
        <p>{completedPercent}% заданий выполнено</p>
      </div>
    </div>
  );
};

export default StudentProgressBar;
