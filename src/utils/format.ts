import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

// 扩展 duration 插件
dayjs.extend(duration)

export function formatCount(count: number) {
  if (count > 100000) {
    return Math.floor(count / 10000) + '万'
  } else {
    return count
  }
}

export function getPlayUrl(id: number) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}

export const formatMilliseconds = (ms: number): string => {
  const duration = dayjs.duration(ms)
  return `${duration.minutes().toString().padStart(2, '0')}:${duration.seconds().toString().padStart(2, '0')}`
}

const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/

export interface ILyric {
  time: number,
  text: string
}
export function parseLyric(lyricString: string) {
  const lineStrings = lyricString.split('\n')

  const lyrics: ILyric[] = []
  for (const line of lineStrings) {
    if (line) {
      const result:any = parseExp.exec(line)
      if (!result) continue
      const time1 = result[1] * 60 * 1000
      const time2 = result[2] * 1000
      const time3 = result[3].length === 3 ? result[3] * 1 : result[3] * 10
      const time = time1 + time2 + time3
      const text: string = line.replace(parseExp, '').trim()
      const lineObj: ILyric = { time, text }
      lyrics.push(lineObj)
    }
  }
  return lyrics
}

export function getRandomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min
}