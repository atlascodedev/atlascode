import {
  blogPreviewCardMockData,
  GnosisLoader,
  offerCardFullMock,
  testimonialCardRoundedMock,
  useScrollbarContext,
} from '@atlascode/react-core';
import BlogPreview from '../components/BlogPreview';
import Courses from '../components/Courses';
import HeroScreen from '../components/HeroScreen';
import Newsletter from '../components/Newsletter';
import ProductDefense from '../components/ProductDefense';
import Testimonials from '../components/Testimonials';

const mockExt = offerCardFullMock(20);
const mockMulti = offerCardFullMock(15);
const mockPos = offerCardFullMock(50);

const mockTestimonials = testimonialCardRoundedMock(20, 'primary');
const mockBlogPreview = blogPreviewCardMockData(20);

export function Index() {
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
    </div>
  );
}

export default Index;
