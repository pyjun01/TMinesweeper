import { TMine, TEmpty, TOpened } from './Element';
import { Decrement, Flatten, Increment, GetAllPos, GetNumberListFromPos, IsOverlaped } from '../utils';

type GetEmptyPosListFromBoardRow<Row extends string[], X extends number, Y extends number, Result extends string[] = []> = Row extends [infer Tg, ...infer Rest]
  ? Rest extends string[]
    ? GetEmptyPosListFromBoardRow<Rest, Increment<X>, Y, Tg extends TEmpty ? [...Result, `${Increment<X>}x${Increment<Y>}`] : [...Result]>
    : Result
  : Result;
type GetEmptyPosMatrixFromBoard<Board extends string[][], Result extends string[][] = [], Y extends number = 0> = Board extends [infer Row, ...infer Rest]
  ? Row extends string[]
    ? Rest extends string[][]
      ? GetEmptyPosMatrixFromBoard<Rest, [...Result, GetEmptyPosListFromBoardRow<Row, 0, Y>], Increment<Y>>
      : never
    : never
  : Result;

type CheckPosIsEmpty<X extends number, Y extends number, Ex extends TOpened[][]> = X extends -1
  ? false
  : Y extends -1
    ? false
    : [[Ex[Decrement<Y>]] extends [never] ? undefined : Ex[Decrement<Y>]] extends [undefined]
      ? false
      : [Ex[Decrement<Y>][Decrement<X>]] extends [TEmpty]
        ? true
        : false;

type TieEmptyPosWithNeighborEmptyPos<Value extends string, Ex extends TOpened[][]> = [GetNumberListFromPos<Value>] extends [[infer X, infer Y]]
  ? [X] extends [number]
    ? [Y] extends [number]
      ? Extract<
          Exclude<
            | Value
            | (CheckPosIsEmpty<Decrement<X>, Decrement<Y>, Ex> extends true ? `${Decrement<X>}x${Decrement<Y>}` : '')
            | (CheckPosIsEmpty<Decrement<X>, Y, Ex> extends true ? `${Decrement<X>}x${Y}` : '')
            | (CheckPosIsEmpty<Decrement<X>, Increment<Y>, Ex> extends true ? `${Decrement<X>}x${Increment<Y>}` : '')
            | (CheckPosIsEmpty<X, Decrement<Y>, Ex> extends true ? `${X}x${Decrement<Y>}` : '')
            | (CheckPosIsEmpty<X, Increment<Y>, Ex> extends true ? `${X}x${Increment<Y>}` : '')
            | (CheckPosIsEmpty<Increment<X>, Decrement<Y>, Ex> extends true ? `${Increment<X>}x${Decrement<Y>}` : '')
            | (CheckPosIsEmpty<Increment<X>, Y, Ex> extends true ? `${Increment<X>}x${Y}` : '')
            | (CheckPosIsEmpty<Increment<X>, Increment<Y>, Ex> extends true ? `${Increment<X>}x${Increment<Y>}` : ''),
            ''
          >,
          GetAllPos<Ex[0]['length']>
        >
      : never
    : never
  : never;

type TieNeighborEmptyPos<
  List extends string[],
  Min extends number,
  Max extends number,
  Ex extends TOpened[][],
  Result extends string[] = []
> = List extends [infer Tg, ...infer Rest]
  ? [Rest] extends [string[]]
    ? [Tg] extends [string]
      ? TieNeighborEmptyPos<Rest, Min, Max, Ex, [...Result, TieEmptyPosWithNeighborEmptyPos<Tg, Ex>]>
      : never
    : never
  : Result;

type MergeOverlapedPos<Result extends string, Siblings extends string[]> = Siblings extends [infer Tg, ...infer Rest]
  ? [Tg] extends [string]
    ? Rest extends string[]
      ? MergeOverlapedPos<[true] extends [IsOverlaped<Result, Tg>] ? [Result | Tg][0] : Result, Rest>
      : never
    : never
  : Result;

type RemoveOverlapedPos<Result extends string, Siblings extends string[], Output extends string[]> = Siblings extends [infer Tg, ...infer Rest]
  ? [Tg] extends [string]
    ? Rest extends string[]
      ? [true] extends [IsOverlaped<Result, Tg>]
        ? RemoveOverlapedPos<[Result | Tg][0], Rest, Output>
        : RemoveOverlapedPos<Result, Rest, [...Output, Tg]>
      : never
    : never
  : Output;

type MergeOverlapedEmptyPos<List extends string[], Result extends string[] = []> = List extends [infer Tg, ...infer Rest]
  ? [Tg] extends [string]
    ? Rest extends string[]
      ? MergeOverlapedEmptyPos<RemoveOverlapedPos<Tg, Rest, []>, [...Result, MergeOverlapedPos<Tg, Rest>]>
      : never
    : never
  : Result;

type GetNeighborNumber<N extends number, Min extends number, Max extends number> = N extends Min
  ? N | Increment<N>
  : N extends Max
    ? Decrement<N> | N
    : Decrement<N> | N | Increment<N>;

type TieAnyNeighborPos<Value extends string, Min extends number, Max extends number> = Exclude<
  {
    [K in Value]: [GetNumberListFromPos<K>] extends [[infer X, infer Y]]
      ? [X] extends [number]
        ? [Y] extends [number]
          ? `${GetNeighborNumber<X, Min, Max>}x${GetNeighborNumber<Y, Min, Max>}`
          : ''
        : ''
      : '';
  }[Value],
  ''
>;

type TieNeighborPos<List extends string[], Min extends number, Max extends number, Result extends string[] = []> = List extends [infer Tg, ...infer Rest]
  ? [Rest] extends [string[]]
    ? [Tg] extends [string]
      ? TieNeighborPos<Rest, Min, Max, [...Result, TieAnyNeighborPos<Tg, Min, Max>]>
      : never
    : Result
  : Result;

type GetMinePosFromBoardRow<Row extends TOpened[], X extends number, Y extends number, Result extends string = ''> = Row extends [infer Tg, ...infer Rest]
  ? [Rest] extends [TOpened[]]
    ? GetMinePosFromBoardRow<Rest, Increment<X>, Y, [Tg] extends [TMine] ? Result | `${Increment<X>}x${Increment<Y>}` : Result>
    : Result
  : Result;
type GetMinePos<Stage extends TOpened[][], Result extends string = '', Y extends number = 0> = Stage extends [infer Row, ...infer Rest]
  ? [Row] extends [TOpened[]]
    ? [Rest] extends [TOpened[][]]
      ? GetMinePos<Rest, Result | GetMinePosFromBoardRow<Row, 0, Y>, Increment<Y>>
      : never
    : never
  : Exclude<Result, ''>;

export type GetMergedEmptyPosLists<Stage extends TOpened[][], Min extends number = 1, Max extends number = Stage[0]['length']> = Flatten<GetEmptyPosMatrixFromBoard<Stage>> extends infer EmptyPosList extends string[]
  ? TieNeighborEmptyPos<EmptyPosList, Min, Max, Stage> extends infer TiedEmptyPosList extends string[]
    ? MergeOverlapedEmptyPos<TiedEmptyPosList> extends infer MergedEmptyPosList extends string[]
      ? TieNeighborPos<MergedEmptyPosList, Min, Max> extends infer MergedEmptyPosWithRelativesList extends string[]
        ? GetMinePos<Stage> extends infer MinePos extends string
          ? [MergedEmptyPosList, MergedEmptyPosWithRelativesList, MinePos]
          : never
        : never
      : never
    : never
  : never;

// for initial position
export type InitialOpenedPos<
  MergedEmptyPosWithRelativesList extends string[],
  InitPos extends string
> = MergedEmptyPosWithRelativesList extends [infer Tg extends string, ...infer Rest extends string[]]
  ? [true] extends [IsOverlaped<Tg, InitPos>]
    ? Tg
    : InitialOpenedPos<Rest, InitPos>
  : InitPos;

//
type GetEmptyPos<
  TargetPos extends string,
  MergedEmptyPosList extends string[],
  MergedEmptyPosWithRelativesList extends string[],
  Index extends number = 0
> = [MergedEmptyPosList[Index]] extends [infer Tg extends string]
  ? [TargetPos] extends [Tg]
    ? MergedEmptyPosWithRelativesList[Index]
    : GetEmptyPos<TargetPos, MergedEmptyPosList, MergedEmptyPosWithRelativesList, Increment<Index>>
  : never;

export type GetRelatedPos<
  TargetPos extends string,
  MergedEmptyPosList extends string[],
  MergedEmptyPosWithRelativesList extends string[],
  MinePos extends string
> = [TargetPos] extends [MinePos]
  ? MinePos
  : [GetEmptyPos<TargetPos, MergedEmptyPosList, MergedEmptyPosWithRelativesList>] extends [infer EmptyPos]
    ? [EmptyPos] extends [never]
      ? TargetPos
      : EmptyPos extends string
        ? EmptyPos
        : TargetPos
    : TargetPos;
