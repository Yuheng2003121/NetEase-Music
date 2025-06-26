import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './module/counter'
import recommendReducer from './module/recommend'
import playerReducer from './module/player'
import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    recommend: recommendReducer,
    player: playerReducer,
  }
})

//封装useSelector, 为了指定state的类型, 不会报错
export type StateType = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector

//封装useDispacth, 为了指定dispatch的类型(可选)
type DispatchType = typeof store.dispatch
export const useAppDispatch: () => DispatchType = useDispatch


export default store