import { Box, Fab } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import OfferCard, { OfferCardProps } from '../offer-card/OfferCard';
require('swiper/swiper.min.css');
require('swiper/components/navigation/navigation.min.css');
require('swiper/components/pagination/pagination.min.css');
require('swiper/components/scrollbar/scrollbar.min.css');
require('swiper/components/effect-fade/effect-fade.min.css');
require('swiper/components/scrollbar/scrollbar.min.css');
require('swiper/components/lazy/lazy.min.css');

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

/* eslint-disable-next-line */
export interface OfferSliderProps {
  items?: OfferCardProps[];
}

export function OfferSlider({ items = [] }: OfferSliderProps) {
  return (
    <Box
      sx={{
        '.swiper-slide': {
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          alignItems: 'flex-start',
          paddingBottom: '30px',
        },

        '& .swiper-container': {
          height: 'auto',
          overflowY: 'visible',
        },
      }}
    >
      <Fab variant="outlined" color="primary">
        <ArrowBack sx={{ fontSize: '2.5rem' }} />
      </Fab>

      <Box
        component={Swiper}
        slidesPerView={1}
        initialSlide={1}
        autoplay={false}
        watchOverflow={true}
        spaceBetween={50}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            pagination: { clickable: true },
            spaceBetween: 0,
          },
        }}
      >
        {items.map((value, index) => {
          return (
            <SwiperSlide key={index}>
              <OfferCard {...value} />
            </SwiperSlide>
          );
        })}
      </Box>
    </Box>
  );
}

export default OfferSlider;
