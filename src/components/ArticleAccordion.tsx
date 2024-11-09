import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Typography,
  Link,
  Stack,
  Chip
} from '@mui/material';

interface Article {
  link: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
}
interface ArticleAccordionProps {
  data: Article[];
}
export default function ArticleAccordion({ data }: ArticleAccordionProps) {
  return (
    <>
      {data.map(({ date, title, link, tags, summary }, index) => (
        <Accordion key={index} disableGutters sx={{ width: "100%" }} elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="article-title-date"
            id="article-title-date"
          >
            <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between" sx={{ width: '100%', mr: 1 }}>
              <Typography>{title}</Typography>
              <Typography>{date}</Typography>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ marginBottom: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <Link href={link} underline="hover" target="_blank" rel="noopener noreferrer">
                {link}
              </Link>
            </Typography>
            <Typography sx={{ marginBottom: 2 }}>Summary:</Typography>
            <Typography sx={{ marginBottom: 2 }}>{summary}</Typography>
            <Typography sx={{ marginBottom: 2 }}></Typography>
            <Stack direction="row" spacing={1}>
              {tags.map((tag, index) => (
                <Chip key={index} label={tag} variant="outlined" />
              ))}
            </Stack>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
