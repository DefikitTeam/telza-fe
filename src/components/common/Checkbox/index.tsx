import { Icon } from '@/components/common/Icon'
import { Box, Checkbox as MuiCheckbox, CheckboxProps } from '@mui/material'

interface Props extends CheckboxProps {}

export default function Checkbox({ ...props }: Props) {
  return (
    <MuiCheckbox
      sx={{
        '&:hover': { bgcolor: 'transparent' }
      }}
      disableRipple
      color="default"
      checkedIcon={
        <Box
          width={20}
          height={20}
          border="1px solid"
          borderColor="blackWhiteNeutral.0"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgcolor="purple.300"
          className="shadow-sm"
        >
          <Icon
            url="icons/checked.svg"
            size={8}
            height={6}
            className="text-blackWhiteNeutral-1000"
          />
        </Box>
      }
      icon={
        <Box
          width={20}
          height={20}
          border="1px solid"
          borderColor="blackWhiteNeutral.0"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgcolor="blackWhiteNeutral.1000"
          className="shadow-sm"
        />
      }
      inputProps={{ 'aria-label': 'Checkbox demo' }}
      {...props}
    />
  )
}
