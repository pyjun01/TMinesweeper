import { TOpened } from './Element';
import { StartStage } from './Impl';
import { EasyStages, NormalStages } from './Stages';
import { GetAllNumbers, ToNumber } from '../utils';

type StageSelector<Stages extends TOpened[][][], InitPos extends string> = {
  [K in `stage${GetAllNumbers<Stages['length'], 1>}`]: K extends `stage${infer IdxString}`
    ? StartStage<Stages, InitPos, ToNumber<IdxString>>
    : `err: stage key(${K}) is invalid`;
};

export type LevelSelector = {
  EASY: StageSelector<EasyStages, '4x4'>;
  NORMAL: StageSelector<NormalStages, '10x10'>;
};
