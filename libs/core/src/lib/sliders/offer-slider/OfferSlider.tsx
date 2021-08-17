import { Box, Fab } from '@material-ui/core';
import { KeyboardArrowRight } from '@material-ui/icons';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import OfferCard, {
  OfferCardProps,
} from '../../components/offer-card/OfferCard';
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
        position: 'relative',
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
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: '-12.5%', md: '-15%' },
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          gap: '5rem',
        }}
      >
        <Fab id="prev" color="primary">
          <KeyboardArrowRight
            sx={{ fontSize: '3.5rem', transform: 'rotateY(180deg)' }}
          />
        </Fab>

        <Fab id="next" color="primary">
          <KeyboardArrowRight sx={{ fontSize: '3.5rem' }} />
        </Fab>
      </Box>

      <Box
        component={Swiper}
        navigation={{ nextEl: '#next', prevEl: '#prev' }}
        slidesPerView={1.2}
        initialSlide={1}
        autoplay={false}
        watchOverflow={true}
        spaceBetween={20}
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
