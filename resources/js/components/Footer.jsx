import { Box, Typography } from '@mui/material'

function Footer() {
  return (
    <Box
      py={2}
      px={4}
      display="flex"
      flexWrap="wrap"
      alignItems="center"
      position="absolute"
      bottom={0}
      left={0}
      right={0}
      bgcolor="grey.100"
    >
      <Typography
        color="textSecondary"
        component="p"
        variant="caption"
        gutterBottom={false}
      >
        © 2023 Nereus All rights reserved.
      </Typography>
    </Box>
  )
}

export default Footer
