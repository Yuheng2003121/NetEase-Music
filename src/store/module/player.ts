import { fetchSongDetail, fetchSongLyric } from '@/service/module/player'
import { parseLyric, type ILyric } from '@/utils/format'
import { createSlice, type Dispatch } from '@reduxjs/toolkit'
import type { StateType } from '..'
import type { PlayModeType } from '@/types'

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    currentSong: {} as any,
    lyrics: [] as ILyric[],
    lyricIndex: -1,
    playSongList: [
      {
        name: '杨过 (Live)',
        mainTitle: '杨过 ',
        additionalTitle: '(Live)',
        id: 2717610712,
        pst: 0,
        t: 0,
        ar: [
          {
            id: 12371041,
            name: 'Vinz-T',
            tns: [],
            alias: []
          }
        ],
        alia: [],
        pop: 100,
        st: 0,
        rt: '',
        fee: 8,
        v: 38,
        crbt: null,
        cf: '',
        al: {
          id: 275305641,
          name: '新说唱2025 第三期',
          picUrl:
            'http://p2.music.126.net/lxRnXlqHSBHRuc_QWiPcxQ==/109951171314859809.jpg',
          tns: [],
          pic_str: '109951171314859809',
          pic: 109951171314859800
        },
        dt: 94020,
        h: {
          br: 320004,
          fid: 0,
          size: 3763245,
          vd: -45239,
          sr: 48000
        },
        m: {
          br: 192004,
          fid: 0,
          size: 2257965,
          vd: -42635,
          sr: 48000
        },
        l: {
          br: 128004,
          fid: 0,
          size: 1505325,
          vd: -40950,
          sr: 48000
        },
        sq: {
          br: 923675,
          fid: 0,
          size: 10857366,
          vd: -45238,
          sr: 48000
        },
        hr: {
          br: 1692983,
          fid: 0,
          size: 19898709,
          vd: -45238,
          sr: 48000
        },
        a: null,
        cd: '01',
        no: 2,
        rtUrl: null,
        ftype: 0,
        rtUrls: [],
        djId: 0,
        copyright: 0,
        s_id: 0,
        mark: 17716748288,
        originCoverType: 0,
        originSongSimpleData: null,
        tagPicList: null,
        resourceState: true,
        version: 4,
        songJumpInfo: null,
        entertainmentTags: null,
        awardTags: null,
        displayTags: null,
        single: 0,
        noCopyrightRcmd: null,
        alg: null,
        displayReason: null,
        rtype: 0,
        rurl: null,
        mst: 9,
        cp: 4585662,
        mv: 0,
        publishTime: 0
      },
      {
        name: '为何幸福如履薄冰',
        mainTitle: null,
        additionalTitle: null,
        id: 2699501152,
        pst: 0,
        t: 0,
        ar: [{ id: 97880645, name: '氟西汀海', tns: [], alias: [] }],
        alia: [],
        pop: 100,
        st: 0,
        rt: '',
        fee: 8,
        v: 42,
        crbt: null,
        cf: '',
        al: {
          id: 270323199,
          name: '为何幸福如履薄冰',
          picUrl:
            'http://p2.music.126.net/LhvJsCF7E3SQtVb898LDpQ==/109951170917877591.jpg',
          tns: [],
          pic_str: '109951170917877591',
          pic: 109951170917877580
        },
        dt: 166987,
        h: { br: 320000, fid: 0, size: 6681645, vd: -51570, sr: 48000 },
        m: { br: 192000, fid: 0, size: 4009005, vd: -48933, sr: 48000 },
        l: { br: 128000, fid: 0, size: 2672685, vd: -47112, sr: 48000 },
        sq: { br: 861339, fid: 0, size: 17982254, vd: -51572, sr: 48000 },
        hr: null,
        a: null,
        cd: '01',
        no: 1,
        rtUrl: null,
        ftype: 0,
        rtUrls: [],
        djId: 0,
        copyright: 0,
        s_id: 0,
        mark: 8192,
        originCoverType: 1,
        originSongSimpleData: null,
        tagPicList: null,
        resourceState: true,
        version: 8,
        songJumpInfo: null,
        entertainmentTags: null,
        awardTags: null,
        displayTags: null,
        single: 0,
        noCopyrightRcmd: null,
        alg: null,
        displayReason: null,
        rtype: 0,
        rurl: null,
        mst: 9,
        cp: 0,
        mv: 0,
        publishTime: 1745683200000,
        tns: ['i want']
      },
      {
        name: 'DTM',
        mainTitle: null,
        additionalTitle: null,
        id: 2637717158,
        pst: 0,
        t: 0,
        ar: [
          { id: 12371041, name: 'Vinz-T', tns: [], alias: [] },
          { id: 12275767, name: 'step.jad依加', tns: [], alias: [] }
        ],
        alia: [],
        pop: 100,
        st: 0,
        rt: '',
        fee: 8,
        v: 40,
        crbt: null,
        cf: '',
        al: {
          id: 252186773,
          name: 'Six+Six Mixtape',
          picUrl:
            'http://p1.music.126.net/1-FG2YMk_HDi8GUuw5vsMw==/109951170091483092.jpg',
          tns: [],
          pic_str: '109951170091483092',
          pic: 109951170091483090
        },
        dt: 195754,
        h: { br: 320000, fid: 0, size: 7832685, vd: -41184, sr: 48000 },
        m: { br: 192000, fid: 0, size: 4699629, vd: -38575, sr: 48000 },
        l: { br: 128000, fid: 0, size: 3133101, vd: -36929, sr: 48000 },
        sq: { br: 895938, fid: 0, size: 21922964, vd: -41850, sr: 48000 },
        hr: { br: 1655662, fid: 0, size: 40512874, vd: -41270, sr: 48000 },
        a: null,
        cd: '01',
        no: 2,
        rtUrl: null,
        ftype: 0,
        rtUrls: [],
        djId: 0,
        copyright: 0,
        s_id: 0,
        mark: 17716748288,
        originCoverType: 1,
        originSongSimpleData: null,
        tagPicList: null,
        resourceState: true,
        version: 6,
        songJumpInfo: null,
        entertainmentTags: null,
        awardTags: null,
        displayTags: null,
        single: 0,
        noCopyrightRcmd: null,
        alg: null,
        displayReason: null,
        rtype: 0,
        rurl: null,
        mst: 9,
        cp: 0,
        mv: 22631211,
        publishTime: 0
      }
    ] as any[],
    playSongIndex: -1,
    // playMode: 0, //0:顺序, 1:随机  2:单曲循环
    playMode: 0 as PlayModeType,
    isPlaying: false,
  },
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload
    },
    changeLyricsAction(state, { payload }) {
      state.lyrics = payload
    },
    changeLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload
    },
    changePlaySongListAction(state, { payload }) {
      state.playSongList = payload
    },
    changePlaySongIndexAction(state, { payload }) {
      state.playSongIndex = payload
    },
    changePlayModeAction(state, { payload }) {
      state.playMode = payload
    },
    changeIsPlayingAction(state, { payload }) {
      state.isPlaying = payload
    },
  }
})

export const {
  changeCurrentSongAction,
  changeLyricsAction,
  changeLyricIndexAction,
  changePlaySongListAction,
  changePlaySongIndexAction,
  changePlayModeAction,
  changeIsPlayingAction
} = playerSlice.actions
export const fetchCurrentSongAction = (id: number) => {
  return async (dispatch: Dispatch, getState: () => StateType) => {
    // //1.获取歌曲信息
    // const detailRes = await fetchSongDetail(id)
    // if (!detailRes.songs.length) return
    // // console.log(res);
    // dispatch(changeCurrentSongAction(detailRes.songs[0]))

    //1.准备播放某一首哥, 从列表尝试是否可以获取到这首歌, 两种情况
    const playSongList = getState().player.playSongList
    const songIndex = playSongList.findIndex((item) => item.id === id)
    if (songIndex === -1) {
      //不可以从播放列表获取到
      const detailRes = await fetchSongDetail(id)
      if (!detailRes.songs.length) return

      //新添加到播放列表中
      const newPlaySongList = [...playSongList, detailRes.songs[0]]
      dispatch(changeCurrentSongAction(detailRes.songs[0]))
      dispatch(changePlaySongListAction(newPlaySongList))
      dispatch(changePlaySongIndexAction(newPlaySongList.length - 1))
    } else {
      //可以从播放列表获取到
      const song = playSongList[songIndex]
      dispatch(changeCurrentSongAction(song))
      dispatch(changePlaySongIndexAction(songIndex))
    }

    // 2.获取歌词信息
    // const promises: Promise<any>[] = [fetchSongDetail(id), fetchSongLyric(id)]
    // const [detailRes, lyricRes] = await Promise.all(promises)

    // if (!detailRes.songs.length) return
    // console.log(detailRes.songs[0])
    // dispatch(changeCurrentSongAction(detailRes.songs[0]))

    const lyricRes = await fetchSongLyric(id)
    const lyricString = lyricRes?.lrc?.lyric
    if (!lyricString) return
    //对歌词解析
    const lyrics: ILyric[] = parseLyric(lyricString)
    dispatch(changeLyricsAction(lyrics))
    dispatch(changeLyricIndexAction(-1)) //初始化歌词索引
  }
}


export const changeMusicAction = (isNext: number, isLoop: boolean = false) => {
  return async (dispatch: Dispatch, getState: () => StateType) => {
    const playMode = getState().player.playMode
    const songIndex = getState().player.playSongIndex
    const songList = getState().player.playSongList

    //根据不同的模式计算不同的下一首歌曲的素引
    //0:顺序, 1:随机  2:单曲循环(照样切换下一首)
    let newIndex: number;
    if (playMode === 1) {
      newIndex = Math.floor(Math.random() * songList.length)
    }else {
      if (!isLoop) newIndex = (songIndex + isNext + songList.length) % songList.length
      else newIndex = songIndex
    }
    const song = songList[newIndex]
    dispatch(changeCurrentSongAction(song)) 
    dispatch(changePlaySongIndexAction(newIndex))

    //请求新的歌词
    const lyricRes = await fetchSongLyric(song.id)
    const lyricString = lyricRes?.lrc?.lyric
    if (!lyricString) return
    //对歌词解析
    const lyrics: ILyric[] = parseLyric(lyricString)
    dispatch(changeLyricsAction(lyrics))
    
  }
}

export default playerSlice.reducer
