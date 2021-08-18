import { Box, Container } from '@material-ui/core';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import {
  CoursePageInformationProps,
  CoursePageInformation,
} from '../../../../../components/CoursePage/CoursePageInformation';
import {
  CoursePageTabsProps,
  CoursePageTabs,
} from '../../../../../components/CoursePage/CoursePageTabs';

import faker from 'faker';
import { polkaPattern } from '@atlascode/core';
import ProductDefense from '../../../../../components/ProductDefense';
import NewsLetter from '../../../../../components/Newsletter';
import Contact from '../../../../../components/Contact';
import { CourseCollectionType } from '../../../../../types';
import axios, { AxiosResponse } from 'axios';
import convertToSlug from '../../../../../utility/converToSlug';
export interface CourseClass {
  duration: number | string;
  label: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CoursePageProps
  extends CoursePageInformationProps,
    Omit<CoursePageTabsProps, 'activeTab' | 'setActiveTab'> {}

const CoursePage = ({
  classes,
  courseArea,
  courseDuration,
  courseEmec,
  courseImage,
  courseLevel,
  courseName,
  coursePrerequisites,
  courseDescription,
}: CoursePageProps) => {
  const [activeTab, setActiveTab] = React.useState<number>(0);

  return (
    <Box
      sx={{
        width: '100%',
        pt: { xs: '15rem', lg: '20rem' },
        bgcolor: '#F6F9FB',
      }}
    >
      <Container maxWidth="lg">
        <CoursePageInformation
          courseArea={courseArea}
          courseDescription={courseDescription}
          courseDuration={courseDuration}
          courseLevel={courseLevel}
          courseName={courseName}
          courseImage={courseImage}
        />
      </Container>

      <Box
        sx={{
          width: '100%',
          height: 'auto',
          position: 'relative',
          py: '5rem',
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            ...(polkaPattern('#fff', 0.4, 50, 'grey') as Record<
              string,
              unknown
            >),
            width: '100%',
            height: '100%',
            position: 'absolute',
            zIndex: -1,
          }}
        />

        <Container
          sx={{ py: '5rem', px: { xs: '0rem', lg: 'initial' } }}
          maxWidth="lg"
        >
          <CoursePageTabs
            classes={classes}
            courseEmec={courseEmec}
            coursePrerequisites={coursePrerequisites}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </Container>
      </Box>

      <Box sx={{ pb: '5rem' }}>
        <ProductDefense />
      </Box>
      <NewsLetter />
      <Contact />
    </Box>
  );
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
  const courseRequest: AxiosResponse<CourseCollectionType[]> = await axios.get(
    'https://us-central1-gnosis-webapp.cloudfunctions.net/api/collections/entries/coursesNew'
  );

  const courseData = courseRequest.data;

  return {
    paths: courseData.map((value, index) => {
      return {
        params: {
          area: convertToSlug(value.courseArea),
          level: convertToSlug(value.courseLevel),
          slug: convertToSlug(value.courseName),
          id: value.uuid,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<CoursePageProps> = async ({
  defaultLocale,
  locale,
  locales,
  params,
  preview,
  previewData,
}) => {
  const paramsData = params;

  console.log(paramsData);

  return {
    props: {} as any,
  };
};
