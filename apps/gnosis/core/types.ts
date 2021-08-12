export interface CourseCollectionType {
  courseArea: string;
  courseDescription: string;
  courseDuration: string;
  courseEmecPicture: {
    imageDescription: string;
    imageURL: string;
  };
  courseEmecURL: string;
  courseImage: {
    imageDescription: string;
    imageURL: string;
  };
  courseLevel: string;
  courseName: string;
  uuid: string;
  courseSyllabus: string[];
}
