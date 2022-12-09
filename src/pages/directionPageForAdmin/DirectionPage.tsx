import React, { useMemo } from 'react';
import PageContainer from '../../components/PageContainer/PageContainer';
import TableContainer from '../../components/TableContainer/TableContainer';
import { TableRow, TableCell } from '@mui/material';
import DirectionTable from '../../components/Tables/DirectionTable';
import { useTranslation } from 'react-i18next';

export interface Result {
  id: number;
  group: string;
  countOfStudents: number;
}

const DirectionPage: React.FC = () => {
  const { t } = useTranslation();
  const result: Result[] = [
    {
      id: 1,
      group: 'Frontend',
      countOfStudents: 25,
    },
    {
      id: 2,
      group: 'Backend',
      countOfStudents: 20,
    },
    {
      id: 3,
      group: 'Disign UI/UX',
      countOfStudents: 1,
    },
    {
      id: 4,
      group: 'Disign UI/UX',
      countOfStudents: 1,
    },
  ];

  const renderList = useMemo(
    () => result.map((item) => <DirectionTable key={item.id} {...item} />),
    [result]
  );

  return (
    <PageContainer name={t("DirectionPage.name")} puth="/direction" btnText={t("DirectionPage.addDirection")}>
      <TableContainer
        Header={
          <TableRow>
            <TableCell>{t("DirectionPage.id")}</TableCell>
            <TableCell>{t("DirectionPage.groups")}</TableCell>
            <TableCell>{t("DirectionPage.count")}</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        }
        Body={renderList}
      />
    </PageContainer>
  );
};

export default DirectionPage;
