export function getBaseImgUrl(enpointImg?: string) {
  return process.env.NEXT_PUBLIC_ASSETS_URI + '/images/gems-fun' + enpointImg
}

export function getDefaultImageUrl() {
  return process.env.NEXT_PUBLIC_ASSETS_URI + '/images/gems-fun/default-img.png'
}

export function getDefaultAvatarImage() {
  return process.env.NEXT_PUBLIC_ASSETS_URI + '/images/gems-fun/avatar-default.png'
}
