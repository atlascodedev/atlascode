import { offerCardFullMock } from '@atlascode/react-core';
import { Button } from '@material-ui/core';
import Courses from '../components/Courses';
import HeroScreen from '../components/HeroScreen';
import ProductDefense from '../components/ProductDefense';

const mockExt = offerCardFullMock(20);
const mockMulti = offerCardFullMock(15);
const mockPos = offerCardFullMock(50);

export function Index() {
  return (
    <div>
      <HeroScreen />
      <ProductDefense />
      <Courses
        coursesExt={mockExt}
        coursesMulti={mockMulti}
        coursesPos={mockPos}
      />
    </div>
  );
}

export default Index;
