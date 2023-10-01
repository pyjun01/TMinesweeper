import { TFlag, TOpened, TUnopened } from './Element';
import { Increment, Is_Overlaped } from '../utils';

export type RenderRow<Row extends TOpened[], OpenedPos extends string, FlagPos extends string, YIndex extends number, XIndex extends number = 0> = Row extends [infer Curr extends TOpened, ...infer Rest extends TOpened[]]
    ? `${[true] extends [Is_Overlaped<`${Increment<XIndex>}x${Increment<YIndex>}`, OpenedPos>]
            ? Curr
            : [true] extends [Is_Overlaped<`${Increment<XIndex>}x${Increment<YIndex>}`, FlagPos>]
                ? TFlag
                : TUnopened
        }${RenderRow<Rest, OpenedPos, FlagPos, YIndex, Increment<XIndex>>}` : '';

type RenderStageLoop<Stage extends TOpened[][], OpenedPos extends string, FlagPos extends string, YIndex extends number> = Stage extends [infer Row extends TOpened[], ...infer Rest extends TOpened[][]]
? `
${RenderRow<Row, OpenedPos, FlagPos, YIndex>}${RenderStageLoop<Rest, OpenedPos, FlagPos, Increment<YIndex>>}`
: '';

export type RenderStage<Stage extends TOpened[][], OpenedPos extends string, FlagPos extends string, YIndex extends number = 0> = `
${RenderStageLoop<Stage, OpenedPos, FlagPos, YIndex>}`;