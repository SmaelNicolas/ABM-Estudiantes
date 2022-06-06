import { ActionReducerMap } from '@ngrx/store';
import { CourseState } from '../models/course.state';
import { courseReducer } from './reducers/courses.reducer';

export interface AppState {
  courses: CourseState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  courses: courseReducer,
};
