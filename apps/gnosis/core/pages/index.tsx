import {
  GnosisLoader,
  offerCardFullMock,
  useScrollbarContext,
} from '@atlascode/react-core';
import Courses from '../components/Courses';
import HeroScreen from '../components/HeroScreen';
import Newsletter from '../components/Newsletter';
import ProductDefense from '../components/ProductDefense';

const mockExt = offerCardFullMock(20);
const mockMulti = offerCardFullMock(15);
const mockPos = offerCardFullMock(50);

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
    </div>
  );
}

export default Index;
