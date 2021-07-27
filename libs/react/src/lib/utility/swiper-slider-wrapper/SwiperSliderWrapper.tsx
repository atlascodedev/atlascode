/* eslint-disable @typescript-eslint/ban-types */
import { Box, BoxProps } from '@material-ui/core';
import React from 'react';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  SwiperOptions,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import OfferCard from '../../components/offer-card/OfferCard';
import MotionBox from '../motion-box/MotionBox';

require('swiper/swiper.min.css');
require('swiper/components/navigation/navigation.min.css');
require('swiper/components/pagination/pagination.min.css');
require('swiper/components/scrollbar/scrollbar.min.css');
require('swiper/components/effect-fade/effect-fade.min.css');
require('swiper/components/scrollbar/scrollbar.min.css');
require('swiper/components/lazy/lazy.min.css');

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export type SliderWrapperProps<C> = {
  component: React.FC<C>;
  list?: C[];
  SwiperProps?: Omit<SwiperOptions, 'width' | 'height'>;
  sx?: Omit<BoxProps['sx'], 'width'>;
};

const SwiperSliderWrapper = <T extends {}>({
  component: Component,
  SwiperProps,
  list = [],
  sx,
  ...props
}: SliderWrapperProps<T>) => {
  return (
    <Box {...sx} component={Swiper} {...SwiperProps}>
      {list.map((value, index) => {
        return (
          <SwiperSlide key={index}>
            <Component {...value} />
          </SwiperSlide>
        );
      })}
    </Box>
  );
};

<SwiperSliderWrapper
  list={[
    { img: 'https://1231321', items: [], redirectLink: '223', title: '131321' },
  ]}
  component={OfferCard}
/>;

export default SwiperSliderWrapper;
