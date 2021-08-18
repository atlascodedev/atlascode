import { useScrollbarContext } from '@atlascode/core';
import axios, { AxiosResponse } from 'axios';
import { GetStaticProps } from 'next';
import BlogPreview from '../components/BlogPreview';
import Contact from '../components/Contact';
import Courses from '../components/Courses';
import HeroScreen from '../components/HeroScreen';
import GnosisLoader from '../components/Loader';
import Newsletter from '../components/Newsletter';
import ProductDefense from '../components/ProductDefense';
import Testimonials from '../components/Testimonials';
import {
  BlogCollectionType,
  CourseCollectionType,
  TestimonialCollectionType,
} from '../types';
import React from 'react';
import createCourseCollectionWithSlug from '../utility/courseCollectionSlug';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';

const mockExt = [];
const mockMulti = [];
const mockPos = [];
const mockTestimonials = [];
const mockBlogPreview = [];

export interface IndexPageProps {
  courses: CourseCollectionType[];
}

export function Index({ courses }: IndexPageProps) {
  const { disableScroll, enableScroll, scrollIntoView } = useScrollbarContext();

  const coursesWithSlugMemo = React.useMemo(
    () => createCourseCollectionWithSlug(courses),
    [courses]
  );

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
          coursesPos={coursesWithSlugMemo.map((value, index) => {
            return {
              img: value.courseImage.imageURL,
              redirectLink: value.slug,
              items: [
                { icon: FaGraduationCap, text: value.courseArea },
                { icon: FaSchool, text: value.courseLevel },
              ],
              title: value.courseName,
              zoomEffect: true,
            };
          })}
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
  const courseRequest: AxiosResponse<CourseCollectionType[]> = await axios.get(
    'https://us-central1-gnosis-webapp.cloudfunctions.net/api/collections/entries/coursesNew'
  );
  const blogRequest: AxiosResponse<BlogCollectionType[]> = await axios.get(
    'https://us-central1-gnosis-webapp.cloudfunctions.net/api/collections/entries/blog'
  );
  const testimonialRequest: AxiosResponse<TestimonialCollectionType[]> =
    await axios.get(
      'https://us-central1-gnosis-webapp.cloudfunctions.net/api/collections/entries/testimonials'
    );

  const courseData = courseRequest.data;
  const blogData = blogRequest.data;
  const testimonialData = testimonialRequest.data;

  return {
    props: {
      courses: courseData,
    },
  };
};
