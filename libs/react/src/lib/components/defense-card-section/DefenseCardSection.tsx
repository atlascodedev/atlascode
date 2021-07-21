import { Box, BoxProps } from '@material-ui/core';
import DefenseCard, { DefenseCardProps } from '../defense-card/DefenseCard';

type DefenseCardSectionContainerProps = Partial<
  Pick<BoxProps, 'sx' | 'component'>
>;

/* eslint-disable-next-line */
export interface DefenseCardSectionProps
  extends DefenseCardSectionContainerProps {
  itemList: DefenseCardProps[];
  bgColor?: string;
}

export function DefenseCardSection({
  bgColor = '#FFF',
  component = 'section',
  itemList = [],
  sx,
}: DefenseCardSectionProps) {
  return (
    <Box
      sx={{
        m: '0px',
        p: '0px',
        width: '100%',
        display: 'grid',
        backgroundColor: bgColor,
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' },
        justifyItems: 'center',
        py: '1.5em',
        gap: '5em',
        gridAutoFlow: 'row',
        ...sx,
      }}
      component={component}
    >
      {itemList.map((item, index) => {
        return <DefenseCard {...item} key={index} />;
      })}
    </Box>
  );
}

export default DefenseCardSection;
