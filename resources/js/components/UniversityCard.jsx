import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Stack,
  Typography,
  Link,
} from '@mui/material'

function UniversityCard({ university }) {
  if (!university) return null

  return (
    <Card>
      <CardHeader
        title={university.name}
        subheader={`${university.country} - ${university.alpha_two_code}`}
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm>
            <Typography variant="overline" display="block">
              Web pages
            </Typography>
            <Stack spacing={1} sx={{ mb: 3 }}>
              {university.web_pages.map((webPage) => (
                <Link
                  color="primary"
                  variant="caption"
                  target="_blank"
                  rel="noreferrer"
                  href={webPage}
                  key={webPage}
                >
                  {webPage}
                </Link>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={12} sm>
            <Typography variant="overline" display="block">
              Domains
            </Typography>
            <Stack spacing={1}>
              {university.domains.map((domain) => (
                <Link
                  color="primary"
                  variant="caption"
                  target="_blank"
                  rel="noreferrer"
                  href={domain}
                  key={domain}
                >
                  {domain}
                </Link>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default UniversityCard
