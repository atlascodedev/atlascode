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
  const posts: { slug: string; id: string }[] = [{ id: 'one', slug: 'two' }];

  return {
    paths: posts.map((value, index) => {
      return {
        params: {
          slug: value.slug,
          id: value.id,
        },
      };
    }),
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
      date: new Date().toDateString(),
      featuredImage: 'https://imgurl.com/hello',
      latestPosts: [],
      socials: {},
      tags: [],
    },
  };
};
