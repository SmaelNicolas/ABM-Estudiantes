import { createReducer, on } from '@ngrx/store';
import { CourseState } from 'src/app/models/course.state';
import { loadingCourses, loadedCourses } from '../actions/courses.action';

export const initialState: CourseState = {
  loading: false,
  courses: [],
};

export const courseReducer = createReducer(
  initialState,
  on(loadingCourses, (loadState) => {
    return { ...loadState, cargando: true };
  }),
  on(loadedCourses, (loadState, { courses }) => {
    return { ...loadState, cargando: false, courses };
  })
);
