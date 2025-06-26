const PlayMode = {
  order: 0 as const,
  random: 1 as const,
  loop: 2 as const
}

type PlayModeType =
  | typeof PlayMode.order
  | typeof PlayMode.random
  | typeof PlayMode.loop

export { PlayMode, type PlayModeType }
