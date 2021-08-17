import { Box, Stack } from '@material-ui/core';
import { Facebook } from '@material-ui/icons';
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoWhatsapp,
} from 'react-icons/io';
import IconButtonCircle from '../icon-button-circle/IconButtonCircle';

/* eslint-disable-next-line */
export interface StandardFooterProps {
  color?: 'primary' | 'secondary';
  phones: string[];
  emails: string[];
  facebook?: string;
  instagram?: string;
  whatsapp?: string;
}

export function StandardFooter({
  color = 'primary',
  phones,
  emails,
  facebook,
  instagram,
  whatsapp,
}: StandardFooterProps) {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette[color].main,
        width: '100%',
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr 1fr' },
        gridAutoFlow: 'row',
        rowGap: '7rem',
        justifyItems: { xs: 'flex-start', md: 'center', lg: 'center' },
        py: '6rem',
        px: { xs: '3rem', lg: '0rem' },
      }}
    >
      <Stack direction="column" gap="1.2rem">
        <Box
          sx={{
            color: (theme) => theme.palette[color].contrastText,
            fontSize: '2rem',
            fontWeight: 700,
          }}
        >
          Contatos
        </Box>
        {phones.map((phone, index) => {
          return (
            <Box
              sx={{
                color: (theme) => theme.palette[color].contrastText,
                fontSize: '1.75rem',
              }}
              key={index}
            >
              {phone}
            </Box>
          );
        })}
      </Stack>

      <Stack direction="column" gap="1.2rem">
        <Box
          sx={{
            color: (theme) => theme.palette[color].contrastText,
            fontSize: '2rem',
            fontWeight: 700,
          }}
        >
          Contato por e-mail
        </Box>
        {emails.map((email, index) => {
          return (
            <Box
              key={index}
              sx={{
                color: (theme) => theme.palette[color].contrastText,
                fontSize: '1.75rem',
              }}
            >
              {email}
            </Box>
          );
        })}
      </Stack>

      <Stack direction="row" gap="2.5rem">
        <IconButtonCircle
          size="large"
          elevation
          href="https://atlascode.dev"
          variant="contained"
          icon={IoLogoFacebook}
        />
        <IconButtonCircle
          size="large"
          elevation
          variant="contained"
          icon={IoLogoInstagram}
        />
        <IconButtonCircle
          size="large"
          elevation
          variant="contained"
          icon={IoLogoWhatsapp}
        />
      </Stack>

      <Box
        sx={{
          gridColumn: { xs: 'initial', lg: '2' },
        }}
      >
        <Box
          sx={{
            color: (theme) => theme.palette[color].contrastText,
            fontSize: '1.4rem',
            textAlign: 'center',
          }}
        >
          {`© ${new Date().getFullYear()} - Todos Direitos Reservados Atlas Code - Desenvolvimento web & estratégia`}
        </Box>
      </Box>
    </Box>
  );
}

export default StandardFooter;
