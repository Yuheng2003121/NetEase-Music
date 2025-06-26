import { fetchArtistList, fetchBanner, fetchHotRecommend, fetchNewAlbum, fetchPlaylistDetail } from "@/service/module/recommend";
import { createSlice, type Dispatch } from "@reduxjs/toolkit";

const recommendSlice = createSlice({
  name: 'recommend',
  initialState: {
    banners: [],
    hotRecommends: [],
    newAlbums: [],
    rankingDetail: [], //[{name:飙升榜...}, {name:'新歌榜}, {name: '原创榜'}]
    settleSingers: [],
  },
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    },
    changeHotRecommendsAction(state, { payload }) {
      state.hotRecommends = payload
    },
    changeNewAlbumsAction(state, { payload }) {
      state.newAlbums = payload
    },
    changeRankingDetailAction(state, { payload }) {
      state.rankingDetail = payload
    },
    changeSettleSingersAction(state, { payload }) {
      state.settleSingers = payload
    }
  }
})

export const {
  changeBannersAction,
  changeHotRecommendsAction,
  changeNewAlbumsAction,
  changeRankingDetailAction,
  changeSettleSingersAction
} = recommendSlice.actions

export function fetchBannerAction() {
  return async (dispatch: Dispatch) => {
   try {
    const res = await fetchBanner()
    console.log(res);
    
    dispatch(changeBannersAction(res.banners))
   } catch (error) {
    console.error(error)
   }
  }
}

export function fetchHotRecommendAction(limit: number) {
  return async (dispatch: Dispatch) => {
    try {
      const res = await fetchHotRecommend(limit)
      dispatch(changeHotRecommendsAction(res.result))
      
    } catch (error) {
      console.error(error)
    }
  }
}

export function fetchNewAlbumAction(limit: number) {
  return async (dispatch: Dispatch) => {
    try {
      const res = await fetchNewAlbum(limit)
      // console.log(res.albums);
      
      dispatch(changeNewAlbumsAction(res.albums))
    } catch (error) {
      console.error(error)
    }
  }
}

const rankingIds = [19723756, 3779629, 2884035]
export function fetchRankingDetailAction() {
  return async (dispatch: Dispatch) => {
    // for (const id of rankingIds) {
    //   const res = await fetchPlaylistDetailApi(id)
    //   dispatch(fetchRankingDetailAction(res.playlist))
    // }

    //保证数组顺序: rankingDetail: [{name:飙升榜...}, {name:'新歌榜}, {name: '原创榜'}]
    const promises: Promise<any>[] = []
    rankingIds.forEach(id => {
      promises.push(fetchPlaylistDetail(id))
    })
    try {
      const res = await Promise.all(promises) //res = [{...}, {...}, {...}}]
      const rankingDetails = res.filter(item => item.playList).map((item) => item.playlist) // filter是为了只找有playlist的
      dispatch(changeRankingDetailAction(rankingDetails))
    } catch (_) {
      console.error(_)
    }
    
  }
}

export function fetchArtistListAction(limit:number) {
  return async (dispatch: Dispatch) => {
    try {
      const res = await fetchArtistList(limit)
      // console.log(res);
      dispatch(changeSettleSingersAction(res.artists))
    } catch (_) {
      console.error(_)
    }
    
  }
}

export default recommendSlice.reducer