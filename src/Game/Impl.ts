import { GetMergedEmptyPosLists, GetRelatedPos, InitialOpenedPos } from './Compute'
import { FAILED, GAME_STATUS, ON_GOING, SUCCESS } from './Data'
import { TOpened } from './Element'
import { LoseEnding, WinEnding } from './Ending'
import { RenderStage } from './Render'
import { Decrement, GetAllPos } from '../utils'

type GameStatusChange<MergedEmptyPosList extends string[], MergedEmptyPosWithRelativesList extends string[], MinePos extends string, Max extends number, OriginalStage extends TOpened[][], OpenedPos extends string, FlagPos extends string> = [OpenedPos & MinePos] extends [never]
  ? [Exclude<GetAllPos<Max>, MinePos>] extends [OpenedPos & Exclude<GetAllPos<Max>, MinePos>]
    ? MineSweeper<
        GetAllPos<Max>,
        FlagPos,
        SUCCESS,
        Max,
        MergedEmptyPosList,
        MergedEmptyPosWithRelativesList,
        MinePos,
        OriginalStage
      >
    : MineSweeper<
        OpenedPos,
        FlagPos,
        ON_GOING,
        Max,
        MergedEmptyPosList,
        MergedEmptyPosWithRelativesList,
        MinePos,
        OriginalStage
      >
  : MineSweeper<
      GetAllPos<Max>,
      FlagPos,
      FAILED,
      Max,
      MergedEmptyPosList,
      MergedEmptyPosWithRelativesList,
      MinePos,
      OriginalStage
    >;


type UnopenCommander<
  TargetPos extends string,
  OpenedPos extends string,
  FlagPos extends string,
  Max extends number,
  MergedEmptyPosList extends string[],
  MergedEmptyPosWithRelativesList extends string[],
  MinePos extends string,
  OriginalStage extends TOpened[][],
> = {
  open: GameStatusChange<
    MergedEmptyPosList,
    MergedEmptyPosWithRelativesList,
    MinePos,
    Max,
    OriginalStage,
    OpenedPos | GetRelatedPos<TargetPos, MergedEmptyPosList, MergedEmptyPosWithRelativesList, MinePos>,
    Exclude<FlagPos, GetRelatedPos<TargetPos, MergedEmptyPosList, MergedEmptyPosWithRelativesList, MinePos>>
  >;
  flag: MineSweeper<
    OpenedPos,
    FlagPos | TargetPos,
    ON_GOING,
    Max,
    MergedEmptyPosList,
    MergedEmptyPosWithRelativesList,
    MinePos,
    OriginalStage
  >;
};

type FlagCommander<
  TargetPos extends string,
  OpenedPos extends string,
  FlagPos extends string,
  Max extends number,
  MergedEmptyPosList extends string[],
  MergedEmptyPosWithRelativesList extends string[],
  MinePos extends string,
  OriginalStage extends TOpened[][],
> = {
  unflag: MineSweeper<
    OpenedPos,
    Exclude<FlagPos, TargetPos>,
    ON_GOING,
    Max,
    MergedEmptyPosList,
    MergedEmptyPosWithRelativesList,
    MinePos,
    OriginalStage
  >
};

type PosSelector<
  OpenedPos extends string,
  FlagPos extends string,
  Max extends number,
  MergedEmptyPosList extends string[],
  MergedEmptyPosWithRelativesList extends string[],
  MinePos extends string,
  OriginalStage extends TOpened[][]
> = {
  [K in Exclude<GetAllPos<Max>, OpenedPos>]: [K] extends [FlagPos]
    ? FlagCommander<
        K,
        OpenedPos,
        FlagPos,
        Max,
        MergedEmptyPosList,
        MergedEmptyPosWithRelativesList,
        MinePos,
        OriginalStage
      >
    : UnopenCommander<
        K,
        OpenedPos,
        FlagPos,
        Max,
        MergedEmptyPosList,
        MergedEmptyPosWithRelativesList,
        MinePos,
        OriginalStage
      >
};

type MineSweeper<
  OpenedPos extends string,
  FlagPos extends string,
  GameStatus extends GAME_STATUS,
  Max extends number,
  MergedEmptyPosList extends string[],
  MergedEmptyPosWithRelativesList extends string[],
  MinePos extends string,
  OriginalStage extends TOpened[][],
> = {
  [K in RenderStage<OriginalStage, OpenedPos, FlagPos>]: GameStatus extends ON_GOING
    ? PosSelector<
        OpenedPos, FlagPos, Max,
        MergedEmptyPosList, MergedEmptyPosWithRelativesList, MinePos,
        OriginalStage
      >
    : GameStatus extends FAILED
      ? LoseEnding
      : GameStatus extends SUCCESS
        ? WinEnding
        : 'err: Something wrong'
};

export type StartStage<Stages extends TOpened[][][], InitPos extends string, StageIndex extends number> = {
  start: Stages[Decrement<StageIndex>] extends infer TargetStage extends TOpened[][]
    ? GetMergedEmptyPosLists<TargetStage> extends [infer MergedEmptyPosList extends string[], infer MergedEmptyPosWithRelativesList extends string[], infer MinePos extends string]
      ? MineSweeper<
          InitialOpenedPos<MergedEmptyPosWithRelativesList, InitPos>,
          '',
          ON_GOING,
          TargetStage[0]['length'],
          MergedEmptyPosList,
          MergedEmptyPosWithRelativesList,
          MinePos,
          TargetStage
        >
      : `err: EmptyPosList data is invalid`
    : `err: stage${StageIndex} data is invalid`
};