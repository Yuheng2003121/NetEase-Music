import hyRequest from '..'

export function fetchBanner() {
  return hyRequest.request({
    url: '/api/banner'
  })
}

export function fetchHotRecommend(limit: number) {
  return hyRequest.request({
    url: '/api/personalized',
    params: {
      limit
    }
  })
}

export function fetchNewAlbum(limit: number = 10) {
  return hyRequest.request({
    url: '/api/album/newest',
    params: {
      limit
    }
  })
}

export function fetchPlaylistDetail(id: number) {
  return hyRequest.request({
    url: '/api/playlist/detail',
    params: {
      id
    }
  })
}

export function fetchArtistList(limit: number = 5) {
  return hyRequest.request({
    url: '/api/artist/list',
    params: {
      limit
    }
  })
}