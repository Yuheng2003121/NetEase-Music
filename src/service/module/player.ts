import hyRequest from '..'

export function fetchSongDetail(ids: number) {
  return hyRequest.request({
    url: 'api/song/detail',
    params: {
      ids
    }
  })
}

export function fetchSongLyric(id: number) {
  return hyRequest.request({
    url: 'api/lyric',
    params: {
      id
    }
  })
}