import { BoxProps } from '@material-ui/system';
import DefenseCard, { DefenseCardProps } from '../defense-card/DefenseCard';
import { InView } from 'react-intersection-observer';
import { MotionBox } from '@atlascode/react-web-animations';

type DefenseCardSectionContainerProps = Partial<
  Pick<BoxProps, 'sx' | 'component'>
>;

/* eslint-disable-next-line */
export interface DefenseCardSectionProps
  extends DefenseCardSectionContainerProps {
  itemList: DefenseCardProps[];
  bgColor?: string;
  animateIn?: boolean;
  observerProps?: Pick<
    InView['props'],
    | 'threshold'
    | 'rootMargin'
    | 'triggerOnce'
    | 'initialInView'
    | 'root'
    | 'delay'
  >;
}

export function DefenseCardSection({
  bgColor = '#FFF',
  component = 'section',
  itemList = [],
  animateIn,
  observerProps = {
    triggerOnce: true,
  },
  sx,
}: DefenseCardSectionProps) {
  return (
    <InView {...observerProps}>
      {({ entry, inView, ref }) => {
        return (
          <MotionBox
            ref={ref}
            layout
            sx={{
              m: '0px',
              p: '0px',
              width: '100%',
              display: 'grid',
              backgroundColor: bgColor,
              gridTemplateColumns: {
                xs: '1fr',
                md: '1fr 1fr',
                lg: '1fr 1fr 1fr',
              },
              justifyItems: 'center',
              py: '1.5em',
              gap: '5em',
              gridAutoFlow: 'row',
              ...sx,
            }}
            component={component}
            initial={animateIn ? 'hidden' : 'visible'}
            animate={animateIn && inView ? 'visible' : undefined}
            transition={{
              staggerChildren: 0.1,
            }}
          >
            {itemList.map((item, index) => {
              return (
                <MotionBox
                  variants={{
                    hidden: {
                      opacity: 0,
                      transform: `translate3d(0, 50px,0) rotateX(10deg)`,
                    },
                    visible: {
                      opacity: 1,
                      transform: `translate3d(0,0px,0) rotateX(0deg)`,
                      transition: {
                        type: 'spring',
                        damping: 100 * 2,
                        stiffness: 500 * 2,
                        mass: 50,
                      },
                    },
                  }}
                  key={index}
                >
                  <DefenseCard {...item} />
                </MotionBox>
              );
            })}
          </MotionBox>
        );
      }}
    </InView>
  );
}

export default DefenseCardSection;
