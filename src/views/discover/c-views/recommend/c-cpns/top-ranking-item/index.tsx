import { useAppDispatch } from '@/store';
import { changeIsPlayingAction, fetchCurrentSongAction } from '@/store/module/player';
import { FolderAddOutlined, PlayCircleOutlined, PlusOutlined} from '@ant-design/icons';
import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const RankingItemWrapper = styled.div<{ theme: any }>`
  flex: 1;
  padding: 20px 0 0 20px;
  .header {
    height: 100px;
    display: flex;
    gap: 10px;

    .image {
      position: relative;
      width: 80px;
      height: 80px;
      img {
        width: 100%;
        height: 100%;
      }

      .cover {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }

    .info {
      margin-top: 10px;

      .name {
        font-size: 14px;
        font-weight: 700;
        color: #333;
      }

      .btn {
        display: inline-block;
        /* text-indent: -9999px; */
        font-size: 22px;
        color: #999;
        font-weight: 900;
        width: 22px;
        height: 22px;
        margin: 8px 10px 0 0;
        cursor: pointer;

        &:hover {
          color: #333;
        }
      }
    }
  }

  .list {
    .item {
      height: 32px;
      display: flex;
      align-items: center;

      .index {
        margin-right: 10px;
        font-size: 16px;
        text-align: center;
        width: 20px;
      }

      &:nth-child(-n + 3) .index {
        font-size: 20px;
        color: #c10d0c;
      }

      .info {
        display: flex;
        align-items: center;
        width: 170px;

        .name {
          cursor: pointer;
          flex: 1;
          ${(props) => props.theme.mixin.textNoWrap};

          &:hover {
            text-decoration: underline;
          }
        }

        .operator {
          width: 82px;
          display: flex;
          /* display: none; */
          gap: 10px;
          font-size: 17px;
          color: #999;

          .btn {
            &:hover {
              color: #333;
            }
          }
        }

        &:hover {
          .operator {
            display: flex;
          }
        }
      }
    }
  }

  .footer {
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: end;
    padding-right: 15px;

  }
`

interface Props {
  children?: ReactNode;
  playList?: any;
}

const RankingItem: React.FC<Props> = memo((props) => {
  const { playList } = props
  const dispatch = useAppDispatch()
  function handlePlayClick(id: number) {
    dispatch(fetchCurrentSongAction(id))
    dispatch(changeIsPlayingAction(true))
  }
  
  return (
    <RankingItemWrapper>
      <div className="header">
        <div className="image">
          <img src={playList.coverImgUrl} alt="" />
          <a href="#" className="cover sprite_cover"></a>
        </div>
        <div className="info">
          <div className="name">{playList.name}</div>
          <div className="btns">
            <PlayCircleOutlined className="btn play" />
            <FolderAddOutlined className="btn favor" />
          </div>
        </div>
      </div>
      <ul className="list">
        {playList.tracks?.slice(0, 10).map((item: any, index: number) => {
          return (
            <li className="item" key={item?.id}>
              <span className="index">{index + 1}</span>
              <div className="info">
                <span className="name">{item.name}</span>
                <span className="operator">
                  <PlayCircleOutlined className="btn play" onClick={() => handlePlayClick(item?.id)}/>
                  <PlusOutlined className="btn add" />
                  <FolderAddOutlined className="btn favor" />
                </span>
              </div>
            </li>
          )
        })}
      </ul>
      <div className="footer">
        <Link to="/discover/ranking">查看全部 &gt;</Link>
      </div>
    </RankingItemWrapper>
  )
})

export default RankingItem
