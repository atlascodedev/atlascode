import {
  blogPreviewCardMockData,
  GnosisLoader,
  offerCardFullMock,
  testimonialCardRoundedMock,
  useScrollbarContext,
} from '@atlascode/react-core';
import axios, { AxiosResponse } from 'axios';
import { GetStaticProps } from 'next';
import BlogPreview from '../components/BlogPreview';
import Contact from '../components/Contact';
import Courses from '../components/Courses';
import HeroScreen from '../components/HeroScreen';
import Newsletter from '../components/Newsletter';
import ProductDefense from '../components/ProductDefense';
import Testimonials from '../components/Testimonials';
import { CourseCollectionType } from '../types';

const mockExt = offerCardFullMock(20);
const mockMulti = offerCardFullMock(15);
const mockPos = offerCardFullMock(50);
const mockTestimonials = testimonialCardRoundedMock(20, 'primary');
const mockBlogPreview = blogPreviewCardMockData(20);

export interface IndexPageProps {
  courses: CourseCollectionType[];
}

export function Index(props: IndexPageProps) {
  const { disableScroll, enableScroll, scrollIntoView } = useScrollbarContext();

  return (
    <div>
      <GnosisLoader
        onAnimationStart={disableScroll}
        onAnimationEnd={enableScroll}
      />

      <HeroScreen
        ctaLabel="Ver cursos"
        ctaCallback={() => scrollIntoView('#courses_section')}
      />
      <ProductDefense />
      <div id="courses_section">
        <Courses
          coursesExt={mockExt}
          coursesMulti={mockMulti}
          coursesPos={mockPos}
        />
      </div>
      <Newsletter />

      <div>
        <BlogPreview items={mockBlogPreview} />
      </div>

      <div>
        <Testimonials items={mockTestimonials} />
      </div>

      <div id="contact_form">
        <Contact
          formProps={{
            title: 'Fale conosco',
          }}
          blobColor="secondary"
        />
      </div>
    </div>
  );
}

export default Index;

export const getStaticProps: GetStaticProps<IndexPageProps> = async ({
  params,
}) => {
  const allCoursesCollectionRequest = [];
  return {
    props: {
      courses: allCoursesCollectionRequest,
    },
  };
};
