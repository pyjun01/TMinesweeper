// increase number type
export type Increment<N extends number> = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,...number[]][N];
export type Decrement<N extends number> = N extends -1
  ? 99999
  : [-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,...number[]][N];

// get union number 0 to N
export type GetAllNumbers<N extends number, Cur extends number = 0> = Cur extends N ? Cur : Cur | GetAllNumbers<N, Increment<Cur>>;

export type NumberTable = {
  [K in GetAllNumbers<30> as `${K}`]: K;
};

export type ToNumber<V extends unknown> = V extends keyof NumberTable ? NumberTable[V] : never;

export type Flatten<Arr extends unknown[], Result extends unknown[] = []> = Arr extends [infer Tg, ...infer Rest]
  ? [Rest] extends [unknown[]]
    ? [Tg] extends [unknown[]]
      ? Flatten<Rest, [...Result, ...Flatten<Tg>]>
      : Flatten<Rest, [...Result, Tg]>
    : never
  : Result;

//

export type Get_NumberList_From_Pos<S extends string> = S extends `${infer X}x${infer Y}`
  ? X extends keyof NumberTable
    ? Y extends keyof NumberTable
      ? [NumberTable[X], NumberTable[Y]]
      : never
    : never
  : never;

export type Is_Overlaped<V1 extends string, V2 extends string> = [V1 & V2] extends [never] ? never : true;

export type Get_All_Pos<Max extends number> = `${GetAllNumbers<Max, 1>}x${GetAllNumbers<Max, 1>}`;
