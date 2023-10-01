import { TMine, TEmpty, TOpened } from './Element';
import { Decrement, Flatten, Increment, Get_All_Pos, Get_NumberList_From_Pos, Is_Overlaped } from '../utils';

type Get_EmptyPosList_From_BoardRow<Row extends string[], X extends number, Y extends number, Result extends string[] = []> = Row extends [infer Tg, ...infer Rest]
  ? Rest extends string[]
    ? Get_EmptyPosList_From_BoardRow<Rest, Increment<X>, Y, Tg extends TEmpty ? [...Result, `${Increment<X>}x${Increment<Y>}`] : [...Result]>
    : Result
  : Result;
type Get_EmptyPosMatrix_From_Board<Board extends string[][], Result extends string[][] = [], Y extends number = 0> = Board extends [infer Row, ...infer Rest]
  ? Row extends string[]
    ? Rest extends string[][]
      ? Get_EmptyPosMatrix_From_Board<Rest, [...Result, Get_EmptyPosList_From_BoardRow<Row, 0, Y>], Increment<Y>>
      : never
    : never
  : Result;

type Check_Pos_Is_Empty<X extends number, Y extends number, Ex extends TOpened[][]> = X extends -1
  ? false
  : Y extends -1
    ? false
    : [[Ex[Decrement<Y>]] extends [never] ? undefined : Ex[Decrement<Y>]] extends [undefined]
      ? false
      : [Ex[Decrement<Y>][Decrement<X>]] extends [TEmpty]
        ? true
        : false;

type Tie_EmptyPos_With_Neighbor_EmptyPos<Value extends string, Ex extends TOpened[][]> = [Get_NumberList_From_Pos<Value>] extends [[infer X, infer Y]]
  ? [X] extends [number]
    ? [Y] extends [number]
      ? Extract<
          Exclude<
            | Value
            | (Check_Pos_Is_Empty<Decrement<X>, Decrement<Y>, Ex> extends true ? `${Decrement<X>}x${Decrement<Y>}` : '')
            | (Check_Pos_Is_Empty<Decrement<X>, Y, Ex> extends true ? `${Decrement<X>}x${Y}` : '')
            | (Check_Pos_Is_Empty<Decrement<X>, Increment<Y>, Ex> extends true ? `${Decrement<X>}x${Increment<Y>}` : '')
            | (Check_Pos_Is_Empty<X, Decrement<Y>, Ex> extends true ? `${X}x${Decrement<Y>}` : '')
            | (Check_Pos_Is_Empty<X, Increment<Y>, Ex> extends true ? `${X}x${Increment<Y>}` : '')
            | (Check_Pos_Is_Empty<Increment<X>, Decrement<Y>, Ex> extends true ? `${Increment<X>}x${Decrement<Y>}` : '')
            | (Check_Pos_Is_Empty<Increment<X>, Y, Ex> extends true ? `${Increment<X>}x${Y}` : '')
            | (Check_Pos_Is_Empty<Increment<X>, Increment<Y>, Ex> extends true ? `${Increment<X>}x${Increment<Y>}` : ''),
            ''
          >,
          Get_All_Pos<Ex[0]['length']>
        >
      : never
    : never
  : never;

type Tie_Neighbor_EmptyPos<
  List extends string[],
  Min extends number,
  Max extends number,
  Ex extends TOpened[][],
  Result extends string[] = []
> = List extends [infer Tg, ...infer Rest]
  ? [Rest] extends [string[]]
    ? [Tg] extends [string]
      ? Tie_Neighbor_EmptyPos<Rest, Min, Max, Ex, [...Result, Tie_EmptyPos_With_Neighbor_EmptyPos<Tg, Ex>]>
      : never
    : never
  : Result;

type Merge_Overlaped_Pos<Result extends string, Siblings extends string[]> = Siblings extends [infer Tg, ...infer Rest]
  ? [Tg] extends [string]
    ? Rest extends string[]
      ? Merge_Overlaped_Pos<[true] extends [Is_Overlaped<Result, Tg>] ? [Result | Tg][0] : Result, Rest>
      : never
    : never
  : Result;

type Remove_Overlaped_Pos<Result extends string, Siblings extends string[], Output extends string[]> = Siblings extends [infer Tg, ...infer Rest]
  ? [Tg] extends [string]
    ? Rest extends string[]
      ? [true] extends [Is_Overlaped<Result, Tg>]
        ? Remove_Overlaped_Pos<[Result | Tg][0], Rest, Output>
        : Remove_Overlaped_Pos<Result, Rest, [...Output, Tg]>
      : never
    : never
  : Output;

type Merge_Overlaped_EmptyPos<List extends string[], Result extends string[] = []> = List extends [infer Tg, ...infer Rest]
  ? [Tg] extends [string]
    ? Rest extends string[]
      ? Merge_Overlaped_EmptyPos<Remove_Overlaped_Pos<Tg, Rest, []>, [...Result, Merge_Overlaped_Pos<Tg, Rest>]>
      : never
    : never
  : Result;

type Get_Neighbor_Number<N extends number, Min extends number, Max extends number> = N extends Min
  ? N | Increment<N>
  : N extends Max
    ? Decrement<N> | N
    : Decrement<N> | N | Increment<N>;

type Tie_Any_Neighbor_Pos<Value extends string, Min extends number, Max extends number> = Exclude<
  {
    [K in Value]: [Get_NumberList_From_Pos<K>] extends [[infer X, infer Y]]
      ? [X] extends [number]
        ? [Y] extends [number]
          ? `${Get_Neighbor_Number<X, Min, Max>}x${Get_Neighbor_Number<Y, Min, Max>}`
          : ''
        : ''
      : '';
  }[Value],
  ''
>;

type Tie_Neighbor_Pos<List extends string[], Min extends number, Max extends number, Result extends string[] = []> = List extends [infer Tg, ...infer Rest]
  ? [Rest] extends [string[]]
    ? [Tg] extends [string]
      ? Tie_Neighbor_Pos<Rest, Min, Max, [...Result, Tie_Any_Neighbor_Pos<Tg, Min, Max>]>
      : never
    : Result
  : Result;

type Get_Mine_Pos_From_BoardRow<Row extends TOpened[], X extends number, Y extends number, Result extends string = ''> = Row extends [infer Tg, ...infer Rest]
  ? [Rest] extends [TOpened[]]
    ? Get_Mine_Pos_From_BoardRow<Rest, Increment<X>, Y, [Tg] extends [TMine] ? Result | `${Increment<X>}x${Increment<Y>}` : Result>
    : Result
  : Result;
type Get_Mine_Pos<Stage extends TOpened[][], Result extends string = '', Y extends number = 0> = Stage extends [infer Row, ...infer Rest]
  ? [Row] extends [TOpened[]]
    ? [Rest] extends [TOpened[][]]
      ? Get_Mine_Pos<Rest, Result | Get_Mine_Pos_From_BoardRow<Row, 0, Y>, Increment<Y>>
      : never
    : never
  : Exclude<Result, ''>;

export type Get_MergedEmptyPosLists<Stage extends TOpened[][], Min extends number = 1, Max extends number = Stage[0]['length']> = Flatten<Get_EmptyPosMatrix_From_Board<Stage>> extends infer EmptyPosList extends string[]
  ? Tie_Neighbor_EmptyPos<EmptyPosList, Min, Max, Stage> extends infer TiedEmptyPosList extends string[]
    ? Merge_Overlaped_EmptyPos<TiedEmptyPosList> extends infer MergedEmptyPosList extends string[]
      ? Tie_Neighbor_Pos<MergedEmptyPosList, Min, Max> extends infer MergedEmptyPosWithRelativesList extends string[]
        ? Get_Mine_Pos<Stage> extends infer MinePos extends string
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
  ? [true] extends [Is_Overlaped<Tg, InitPos>]
    ? Tg
    : InitialOpenedPos<Rest, InitPos>
  : InitPos;

//
type Get_EmptyPos<
  TargetPos extends string,
  MergedEmptyPosList extends string[],
  MergedEmptyPosWithRelativesList extends string[],
  Index extends number = 0
> = [MergedEmptyPosList[Index]] extends [infer Tg extends string]
  ? [TargetPos] extends [Tg]
    ? MergedEmptyPosWithRelativesList[Index]
    : Get_EmptyPos<TargetPos, MergedEmptyPosList, MergedEmptyPosWithRelativesList, Increment<Index>>
  : never;

export type Get_Related_Pos<
  TargetPos extends string,
  MergedEmptyPosList extends string[],
  MergedEmptyPosWithRelativesList extends string[],
  MinePos extends string
> = [TargetPos] extends [MinePos]
  ? MinePos
  : [Get_EmptyPos<TargetPos, MergedEmptyPosList, MergedEmptyPosWithRelativesList>] extends [infer EmptyPos]
    ? [EmptyPos] extends [never]
      ? TargetPos
      : EmptyPos extends string
        ? EmptyPos
        : TargetPos
    : TargetPos;
