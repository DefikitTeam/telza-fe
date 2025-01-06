import React from 'react'

import { ColorPartial } from '@mui/material/styles/createPalette'
import { Typography, TypographyOptions } from '@mui/material/styles/createTypography'

interface ColorLevel {
  0?: string
  50?: string
  100?: string
  200?: string
  300?: string
  400?: string
  500?: string
  600?: string
  700?: string
  800?: string
  900?: string
  1000?: string
}

declare module '@mui/material/styles/createTypography' {
  interface TypographyStyleOptions {
    MontserratDisplayLargeExtrabold: true
    MontserratDisplayLargeBold: true
    MontserratDisplayLargeMedium: true
    MsSanDisplayLargeBold: true
    MontserratDisplayLargeRegular: true
    MsSanDisplayLargeRegular: true
    MontserratDisplaySmallExtrabold: true
    MontserratDisplaySmallBold: true
    MontserratDisplaySmallMedium: true
    MontserratDisplaySmallRegular: true
    MsSanDisplaySmallRegular: true
    MsSanDisplaySmallBold: true
    MontserratHeadingHeading1Extrabold: true
    MontserratHeadingHeading1Bold: true
    MontserratHeadingHeading1Medium: true
    MontserratHeadingHeading1Regular: true
    MsSanHeadingHeading1Regular: true
    MsSanHeadingHeading1Bold: true
    MontserratHeadingHeading2Extrabold: true
    MontserratHeadingHeading2Bold: true
    MontserratHeadingHeading2Medium: true
    MontserratHeadingHeading2Regular: true
    MsSanHeadingHeading2Regular: true
    MsSanHeadingHeading2Bold: true
    MontserratHeadingHeading3Extrabold: true
    MontserratHeadingHeading3Bold: true
    MontserratHeadingHeading3Medium: true
    MontserratHeadingHeading3Regular: true
    MsSanHeadingHeading3Regular: true
    MsSanHeadingHeading3Bold: true
    MontserratHeadingHeading4Extrabold: true
    MontserratHeadingHeading4Bold: true
    MontserratHeadingHeading4Medium: true
    MontserratHeadingHeading4Regular: true
    MsSanHeadingHeading4Regular: true
    MsSanHeadingHeading4Bold: true
    MontserratHeadingHeading5Extrabold: true
    MontserratHeadingHeading5Bold: true
    MontserratHeadingHeading5Medium: true
    MontserratHeadingHeading5Regular: true
    MsSanHeadingHeading5Regular: true
    MsSanHeadingHeading5Bold: true
    MontserratHeadingHeading6Extrabold: true
    MontserratHeadingHeading6Bold: true
    MontserratHeadingHeading6Medium: true
    MontserratHeadingHeading6Regular: true
    MsSanHeadingHeading6Regular: true
    MsSanHeadingHeading6Bold: true
    MontserratParagraphLargeBold: true
    MontserratParagraphLargeMedium: true
    MsSanParagraphLargeUnderline: true
    MsSanParagraphLargeNormal: true
    MsSanParagraphLargeBold: true
    MontserratParagraphLargeSpecialItalics: true
    MontserratParagraphLargeSpecialUnderline: true
    MontserratParagraphLargeSpecialStrikethrough: true
    MontserratParagraphLargeRegular: true
    MontserratParagraphMediumBold: true
    MontserratLabelLargeBold: true
    MontserratParagraphMediumMedium: true
    MontserratLabelLargeMedium: true
    MsSanParagraphMediumUnderline: true
    MsSanParagraphMediumNormal: true
    MsSanLabelLargeNormal: true
    MsSanParagraphMediumBold: true
    MsSanLabelLargeBold: true
    MontserratParagraphMediumSpecialItalics: true
    MontserratLabelLargeSpecialItalics: true
    MontserratParagraphMediumSpecialUnderline: true
    MontserratParagraphMediumSpecialStrikethrough: true
    MontserratParagraphMediumRegular: true
    MontserratLabelLargeSpecialUnderline: true
    MontserratLabelLargeSpecialStrikethrough: true
    MontserratLabelLargeRegular: true
    MontserratParagraphSmallBold: true
    MontserratLabelMediumBold: true
    MontserratParagraphSmallMedium: true
    MontserratLabelMediumMedium: true
    MontserratParagraphSmallSpecialItalics: true
    MsSanParagraphSmallUnderline: true
    MsSanParagraphSmallNormal: true
    MsSanLabelMediumNormal: true
    MsSanParagraphSmallBold: true
    MsSanLabelMediumBold: true
    MontserratLabelMediumSpecialItalics: true
    MontserratParagraphSmallSpecialUnderline: true
    MontserratParagraphSmallSpecialStrikethrough: true
    MontserratParagraphSmallRegular: true
    MontserratLabelMediumSpecialUnderline: true
    MontserratLabelMediumSpecialStrikethrough: true
    MontserratLabelMediumRegular: true
    MontserratParagraphXSmallBold: true
    MontserratLabelSmallBold: true
    MontserratParagraphXSmallMedium: true
    MontserratLabelSmallMedium: true
    MsSanParagraphXSmallUnderline: true
    MsSanParagraphXSmallNormal: true
    MsSanLabelSmallNormal: true
    MsSanParagraphXsmallBold: true
    MsSanLabelSmallBold: true
    MontserratParagraphXSmallSpecialItalics: true
    MontserratLabelSmallSpecialItalics: true
    MontserratParagraphXSmallSpecialUnderline: true
    MontserratParagraphXSmallSpecialStrikethrough: true
    MontserratParagraphXSmallRegular: true
    MontserratLabelSmallSpecialUnderline: true
    MontserratLabelSmallSpecialStrikethrough: true
    MontserratLabelSmallRegular: true
    MontserratLabelXSmallBold: true
    MontserratLabelXSmallMedium: true
    MsSanLabelXSmallNormal: true
    MsSanLabelXSmallBold: true
    MontserratLabelXSmallSpecialItalics: true
    MontserratLabelXSmallSpecialUnderline: true
    MontserratLabelXSmallSpecialStrikethrough: true
    MontserratLabelXSmallRegular: true
  }
  type TypographyOptions = TypographyStyleOptions
  interface TypographyPropsVariantOverrides {
    MontserratDisplayLargeExtrabold: true
    MontserratDisplayLargeBold: true
    MontserratDisplayLargeMedium: true
    MsSanDisplayLargeBold: true
    MontserratDisplayLargeRegular: true
    MsSanDisplayLargeRegular: true
    MontserratDisplaySmallExtrabold: true
    MontserratDisplaySmallBold: true
    MontserratDisplaySmallMedium: true
    MontserratDisplaySmallRegular: true
    MsSanDisplaySmallRegular: true
    MsSanDisplaySmallBold: true
    MontserratHeadingHeading1Extrabold: true
    MontserratHeadingHeading1Bold: true
    MontserratHeadingHeading1Medium: true
    MontserratHeadingHeading1Regular: true
    MsSanHeadingHeading1Regular: true
    MsSanHeadingHeading1Bold: true
    MontserratHeadingHeading2Extrabold: true
    MontserratHeadingHeading2Bold: true
    MontserratHeadingHeading2Medium: true
    MontserratHeadingHeading2Regular: true
    MsSanHeadingHeading2Regular: true
    MsSanHeadingHeading2Bold: true
    MontserratHeadingHeading3Extrabold: true
    MontserratHeadingHeading3Bold: true
    MontserratHeadingHeading3Medium: true
    MontserratHeadingHeading3Regular: true
    MsSanHeadingHeading3Regular: true
    MsSanHeadingHeading3Bold: true
    MontserratHeadingHeading4Extrabold: true
    MontserratHeadingHeading4Bold: true
    MontserratHeadingHeading4Medium: true
    MontserratHeadingHeading4Regular: true
    MsSanHeadingHeading4Regular: true
    MsSanHeadingHeading4Bold: true
    MontserratHeadingHeading5Extrabold: true
    MontserratHeadingHeading5Bold: true
    MontserratHeadingHeading5Medium: true
    MontserratHeadingHeading5Regular: true
    MsSanHeadingHeading5Regular: true
    MsSanHeadingHeading5Bold: true
    MontserratHeadingHeading6Extrabold: true
    MontserratHeadingHeading6Bold: true
    MontserratHeadingHeading6Medium: true
    MontserratHeadingHeading6Regular: true
    MsSanHeadingHeading6Regular: true
    MsSanHeadingHeading6Bold: true
    MontserratParagraphLargeBold: true
    MontserratParagraphLargeMedium: true
    MsSanParagraphLargeUnderline: true
    MsSanParagraphLargeNormal: true
    MsSanParagraphLargeBold: true
    MontserratParagraphLargeSpecialItalics: true
    MontserratParagraphLargeSpecialUnderline: true
    MontserratParagraphLargeSpecialStrikethrough: true
    MontserratParagraphLargeRegular: true
    MontserratParagraphMediumBold: true
    MontserratLabelLargeBold: true
    MontserratParagraphMediumMedium: true
    MontserratLabelLargeMedium: true
    MsSanParagraphMediumUnderline: true
    MsSanParagraphMediumNormal: true
    MsSanLabelLargeNormal: true
    MsSanParagraphMediumBold: true
    MsSanLabelLargeBold: true
    MontserratParagraphMediumSpecialItalics: true
    MontserratLabelLargeSpecialItalics: true
    MontserratParagraphMediumSpecialUnderline: true
    MontserratParagraphMediumSpecialStrikethrough: true
    MontserratParagraphMediumRegular: true
    MontserratLabelLargeSpecialUnderline: true
    MontserratLabelLargeSpecialStrikethrough: true
    MontserratLabelLargeRegular: true
    MontserratParagraphSmallBold: true
    MontserratLabelMediumBold: true
    MontserratParagraphSmallMedium: true
    MontserratLabelMediumMedium: true
    MontserratParagraphSmallSpecialItalics: true
    MsSanParagraphSmallUnderline: true
    MsSanParagraphSmallNormal: true
    MsSanLabelMediumNormal: true
    MsSanParagraphSmallBold: true
    MsSanLabelMediumBold: true
    MontserratLabelMediumSpecialItalics: true
    MontserratParagraphSmallSpecialUnderline: true
    MontserratParagraphSmallSpecialStrikethrough: true
    MontserratParagraphSmallRegular: true
    MontserratLabelMediumSpecialUnderline: true
    MontserratLabelMediumSpecialStrikethrough: true
    MontserratLabelMediumRegular: true
    MontserratParagraphXSmallBold: true
    MontserratLabelSmallBold: true
    MontserratParagraphXSmallMedium: true
    MontserratLabelSmallMedium: true
    MsSanParagraphXSmallUnderline: true
    MsSanParagraphXSmallNormal: true
    MsSanLabelSmallNormal: true
    MsSanParagraphXsmallBold: true
    MsSanLabelSmallBold: true
    MontserratParagraphXSmallSpecialItalics: true
    MontserratLabelSmallSpecialItalics: true
    MontserratParagraphXSmallSpecialUnderline: true
    MontserratParagraphXSmallSpecialStrikethrough: true
    MontserratParagraphXSmallRegular: true
    MontserratLabelSmallSpecialUnderline: true
    MontserratLabelSmallSpecialStrikethrough: true
    MontserratLabelSmallRegular: true
    MontserratLabelXSmallBold: true
    MontserratLabelXSmallMedium: true
    MsSanLabelXSmallNormal: true
    MsSanLabelXSmallBold: true
    MontserratLabelXSmallSpecialItalics: true
    MontserratLabelXSmallSpecialUnderline: true
    MontserratLabelXSmallSpecialStrikethrough: true
    MontserratLabelXSmallRegular: true
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    MontserratDisplayLargeExtrabold: true
    MontserratDisplayLargeBold: true
    MontserratDisplayLargeMedium: true
    MsSanDisplayLargeBold: true
    MontserratDisplayLargeRegular: true
    MsSanDisplayLargeRegular: true
    MontserratDisplaySmallExtrabold: true
    MontserratDisplaySmallBold: true
    MontserratDisplaySmallMedium: true
    MontserratDisplaySmallRegular: true
    MsSanDisplaySmallRegular: true
    MsSanDisplaySmallBold: true
    MontserratHeadingHeading1Extrabold: true
    MontserratHeadingHeading1Bold: true
    MontserratHeadingHeading1Medium: true
    MontserratHeadingHeading1Regular: true
    MsSanHeadingHeading1Regular: true
    MsSanHeadingHeading1Bold: true
    MontserratHeadingHeading2Extrabold: true
    MontserratHeadingHeading2Bold: true
    MontserratHeadingHeading2Medium: true
    MontserratHeadingHeading2Regular: true
    MsSanHeadingHeading2Regular: true
    MsSanHeadingHeading2Bold: true
    MontserratHeadingHeading3Extrabold: true
    MontserratHeadingHeading3Bold: true
    MontserratHeadingHeading3Medium: true
    MontserratHeadingHeading3Regular: true
    MsSanHeadingHeading3Regular: true
    MsSanHeadingHeading3Bold: true
    MontserratHeadingHeading4Extrabold: true
    MontserratHeadingHeading4Bold: true
    MontserratHeadingHeading4Medium: true
    MontserratHeadingHeading4Regular: true
    MsSanHeadingHeading4Regular: true
    MsSanHeadingHeading4Bold: true
    MontserratHeadingHeading5Extrabold: true
    MontserratHeadingHeading5Bold: true
    MontserratHeadingHeading5Medium: true
    MontserratHeadingHeading5Regular: true
    MsSanHeadingHeading5Regular: true
    MsSanHeadingHeading5Bold: true
    MontserratHeadingHeading6Extrabold: true
    MontserratHeadingHeading6Bold: true
    MontserratHeadingHeading6Medium: true
    MontserratHeadingHeading6Regular: true
    MsSanHeadingHeading6Regular: true
    MsSanHeadingHeading6Bold: true
    MontserratParagraphLargeBold: true
    MontserratParagraphLargeMedium: true
    MsSanParagraphLargeUnderline: true
    MsSanParagraphLargeNormal: true
    MsSanParagraphLargeBold: true
    MontserratParagraphLargeSpecialItalics: true
    MontserratParagraphLargeSpecialUnderline: true
    MontserratParagraphLargeSpecialStrikethrough: true
    MontserratParagraphLargeRegular: true
    MontserratParagraphMediumBold: true
    MontserratLabelLargeBold: true
    MontserratParagraphMediumMedium: true
    MontserratLabelLargeMedium: true
    MsSanParagraphMediumUnderline: true
    MsSanParagraphMediumNormal: true
    MsSanLabelLargeNormal: true
    MsSanParagraphMediumBold: true
    MsSanLabelLargeBold: true
    MontserratParagraphMediumSpecialItalics: true
    MontserratLabelLargeSpecialItalics: true
    MontserratParagraphMediumSpecialUnderline: true
    MontserratParagraphMediumSpecialStrikethrough: true
    MontserratParagraphMediumRegular: true
    MontserratLabelLargeSpecialUnderline: true
    MontserratLabelLargeSpecialStrikethrough: true
    MontserratLabelLargeRegular: true
    MontserratParagraphSmallBold: true
    MontserratLabelMediumBold: true
    MontserratParagraphSmallMedium: true
    MontserratLabelMediumMedium: true
    MontserratParagraphSmallSpecialItalics: true
    MsSanParagraphSmallUnderline: true
    MsSanParagraphSmallNormal: true
    MsSanLabelMediumNormal: true
    MsSanParagraphSmallBold: true
    MsSanLabelMediumBold: true
    MontserratLabelMediumSpecialItalics: true
    MontserratParagraphSmallSpecialUnderline: true
    MontserratParagraphSmallSpecialStrikethrough: true
    MontserratParagraphSmallRegular: true
    MontserratLabelMediumSpecialUnderline: true
    MontserratLabelMediumSpecialStrikethrough: true
    MontserratLabelMediumRegular: true
    MontserratParagraphXSmallBold: true
    MontserratLabelSmallBold: true
    MontserratParagraphXSmallMedium: true
    MontserratLabelSmallMedium: true
    MsSanParagraphXSmallUnderline: true
    MsSanParagraphXSmallNormal: true
    MsSanLabelSmallNormal: true
    MsSanParagraphXsmallBold: true
    MsSanLabelSmallBold: true
    MontserratParagraphXSmallSpecialItalics: true
    MontserratLabelSmallSpecialItalics: true
    MontserratParagraphXSmallSpecialUnderline: true
    MontserratParagraphXSmallSpecialStrikethrough: true
    MontserratParagraphXSmallRegular: true
    MontserratLabelSmallSpecialUnderline: true
    MontserratLabelSmallSpecialStrikethrough: true
    MontserratLabelSmallRegular: true
    MontserratLabelXSmallBold: true
    MontserratLabelXSmallMedium: true
    MsSanLabelXSmallNormal: true
    MsSanLabelXSmallBold: true
    MontserratLabelXSmallSpecialItalics: true
    MontserratLabelXSmallSpecialUnderline: true
    MontserratLabelXSmallSpecialStrikethrough: true
    MontserratLabelXSmallRegular: true
  }
}
declare module '@mui/material/styles' {
  interface Theme {
    typography: Partial<
      Typography &
        TypographyOptions & {
          MontserratDisplayLargeExtrabold?: React.CSSProperties
          MontserratDisplayLargeBold?: React.CSSProperties
          MontserratDisplayLargeMedium?: React.CSSProperties
          MsSanDisplayLargeBold?: React.CSSProperties
          MontserratDisplayLargeRegular?: React.CSSProperties
          MsSanDisplayLargeRegular?: React.CSSProperties
          MontserratDisplaySmallExtrabold?: React.CSSProperties
          MontserratDisplaySmallBold?: React.CSSProperties
          MontserratDisplaySmallMedium?: React.CSSProperties
          MontserratDisplaySmallRegular?: React.CSSProperties
          MsSanDisplaySmallRegular?: React.CSSProperties
          MsSanDisplaySmallBold?: React.CSSProperties
          MontserratHeadingHeading1Extrabold?: React.CSSProperties
          MontserratHeadingHeading1Bold?: React.CSSProperties
          MontserratHeadingHeading1Medium?: React.CSSProperties
          MontserratHeadingHeading1Regular?: React.CSSProperties
          MsSanHeadingHeading1Regular?: React.CSSProperties
          MsSanHeadingHeading1Bold?: React.CSSProperties
          MontserratHeadingHeading2Extrabold?: React.CSSProperties
          MontserratHeadingHeading2Bold?: React.CSSProperties
          MontserratHeadingHeading2Medium?: React.CSSProperties
          MontserratHeadingHeading2Regular?: React.CSSProperties
          MsSanHeadingHeading2Regular?: React.CSSProperties
          MsSanHeadingHeading2Bold?: React.CSSProperties
          MontserratHeadingHeading3Extrabold?: React.CSSProperties
          MontserratHeadingHeading3Bold?: React.CSSProperties
          MontserratHeadingHeading3Medium?: React.CSSProperties
          MontserratHeadingHeading3Regular?: React.CSSProperties
          MsSanHeadingHeading3Regular?: React.CSSProperties
          MsSanHeadingHeading3Bold?: React.CSSProperties
          MontserratHeadingHeading4Extrabold?: React.CSSProperties
          MontserratHeadingHeading4Bold?: React.CSSProperties
          MontserratHeadingHeading4Medium?: React.CSSProperties
          MontserratHeadingHeading4Regular?: React.CSSProperties
          MsSanHeadingHeading4Regular?: React.CSSProperties
          MsSanHeadingHeading4Bold?: React.CSSProperties
          MontserratHeadingHeading5Extrabold?: React.CSSProperties
          MontserratHeadingHeading5Bold?: React.CSSProperties
          MontserratHeadingHeading5Medium?: React.CSSProperties
          MontserratHeadingHeading5Regular?: React.CSSProperties
          MsSanHeadingHeading5Regular?: React.CSSProperties
          MsSanHeadingHeading5Bold?: React.CSSProperties
          MontserratHeadingHeading6Extrabold?: React.CSSProperties
          MontserratHeadingHeading6Bold?: React.CSSProperties
          MontserratHeadingHeading6Medium?: React.CSSProperties
          MontserratHeadingHeading6Regular?: React.CSSProperties
          MsSanHeadingHeading6Regular?: React.CSSProperties
          MsSanHeadingHeading6Bold?: React.CSSProperties
          MontserratParagraphLargeBold?: React.CSSProperties
          MontserratParagraphLargeMedium?: React.CSSProperties
          MsSanParagraphLargeUnderline?: React.CSSProperties
          MsSanParagraphLargeNormal?: React.CSSProperties
          MsSanParagraphLargeBold?: React.CSSProperties
          MontserratParagraphLargeSpecialItalics?: React.CSSProperties
          MontserratParagraphLargeSpecialUnderline?: React.CSSProperties
          MontserratParagraphLargeSpecialStrikethrough?: React.CSSProperties
          MontserratParagraphLargeRegular?: React.CSSProperties
          MontserratParagraphMediumBold?: React.CSSProperties
          MontserratLabelLargeBold?: React.CSSProperties
          MontserratParagraphMediumMedium?: React.CSSProperties
          MontserratLabelLargeMedium?: React.CSSProperties
          MsSanParagraphMediumUnderline?: React.CSSProperties
          MsSanParagraphMediumNormal?: React.CSSProperties
          MsSanLabelLargeNormal?: React.CSSProperties
          MsSanParagraphMediumBold?: React.CSSProperties
          MsSanLabelLargeBold?: React.CSSProperties
          MontserratParagraphMediumSpecialItalics?: React.CSSProperties
          MontserratLabelLargeSpecialItalics?: React.CSSProperties
          MontserratParagraphMediumSpecialUnderline?: React.CSSProperties
          MontserratParagraphMediumSpecialStrikethrough?: React.CSSProperties
          MontserratParagraphMediumRegular?: React.CSSProperties
          MontserratLabelLargeSpecialUnderline?: React.CSSProperties
          MontserratLabelLargeSpecialStrikethrough?: React.CSSProperties
          MontserratLabelLargeRegular?: React.CSSProperties
          MontserratParagraphSmallBold?: React.CSSProperties
          MontserratLabelMediumBold?: React.CSSProperties
          MontserratParagraphSmallMedium?: React.CSSProperties
          MontserratLabelMediumMedium?: React.CSSProperties
          MontserratParagraphSmallSpecialItalics?: React.CSSProperties
          MsSanParagraphSmallUnderline?: React.CSSProperties
          MsSanParagraphSmallNormal?: React.CSSProperties
          MsSanLabelMediumNormal?: React.CSSProperties
          MsSanParagraphSmallBold?: React.CSSProperties
          MsSanLabelMediumBold?: React.CSSProperties
          MontserratLabelMediumSpecialItalics?: React.CSSProperties
          MontserratParagraphSmallSpecialUnderline?: React.CSSProperties
          MontserratParagraphSmallSpecialStrikethrough?: React.CSSProperties
          MontserratParagraphSmallRegular?: React.CSSProperties
          MontserratLabelMediumSpecialUnderline?: React.CSSProperties
          MontserratLabelMediumSpecialStrikethrough?: React.CSSProperties
          MontserratLabelMediumRegular?: React.CSSProperties
          MontserratParagraphXSmallBold?: React.CSSProperties
          MontserratLabelSmallBold?: React.CSSProperties
          MontserratParagraphXSmallMedium?: React.CSSProperties
          MontserratLabelSmallMedium?: React.CSSProperties
          MsSanParagraphXSmallUnderline?: React.CSSProperties
          MsSanParagraphXSmallNormal?: React.CSSProperties
          MsSanLabelSmallNormal?: React.CSSProperties
          MsSanParagraphXsmallBold?: React.CSSProperties
          MsSanLabelSmallBold?: React.CSSProperties
          MontserratParagraphXSmallSpecialItalics?: React.CSSProperties
          MontserratLabelSmallSpecialItalics?: React.CSSProperties
          MontserratParagraphXSmallSpecialUnderline?: React.CSSProperties
          MontserratParagraphXSmallSpecialStrikethrough?: React.CSSProperties
          MontserratParagraphXSmallRegular?: React.CSSProperties
          MontserratLabelSmallSpecialUnderline?: React.CSSProperties
          MontserratLabelSmallSpecialStrikethrough?: React.CSSProperties
          MontserratLabelSmallRegular?: React.CSSProperties
          MontserratLabelXSmallBold?: React.CSSProperties
          MontserratLabelXSmallMedium?: React.CSSProperties
          MsSanLabelXSmallNormal?: React.CSSProperties
          MsSanLabelXSmallBold?: React.CSSProperties
          MontserratLabelXSmallSpecialItalics?: React.CSSProperties
          MontserratLabelXSmallSpecialUnderline?: React.CSSProperties
          MontserratLabelXSmallSpecialStrikethrough?: React.CSSProperties
          MontserratLabelXSmallRegular?: React.CSSProperties
        }
    >

    neutral?: Partial<ColorPartial & ColorLevel>
    destructive?: Partial<ColorPartial & ColorLevel>
    blackWhiteNeutral?: Partial<ColorPartial & ColorLevel>
    purple?: Partial<ColorPartial & ColorLevel>
    cyan?: Partial<ColorPartial & ColorLevel>
    pink?: Partial<ColorPartial & ColorLevel>
    green?: Partial<ColorPartial & ColorLevel>
    yellow?: Partial<ColorPartial & ColorLevel>
    orange?: Partial<ColorPartial & ColorLevel>
    red?: Partial<ColorPartial & ColorLevel>
  }

  interface BreakpointOverrides {
    xs?: true
    sm2?: true
    sm?: true
    md?: true
    lg?: true
    xl?: true
    xxl?: true
  }

  interface ThemeOptions {
    hahaha?: {
      danger?: string
    }
  }

  interface Palette {
    neutral?: Partial<ColorPartial & ColorLevel>
    destructive?: Partial<ColorPartial & ColorLevel>
    blackWhiteNeutral?: Partial<ColorPartial & ColorLevel>
    purple?: Partial<ColorPartial & ColorLevel>
    cyan?: Partial<ColorPartial & ColorLevel>
    pink?: Partial<ColorPartial & ColorLevel>
    green?: Partial<ColorPartial & ColorLevel>
    yellow?: Partial<ColorPartial & ColorLevel>
    orange?: Partial<ColorPartial & ColorLevel>
    red?: Partial<ColorPartial & ColorLevel>
  }

  interface PaletteOptions {
    neutral?: Partial<ColorPartial & ColorLevel>
    destructive?: Partial<ColorPartial & ColorLevel>
    blackWhiteNeutral?: Partial<ColorPartial & ColorLevel>
    purple?: Partial<ColorPartial & ColorLevel>
    cyan?: Partial<ColorPartial & ColorLevel>
    pink?: Partial<ColorPartial & ColorLevel>
    green?: Partial<ColorPartial & ColorLevel>
    yellow?: Partial<ColorPartial & ColorLevel>
    orange?: Partial<ColorPartial & ColorLevel>
    red?: Partial<ColorPartial & ColorLevel>
  }
}
