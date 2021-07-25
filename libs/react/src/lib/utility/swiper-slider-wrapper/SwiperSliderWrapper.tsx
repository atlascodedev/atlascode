import { Box } from '@material-ui/core';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  SwiperOptions,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

require('swiper/swiper.min.css');
require('swiper/components/navigation/navigation.min.css');
require('swiper/components/pagination/pagination.min.css');
require('swiper/components/scrollbar/scrollbar.min.css');
require('swiper/components/effect-fade/effect-fade.min.css');
require('swiper/components/scrollbar/scrollbar.min.css');
require('swiper/components/lazy/lazy.min.css');

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

/* eslint-disable-next-line */
export interface SwiperSliderWrapperProps<T = {}, R extends T[] = T[]> {
  SwiperProps: SwiperOptions;
  items: R;
  component: React.FC<T>;
}

export function SwiperSliderWrapper({
  SwiperProps,
  component: Component,
  items,
}: SwiperSliderWrapperProps) {
  return (
    <Box {...(SwiperProps as any)} component={Swiper}>
      {items.map((value, index) => {
        return (
          <SwiperSlide key={index}>
            <Component {...value} />
          </SwiperSlide>
        );
      })}
    </Box>
  );
}

export default SwiperSliderWrapper;
