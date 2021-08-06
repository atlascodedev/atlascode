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
import { polkaPattern } from '@atlascode/react-core';
import ProductDefense from '../../../../../components/ProductDefense';
import NewsLetter from '../../../../../components/Newsletter';
import Contact from '../../../../../components/Contact';
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
  return {
    paths: [
      {
        params: {
          area: 'medicina',
          level: 'pos-graduacao',
          slug: 'alergia',
          id: '123',
        },
      },
    ],
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
  const mockData = {};

  console.log(params);

  return {
    props: {
      courseEmec: {
        imageURL: faker.image.abstract(1500, 600),
        link: 'https://atlascode.dev',
      },
      coursePrerequisites: '',
      courseDescription:
        'A especialidade de pediatria é o ramo da medicina estuda e trata a saúde e os cuidados médicos das crianças e dos adolescentes, do nascimento até os 18 anos, atuando em aspectos curativos, preventivos e de pesquisa. O ramo pediátrico é relativamente novo, quando comparamos com a medicina de modo geral, sendo uma profissão que ganhou forma apenas em meados do século 19 e foi criada devido a maior importância dedicada as crianças e adolescentes. O médico pediatra deve estar sempre atualizado e conhecer interesses e habilidades das diferentes faixas etárias, sendo necessária sensibilidade de dedicação para a correta comunicação com o infante em atendimento.',
      courseArea: 'Medicina',
      courseLevel: 'Pós-graduação',
      courseName: 'Pediatria',
      courseDuration: '600 horas',
      id: 'teste',
      classes: [
        { duration: '25', label: faker.company.bs() },
        { duration: '25', label: faker.company.bs() },
        { duration: '25', label: faker.company.bs() },
        { duration: '25', label: faker.company.bs() },
        { duration: '25', label: faker.company.bs() },
        { duration: '25', label: faker.company.bs() },
        { duration: '25', label: faker.company.bs() },
        { duration: '25', label: faker.company.bs() },
        { duration: '25', label: faker.company.bs() },
        { duration: '25', label: faker.company.bs() },
        { duration: '25', label: faker.company.bs() },
        { duration: '25', label: faker.company.bs() },
        { duration: '25', label: faker.company.bs() },
        { duration: '25', label: faker.company.bs() },
        { duration: '25', label: faker.company.bs() },
        { duration: '25', label: faker.company.bs() },
        { duration: '25', label: faker.company.bs() },
        { duration: '25', label: faker.company.bs() },
        { duration: '25', label: faker.company.bs() },
        { duration: '25', label: faker.company.bs() },
        { duration: '25', label: faker.company.bs() },
        { duration: '25', label: faker.company.bs() },
        { duration: '25', label: faker.company.bs() },
      ],
      slug: 'teste',
      courseImage: {
        alt: 'Lorem ipsum',
        url: faker.image.business(1000, 600),
      },
    },
  };
};
