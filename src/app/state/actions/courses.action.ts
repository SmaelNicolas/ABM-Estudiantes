import { createAction, props } from '@ngrx/store';
import { Course } from 'src/app/models/course';

export const loadingCourses = createAction('Cargando Cursos');

export const loadedCourses = createAction(
  'Cursos Cargados',
  props<{ courses: Course[] }>()
);
