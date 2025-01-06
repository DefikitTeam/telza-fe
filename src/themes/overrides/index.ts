import { CardOverride } from '@/themes/overrides/CardOverride'
import { RadioOverride } from '@/themes/overrides/RadioOverride'
import { TabsOverride } from '@/themes/overrides/TabsOverride'
import { TooltipOverride } from '@/themes/overrides/TooltipOverride'
import type { PaletteMode } from '@mui/material'
import { PaletteOptions } from '@mui/material/styles'

import { AvatarOverride } from './AvatarOverride'
import { ButtonOverride } from './ButtonOverride'

const overrides = (mode: PaletteMode, baseColors: PaletteOptions) => {
  return Object.assign(
    {},
    ButtonOverride,
    AvatarOverride,
    CardOverride,
    TooltipOverride(baseColors),
    TabsOverride,
    RadioOverride
  )
}
export default overrides
