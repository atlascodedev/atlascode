import { Box, Stack } from '@material-ui/core';

/* eslint-disable-next-line */
export interface StandardFooterProps {
  color?: 'primary' | 'secondary';
  phones: string[];
  emails: string[];
}

export function StandardFooter({
  color = 'primary',
  phones,
  emails,
}: StandardFooterProps) {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette[color].main,
        width: '100%',
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr 1fr' },
        gridAutoFlow: 'row',
        rowGap: '2rem',
      }}
    >
      <Stack direction="column">
        <Box sx={{ color: (theme) => theme.palette[color].contrastText }}>
          Contatos
        </Box>
        {phones.map((phone, index) => {
          return (
            <Box
              sx={{ color: (theme) => theme.palette[color].contrastText }}
              key={index}
            >
              {phone}
            </Box>
          );
        })}
      </Stack>

      <Stack direction="column">
        <Box sx={{ color: (theme) => theme.palette[color].contrastText }}>
          Contato por e-mail
        </Box>
        {emails.map((email, index) => {
          return (
            <Box
              key={index}
              sx={{ color: (theme) => theme.palette[color].contrastText }}
            >
              {email}
            </Box>
          );
        })}
      </Stack>

      <Stack direction="column">
        
      </Stack>
    </Box>
  );
}

export default StandardFooter;
