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
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BlogCollectionType {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TestimonialCollectionType {}
