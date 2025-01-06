import { montserratFont, msSansSerif1Font, msSansSerifBoldFont } from '@/themes/fonts'
import { PaletteOptions, Theme } from '@mui/material/styles'

const typography = (fontFamily?: string, baseColors?: PaletteOptions): Theme['typography'] => ({
  allVariants: {
    color: baseColors?.blackWhiteNeutral?.['0']
  },

  fontFamily:
    typeof fontFamily === 'undefined' || fontFamily === ''
      ? [
          'Inter',
          'sans-serif',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"'
        ].join(',')
      : fontFamily,
  MontserratDisplayLargeExtrabold: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '56px',
    fontWeight: '800',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 0.93,
    letterSpacing: '-1.12px'
  },
  MontserratDisplayLargeBold: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '56px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 0.93,
    letterSpacing: '-1.12px'
  },
  MontserratDisplayLargeMedium: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '56px',
    fontWeight: '600',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1,
    letterSpacing: '-1.12px'
  },
  MsSanDisplayLargeBold: {
    fontFamily: msSansSerifBoldFont.style.fontFamily,
    fontSize: '56px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 0.93,
    letterSpacing: '-1.12px'
  },
  MontserratDisplayLargeRegular: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '52px',
    fontWeight: '500',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.08,
    letterSpacing: '-1.04px'
  },
  MsSanDisplayLargeRegular: {
    fontFamily: msSansSerif1Font.style.fontFamily,
    fontSize: '52px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.08,
    letterSpacing: 'normal'
  },
  MontserratDisplaySmallExtrabold: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '44px',
    fontWeight: '800',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.09,
    letterSpacing: '-0.88px'
  },
  MontserratDisplaySmallBold: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '44px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.09,
    letterSpacing: '-0.88px'
  },
  MontserratDisplaySmallMedium: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '44px',
    fontWeight: '600',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.09,
    letterSpacing: '-0.88px'
  },
  MontserratDisplaySmallRegular: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '44px',
    fontWeight: '500',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.09,
    letterSpacing: '-0.88px'
  },
  MsSanDisplaySmallRegular: {
    fontFamily: msSansSerif1Font.style.fontFamily,
    fontSize: '44px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.09,
    letterSpacing: 'normal'
  },
  MsSanDisplaySmallBold: {
    fontFamily: msSansSerifBoldFont.style.fontFamily,
    fontSize: '44px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.09,
    letterSpacing: '-0.88px'
  },
  MontserratHeadingHeading1Extrabold: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '40px',
    fontWeight: '800',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.2,
    letterSpacing: '-0.8px'
  },
  MontserratHeadingHeading1Bold: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '40px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.2,
    letterSpacing: '-0.8px'
  },
  MontserratHeadingHeading1Medium: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '40px',
    fontWeight: '600',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.2,
    letterSpacing: '-0.8px'
  },
  MontserratHeadingHeading1Regular: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '40px',
    fontWeight: '500',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.2,
    letterSpacing: '-0.8px'
  },
  MsSanHeadingHeading1Regular: {
    fontFamily: msSansSerif1Font.style.fontFamily,
    fontSize: '40px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.2,
    letterSpacing: 'normal'
  },
  MsSanHeadingHeading1Bold: {
    fontFamily: msSansSerifBoldFont.style.fontFamily,
    fontSize: '40px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.2,
    letterSpacing: 'normal'
  },
  MontserratHeadingHeading2Extrabold: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '36px',
    fontWeight: '800',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.22,
    letterSpacing: '-0.72px'
  },
  MontserratHeadingHeading2Bold: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '36px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.22,
    letterSpacing: '-0.72px'
  },
  MontserratHeadingHeading2Medium: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '36px',
    fontWeight: '600',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.22,
    letterSpacing: '-0.72px'
  },
  MontserratHeadingHeading2Regular: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '36px',
    fontWeight: '500',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.22,
    letterSpacing: '-0.72px'
  },
  MsSanHeadingHeading2Regular: {
    fontFamily: msSansSerif1Font.style.fontFamily,
    fontSize: '36px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.22,
    letterSpacing: 'normal'
  },
  MsSanHeadingHeading2Bold: {
    fontFamily: msSansSerifBoldFont.style.fontFamily,
    fontSize: '36px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.22,
    letterSpacing: 'normal'
  },
  MontserratHeadingHeading3Extrabold: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '32px',
    fontWeight: '800',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.25,
    letterSpacing: '-0.64px'
  },
  MontserratHeadingHeading3Bold: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '32px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.25,
    letterSpacing: '-0.64px'
  },
  MontserratHeadingHeading3Medium: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '32px',
    fontWeight: '600',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.25,
    letterSpacing: '-0.64px'
  },
  MontserratHeadingHeading3Regular: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '32px',
    fontWeight: '500',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.25,
    letterSpacing: '-0.64px'
  },
  MsSanHeadingHeading3Regular: {
    fontFamily: msSansSerif1Font.style.fontFamily,
    fontSize: '32px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.25,
    letterSpacing: 'normal'
  },
  MsSanHeadingHeading3Bold: {
    fontFamily: msSansSerifBoldFont.style.fontFamily,
    fontSize: '32px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.25,
    letterSpacing: 'normal'
  },
  MontserratHeadingHeading4Extrabold: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '28px',
    fontWeight: '800',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.29,
    letterSpacing: '-0.56px'
  },
  MontserratHeadingHeading4Bold: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '28px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.29,
    letterSpacing: '-0.56px'
  },
  MontserratHeadingHeading4Medium: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '28px',
    fontWeight: '600',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.29,
    letterSpacing: '-0.56px'
  },
  MontserratHeadingHeading4Regular: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '28px',
    fontWeight: '500',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.29,
    letterSpacing: '-0.56px'
  },
  MsSanHeadingHeading4Regular: {
    fontFamily: msSansSerif1Font.style.fontFamily,
    fontSize: '28px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.29,
    letterSpacing: 'normal'
  },
  MsSanHeadingHeading4Bold: {
    fontFamily: msSansSerifBoldFont.style.fontFamily,
    fontSize: '28px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.29,
    letterSpacing: 'normal'
  },
  MontserratHeadingHeading5Extrabold: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '24px',
    fontWeight: '800',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.33,
    letterSpacing: '-0.48px'
  },
  MontserratHeadingHeading5Bold: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '24px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.33,
    letterSpacing: '-0.48px'
  },
  MontserratHeadingHeading5Medium: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '24px',
    fontWeight: '600',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.33,
    letterSpacing: '-0.48px'
  },
  MontserratHeadingHeading5Regular: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '24px',
    fontWeight: '500',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.33,
    letterSpacing: '-0.48px'
  },
  MsSanHeadingHeading5Regular: {
    fontFamily: msSansSerif1Font.style.fontFamily,
    fontSize: '24px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.33,
    letterSpacing: 'normal'
  },
  MsSanHeadingHeading5Bold: {
    fontFamily: msSansSerifBoldFont.style.fontFamily,
    fontSize: '24px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.33,
    letterSpacing: 'normal'
  },
  MontserratHeadingHeading6Extrabold: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '20px',
    fontWeight: '800',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.4,
    letterSpacing: '-0.4px'
  },
  MontserratHeadingHeading6Bold: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '20px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.4,
    letterSpacing: '-0.4px'
  },
  MontserratHeadingHeading6Medium: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '20px',
    fontWeight: '600',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.4,
    letterSpacing: '-0.4px'
  },
  MontserratHeadingHeading6Regular: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '20px',
    fontWeight: '500',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.4,
    letterSpacing: '-0.4px'
  },
  MsSanHeadingHeading6Regular: {
    fontFamily: msSansSerif1Font.style.fontFamily,
    fontSize: '20px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.4,
    letterSpacing: 'normal'
  },
  MsSanHeadingHeading6Bold: {
    fontFamily: msSansSerifBoldFont.style.fontFamily,
    fontSize: '20px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.4,
    letterSpacing: 'normal'
  },
  MontserratParagraphLargeBold: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '18px',
    fontWeight: '600',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.33,
    letterSpacing: 'normal'
  },
  MontserratParagraphLargeMedium: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '18px',
    fontWeight: '500',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.33,
    letterSpacing: 'normal'
  },
  MsSanParagraphLargeUnderline: {
    textDecoration: 'underline',
    fontFamily: msSansSerif1Font.style.fontFamily,
    fontSize: '18px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.33,
    letterSpacing: '0.36px'
  },
  MsSanParagraphLargeNormal: {
    fontFamily: msSansSerif1Font.style.fontFamily,
    fontSize: '18px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.33,
    letterSpacing: '0.36px'
  },
  MsSanParagraphLargeBold: {
    fontFamily: msSansSerifBoldFont.style.fontFamily,
    fontSize: '18px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.33,
    letterSpacing: '0.36px'
  },
  MontserratParagraphLargeSpecialItalics: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '18px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'italic',
    lineHeight: 1.33,
    letterSpacing: 'normal'
  },
  MontserratParagraphLargeSpecialUnderline: {
    textDecoration: 'underline',
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '18px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.33,
    letterSpacing: 'normal'
  },
  MontserratParagraphLargeSpecialStrikethrough: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '18px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.33,
    letterSpacing: 'normal',
    textDecoration: 'line-through'
  },
  MontserratParagraphLargeRegular: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '18px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.33,
    letterSpacing: 'normal'
  },
  MontserratParagraphMediumBold: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '16px',
    fontWeight: '600',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.38,
    letterSpacing: 'normal'
  },
  MontserratLabelLargeBold: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '16px',
    fontWeight: '600',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.13,
    letterSpacing: 'normal'
  },
  MontserratParagraphMediumMedium: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '16px',
    fontWeight: '500',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.38,
    letterSpacing: 'normal'
  },
  MontserratLabelLargeMedium: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '16px',
    fontWeight: '500',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.13,
    letterSpacing: 'normal'
  },
  MsSanParagraphMediumUnderline: {
    textDecoration: 'underline',
    fontFamily: msSansSerif1Font.style.fontFamily,
    fontSize: '16px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.38,
    letterSpacing: '0.32px'
  },
  MsSanParagraphMediumNormal: {
    fontFamily: msSansSerif1Font.style.fontFamily,
    fontSize: '16px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.38,
    letterSpacing: '0.32px'
  },
  MsSanLabelLargeNormal: {
    fontFamily: msSansSerif1Font.style.fontFamily,
    fontSize: '16px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.13,
    letterSpacing: '0.32px'
  },
  MsSanParagraphMediumBold: {
    fontFamily: msSansSerifBoldFont.style.fontFamily,
    fontSize: '16px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.38,
    letterSpacing: '0.32px'
  },
  MsSanLabelLargeBold: {
    fontFamily: msSansSerifBoldFont.style.fontFamily,
    fontSize: '16px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.13,
    letterSpacing: '0.32px'
  },
  MontserratParagraphMediumSpecialItalics: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '16px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'italic',
    lineHeight: 1.38,
    letterSpacing: 'normal'
  },
  MontserratLabelLargeSpecialItalics: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '16px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'italic',
    lineHeight: 1.13,
    letterSpacing: 'normal'
  },
  MontserratParagraphMediumSpecialUnderline: {
    textDecoration: 'underline',
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '16px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.38,
    letterSpacing: 'normal'
  },
  MontserratParagraphMediumSpecialStrikethrough: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '16px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.38,
    letterSpacing: 'normal',
    textDecoration: 'line-through'
  },
  MontserratParagraphMediumRegular: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '16px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.38,
    letterSpacing: 'normal'
  },
  MontserratLabelLargeSpecialUnderline: {
    textDecoration: 'underline',
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '16px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.13,
    letterSpacing: 'normal'
  },
  MontserratLabelLargeSpecialStrikethrough: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '16px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.13,
    letterSpacing: 'normal',
    textDecoration: 'line-through'
  },
  MontserratLabelLargeRegular: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '16px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.13,
    letterSpacing: 'normal'
  },
  MontserratParagraphSmallBold: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '14px',
    fontWeight: '600',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.29,
    letterSpacing: 'normal'
  },
  MontserratLabelMediumBold: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '14px',
    fontWeight: '600',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.14,
    letterSpacing: 'normal'
  },
  MontserratParagraphSmallMedium: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '14px',
    fontWeight: '500',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.29,
    letterSpacing: 'normal'
  },
  MontserratLabelMediumMedium: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '14px',
    fontWeight: '500',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.14,
    letterSpacing: 'normal'
  },
  MontserratParagraphSmallSpecialItalics: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '14px',
    fontWeight: '500',
    fontStretch: 'normal',
    fontStyle: 'italic',
    lineHeight: 1.29,
    letterSpacing: 'normal'
  },
  MsSanParagraphSmallUnderline: {
    textDecoration: 'underline',
    fontFamily: msSansSerif1Font.style.fontFamily,
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.29,
    letterSpacing: '0.28px'
  },
  MsSanParagraphSmallNormal: {
    fontFamily: msSansSerif1Font.style.fontFamily,
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.29,
    letterSpacing: '0.28px'
  },
  MsSanLabelMediumNormal: {
    fontFamily: msSansSerif1Font.style.fontFamily,
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.14,
    letterSpacing: '0.28px'
  },
  MsSanParagraphSmallBold: {
    fontFamily: msSansSerifBoldFont.style.fontFamily,
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.29,
    letterSpacing: '0.28px'
  },
  MsSanLabelMediumBold: {
    fontFamily: msSansSerifBoldFont.style.fontFamily,
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.14,
    letterSpacing: '0.28px'
  },
  MontserratLabelMediumSpecialItalics: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'italic',
    lineHeight: 1.14,
    letterSpacing: 'normal'
  },
  MontserratParagraphSmallSpecialUnderline: {
    textDecoration: 'underline',
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.29,
    letterSpacing: 'normal'
  },
  MontserratParagraphSmallSpecialStrikethrough: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.29,
    letterSpacing: 'normal',
    textDecoration: 'line-through'
  },
  MontserratParagraphSmallRegular: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.29,
    letterSpacing: 'normal'
  },
  MontserratLabelMediumSpecialUnderline: {
    textDecoration: 'underline',
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.14,
    letterSpacing: 'normal'
  },
  MontserratLabelMediumSpecialStrikethrough: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.14,
    letterSpacing: 'normal',
    textDecoration: 'line-through'
  },
  MontserratLabelMediumRegular: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.14,
    letterSpacing: 'normal'
  },
  MontserratParagraphXSmallBold: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '12px',
    fontWeight: '600',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.33,
    letterSpacing: 'normal'
  },
  MontserratLabelSmallBold: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '12px',
    fontWeight: '600',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.17,
    letterSpacing: 'normal'
  },
  MontserratParagraphXSmallMedium: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '12px',
    fontWeight: '500',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.33,
    letterSpacing: 'normal'
  },
  MontserratLabelSmallMedium: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '12px',
    fontWeight: '500',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.17,
    letterSpacing: 'normal'
  },
  MsSanParagraphXSmallUnderline: {
    textDecoration: 'underline',
    fontFamily: msSansSerif1Font.style.fontFamily,
    fontSize: '12px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.33,
    letterSpacing: '0.24px'
  },
  MsSanParagraphXSmallNormal: {
    fontFamily: msSansSerif1Font.style.fontFamily,
    fontSize: '12px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.33,
    letterSpacing: '0.24px'
  },
  MsSanLabelSmallNormal: {
    fontFamily: msSansSerif1Font.style.fontFamily,
    fontSize: '12px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.17,
    letterSpacing: '0.24px'
  },
  MsSanParagraphXsmallBold: {
    fontFamily: msSansSerifBoldFont.style.fontFamily,
    fontSize: '12px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.33,
    letterSpacing: '0.24px'
  },
  MsSanLabelSmallBold: {
    fontFamily: msSansSerifBoldFont.style.fontFamily,
    fontSize: '12px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.17,
    letterSpacing: '0.24px'
  },
  MontserratParagraphXSmallSpecialItalics: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '12px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'italic',
    lineHeight: 1.33,
    letterSpacing: 'normal'
  },
  MontserratLabelSmallSpecialItalics: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '12px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'italic',
    lineHeight: 1.17,
    letterSpacing: 'normal'
  },
  MontserratParagraphXSmallSpecialUnderline: {
    textDecoration: 'underline',
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '12px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.33,
    letterSpacing: 'normal'
  },
  MontserratParagraphXSmallSpecialStrikethrough: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '12px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.33,
    letterSpacing: 'normal',
    textDecoration: 'line-through'
  },
  MontserratParagraphXSmallRegular: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '12px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.33,
    letterSpacing: 'normal'
  },
  MontserratLabelSmallSpecialUnderline: {
    textDecoration: 'underline',
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '12px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.17,
    letterSpacing: 'normal'
  },
  MontserratLabelSmallSpecialStrikethrough: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '12px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.17,
    letterSpacing: 'normal',
    textDecoration: 'line-through'
  },
  MontserratLabelSmallRegular: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '12px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.17,
    letterSpacing: 'normal'
  },
  MontserratLabelXSmallBold: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '10px',
    fontWeight: '600',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.2,
    letterSpacing: 'normal'
  },
  MontserratLabelXSmallMedium: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '10px',
    fontWeight: '500',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.2,
    letterSpacing: 'normal'
  },
  MsSanLabelXSmallNormal: {
    fontFamily: msSansSerif1Font.style.fontFamily,
    fontSize: '10px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.2,
    letterSpacing: '0.2px'
  },
  MsSanLabelXSmallBold: {
    fontFamily: msSansSerifBoldFont.style.fontFamily,
    fontSize: '10px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.2,
    letterSpacing: '0.2px'
  },
  MontserratLabelXSmallSpecialItalics: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '10px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'italic',
    lineHeight: 1.2,
    letterSpacing: 'normal'
  },
  MontserratLabelXSmallSpecialUnderline: {
    textDecoration: 'underline',
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '10px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.2,
    letterSpacing: 'normal'
  },
  MontserratLabelXSmallSpecialStrikethrough: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '10px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.2,
    letterSpacing: 'normal',
    textDecoration: 'line-through'
  },
  MontserratLabelXSmallRegular: {
    fontFamily: montserratFont.style.fontFamily,
    fontSize: '10px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.2,
    letterSpacing: 'normal'
  }
})

export default typography
