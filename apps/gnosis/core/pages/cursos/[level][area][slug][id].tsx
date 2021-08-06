import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CoursePageProps {
  courseName: string;
  courseLevel: string;
  courseArea: string;
  slug: string;
  id: string;
}

const CoursePage = (props: CoursePageProps) => {
  return <div></div>;
};

export default CoursePage;

type CourseStaticPaths = GetStaticPaths<{
  level: string;
  area: string;
  slug: string;
  id: string;
}>;

export const getStaticPaths: CourseStaticPaths = async ({
  defaultLocale,
  locales,
}) => {
  return { paths: [], fallback: false };
};

export const getStaticProps: GetStaticProps = async ({
  defaultLocale,
  locale,
  locales,
  params,
  preview,
  previewData,
}) => {
  const mockData = {};

  return {
    props: {},
  };
};
