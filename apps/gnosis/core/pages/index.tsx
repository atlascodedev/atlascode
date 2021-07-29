import {
  blogPreviewCardMockData,
  GnosisLoader,
  LatestBlogPosts,
  offerCardFullMock,
  testimonialCardRoundedMock,
  TestimonialSlider,
  useScrollbarContext,
} from '@atlascode/react-core';
import Courses from '../components/Courses';
import HeroScreen from '../components/HeroScreen';
import Newsletter from '../components/Newsletter';
import ProductDefense from '../components/ProductDefense';

const mockExt = offerCardFullMock(20);
const mockMulti = offerCardFullMock(15);
const mockPos = offerCardFullMock(50);

const mockTestimonials = testimonialCardRoundedMock(20, 'primary');
const mockBlogPreview = blogPreviewCardMockData(20);

export function Index() {
  const { disableScroll, enableScroll } = useScrollbarContext();

  return (
    <div>
      <GnosisLoader
        onAnimationStart={disableScroll}
        onAnimationEnd={enableScroll}
      />
      <HeroScreen />
      <ProductDefense />
      <Courses
        coursesExt={mockExt}
        coursesMulti={mockMulti}
        coursesPos={mockPos}
      />
      <Newsletter />
      <LatestBlogPosts items={mockBlogPreview} />
      <TestimonialSlider items={mockTestimonials} />
    </div>
  );
}

export default Index;
