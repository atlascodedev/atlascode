import { BlogLayoutV1, BlogLayoutV1Props } from '@atlascode/react-core';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BlogPageProps extends BlogLayoutV1Props {}

const BlogPage = (props: BlogPageProps) => {
  return <BlogLayoutV1 {...props} />;
};

export default BlogPage;

type BlogStaticPaths = GetStaticPaths<{ slug: string; id: string }>;

export const getStaticPaths: BlogStaticPaths = async ({
  defaultLocale,
  locales,
}) => {
  return {
    paths: [{ params: { id: '123', slug: 'blog-test' } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPageProps> = async ({
  defaultLocale,
  locale,
  locales,
  params,
  preview,
  previewData,
}) => {
  console.log(defaultLocale, locale, locales, params, preview, previewData);

  return {
    props: {
      title: 'Baby',
      readingTime: true,
      content: 'hello',
      date: new Date(),
      featuredImage: 'https://imgurl.com/hello',
      latestPosts: [],
      socials: {},
      tags: [],
    },
  };
};
