import React from 'react';
import LoginPage from '../pages/loginpage/Loginpage';
import CreateGroupPage from '../pages/ADMIN/group/CreateGroupPage';
import CreateMentor from '../pages/ADMIN/mentor/CreateMentorPage';
import GroupsPage from '../pages/ADMIN/group/GroupsPage';
import AdminMentorsPage from '../pages/ADMIN/mentor/MentorsPageAdmin';
import GroupPageAdmin from '../pages/ADMIN/group/GroupDetailPage';
import AllStudentssupPageAdmin from '../pages/ADMIN/student/AllStudentsPageAdmin';
import GroupsPageMentor from '../pages/MENTOR/groupsPageMentor/GroupsPageMentor';
import HomeWorks from '../pages/MENTOR/homeWorksMentor/HomeWorksMentor';
import StudyPlanMentor from '../pages/MENTOR/studyPlanMentor/StudyPlanMentor';
import CreateStudentPage from '../pages/ADMIN/student/CreateStudentPage';
import ComingSoon from '../pages/ComingSoon';
import DirectionPage from '../pages/ADMIN/direction/DirectionPage';
import CreateDurationPage from '../pages/ADMIN/direction/CreateDurationPage';
import HomeWorksAdmin from '../pages/ADMIN/home-works/HomeWorks';
import DirectionDetailPage from '../pages/ADMIN/direction/DirectionDetailPage';
import MentorDataPage from '../pages/ADMIN/mentor/MentorDataPage';
import EditMentor from '../pages/ADMIN/mentor/EditMentor';
import StudentInfoPage from '../pages/ADMIN/studentInfo/StudentInfoPage';
import Dashboard from '../pages/STUDENT/Dashboard/Dashboard';
import Study from '../pages/STUDENT/Study/Study';

export interface RouteType {
  title: string;
  path: string;
  Component: React.FC;
}

export const adminRoutes: RouteType[] = [
  {
    title: 'Main Page',
    path: '/',
    Component: GroupsPage,
  },
  {
    title: 'Create Mentor Page',
    path: '/createMentor',
    Component: CreateMentor,
  },
  {
    title: 'Create Group',
    path: '/createGroup',
    Component: CreateGroupPage,
  },
  {
    title: 'Create Group',
    path: '/createStudent',
    Component: CreateStudentPage,
  },
  {
    title: 'Mentors',
    path: '/mentors',
    Component: AdminMentorsPage,
  },
  {
    title: 'Group',
    path: '/group/:id',
    Component: GroupPageAdmin,
  },
  {
    title: 'All Students Page',
    path: '/students',
    Component: AllStudentssupPageAdmin,
  },
  {
    title: 'Student detail page',
    path: '/student/:id',
    Component: StudentInfoPage,
  },
  {
    title: 'Direction page',
    path: '/direction',
    Component: DirectionPage,
  },
  {
    title: 'Create Duration page',
    path: '/direction/create',
    Component: CreateDurationPage,
  },
  {
    title: 'Detail Direction',
    path: '/direction/:id',
    Component: DirectionDetailPage,
  },
  {
    title: 'Home Works page',
    path: '/home-works',
    Component: HomeWorksAdmin,
  },
  {
    title: 'Mentor Data Page',
    path: '/mentor/:id',
    Component: MentorDataPage,
  },
  {
    title: 'Edit Mentor data Page',
    path: 'editMentor/:id',
    Component: EditMentor,
  },
  {
    title: 'Change student page',
    path: '/changeStudent',
    Component: ComingSoon,
  },
];

export const mentorRoutes: RouteType[] = [
  {
    title: 'Student Book Page',
    path: '/',
    Component: GroupsPageMentor,
  },
  {
    title: 'Home works Page',
    path: '/home-works',
    Component: HomeWorks,
  },
  {
    title: 'Study plan Page',
    path: '/study-plan',
    Component: StudyPlanMentor,
  },
  {
    title: 'Student Book Detail Page',
    path: '/studentbook/:id',
    Component: ComingSoon,
  },
];

export const studentRoutes: RouteType[] = [
  {
    title: 'Home Page | Dashboard',
    path: '/',
    Component: Dashboard,
  },
  {
    title: 'Study',
    path: '/study',
    Component: Study,
  },
  {
    title: 'Study Plan Page',
    path: '/study-plan',
    Component: ComingSoon,
  },
  {
    title: 'Home Works Page',
    path: '/home-work/:id',
    Component: ComingSoon,
  },
  {
    title: 'Lesson detail page',
    path: '/lesson/:id',
    Component: ComingSoon,
  },
];

export const notAuthRoutes: RouteType[] = [
  {
    title: 'Login Page',
    path: '/',
    Component: LoginPage,
  },
];
