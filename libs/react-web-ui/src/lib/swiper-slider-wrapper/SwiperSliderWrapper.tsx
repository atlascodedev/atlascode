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
/**
 *
 * @param component  - A React functional component reference, list type will be inferred based on this parameter component props
 * @param SwiperProps SwiperProps - SwiperJS React wrapper props https://swiperjs.com/react
 * @param list[]  - A list of items that match type of React.FC props
 * @param sx  - Material UI system's box wrapper sx prop made available at v5 https://next.material-ui.com/components/box/#the-sx-prop
 * @returns JSX.Element
 */
const SwiperSliderWrapper = <T extends {}>({
  component: Component,
  SwiperProps,
  list = [],
  sx,
}: SliderWrapperProps<T>) => {
  return (
    <Box sx={sx} component={Swiper} {...SwiperProps}>
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

export default SwiperSliderWrapper;
