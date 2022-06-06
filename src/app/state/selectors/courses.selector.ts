import { createSelector } from '@ngrx/store';
import { CourseState } from 'src/app/models/course.state';
import { AppState } from '../app.state';

export const courseSelector = (state: AppState) => state.courses;

export const loadingCoursesSelector = createSelector(
  courseSelector,
  (state: CourseState) => state.loading
);

export const coursesListSelector = createSelector(
  courseSelector,
  (state: CourseState) => state.courses
);
