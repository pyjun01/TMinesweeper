import { TFlag, TOpened, TUnopened, TZero, TOne,
  TTwo,
  TThree,
  TFour,
  TFive,
  TSix,
  TSeven,
  TEight,
  TNine, } from './Element';
import { Increment, IsOverlaped } from '../utils';


type GetEmoji = {
  '0': TZero,
  '1': TOne,
  '2': TTwo,
  '3': TThree,
  '4': TFour,
  '5': TFive,
  '6': TSix,
  '7': TSeven,
  '8': TEight,
  '9': TNine,
}
type RenderEmoji<Index extends number> = `${Index}` extends infer V extends string
  ? V extends keyof GetEmoji
    ? GetEmoji[V]
    : V extends `${infer Rest}${infer V extends string}`
      ? V extends keyof GetEmoji
        ? GetEmoji[V]
        : never
      : never
  : never;
type RenderXAxisLoop<Length extends number, Index extends number = 1> = Index extends Length ? '' : `${RenderEmoji<Index>}${RenderXAxisLoop<Length, Increment<Index>>}`;
type RenderXAxis<Length extends number> = `❌${RenderXAxisLoop<Increment<Length>>}`;

type c = RenderXAxis<22>

export type RenderRow<Row extends TOpened[], OpenedPos extends string, FlagPos extends string, YIndex extends number, XIndex extends number = 0> = Row extends [infer Curr extends TOpened, ...infer Rest extends TOpened[]]
    ? `${[true] extends [IsOverlaped<`${Increment<XIndex>}x${Increment<YIndex>}`, OpenedPos>]
            ? Curr
            : [true] extends [IsOverlaped<`${Increment<XIndex>}x${Increment<YIndex>}`, FlagPos>]
                ? TFlag
                : TUnopened
        }${RenderRow<Rest, OpenedPos, FlagPos, YIndex, Increment<XIndex>>}` : '';

type RenderStageLoop<Stage extends TOpened[][], OpenedPos extends string, FlagPos extends string, YIndex extends number> = Stage extends [infer Row extends TOpened[], ...infer Rest extends TOpened[][]]
? `
${RenderEmoji<Increment<YIndex>>}${RenderRow<Row, OpenedPos, FlagPos, YIndex>}${RenderStageLoop<Rest, OpenedPos, FlagPos, Increment<YIndex>>}`
: '';

export type RenderStage<Stage extends TOpened[][], OpenedPos extends string, FlagPos extends string, YIndex extends number = 0> = `

${RenderXAxis<Stage[number]['length']>}${RenderStageLoop<Stage, OpenedPos, FlagPos, YIndex>}`;