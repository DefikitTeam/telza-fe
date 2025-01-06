export function getMentionUserIds(text: string) {
  const mentionPattern = /@\w+_\${([a-z0-9]+)}/g

  const userIds = Array.from(text.matchAll(mentionPattern), (match) => match[1])

  return userIds
}
