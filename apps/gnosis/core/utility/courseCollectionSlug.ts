import { CourseCollectionType } from '../types';
import convertToSlug from './converToSlug';

const createCourseCollectionWithSlug = (
  courses: CourseCollectionType[]
): Array<CourseCollectionType & { slug: string }> => {
  const outArray: Array<CourseCollectionType & { slug: string }> = courses.map(
    (value, index) => {
      return {
        ...value,
        slug: `cursos/${convertToSlug(value.courseLevel)}/${convertToSlug(
          value.courseArea
        )}/${convertToSlug(value.courseName)}/${value.uuid}`,
      };
    }
  );

  return outArray;
};

export default createCourseCollectionWithSlug;
