import { TMine , TEmpty, TOne  , TTwo  , TThree, TFour  } from './Element';

export type EasyStages = [
  [
    [TMine , TTwo  , TOne  , TOne  , TOne  , TTwo  , TTwo  , TOne  , TEmpty],
    [TOne  , TTwo  , TMine , TOne  , TOne  , TMine , TMine , TOne  , TEmpty],
    [TOne  , TTwo  , TTwo  , TOne  , TOne  , TTwo  , TTwo  , TOne  , TEmpty],
    [TTwo  , TMine , TOne  , TEmpty, TEmpty, TEmpty, TEmpty, TEmpty, TEmpty],
    [TMine , TThree, TTwo  , TEmpty, TEmpty, TEmpty, TEmpty, TEmpty, TEmpty],
    [TTwo  , TMine , TTwo  , TOne  , TEmpty, TEmpty, TEmpty, TEmpty, TEmpty],
    [TOne  , TTwo  , TMine , TOne  , TOne  , TTwo  , TTwo  , TOne  , TEmpty],
    [TEmpty, TOne  , TOne  , TOne  , TOne  , TMine , TMine , TOne  , TEmpty],
    [TEmpty, TEmpty, TEmpty, TEmpty, TOne  , TTwo  , TTwo  , TOne  , TEmpty]
  ],
  [
    [TTwo  , TMine , TMine , TOne  , TEmpty, TEmpty, TOne  , TOne  , TOne  ],
    [TTwo  , TMine , TThree, TOne  , TEmpty, TEmpty, TOne  , TMine , TTwo  ],
    [TOne  , TOne  , TOne  , TEmpty, TEmpty, TEmpty, TOne  , TTwo  , TMine ],
    [TEmpty, TEmpty, TEmpty, TEmpty, TEmpty, TEmpty, TEmpty, TOne  , TOne  ],
    [TEmpty, TEmpty, TEmpty, TEmpty, TEmpty, TEmpty, TEmpty, TOne  , TOne  ],
    [TEmpty, TEmpty, TOne  , TOne  , TOne  , TEmpty, TEmpty, TOne  , TMine ],
    [TOne  , TTwo  , TTwo  , TMine , TOne  , TEmpty, TEmpty, TOne  , TOne  ],
    [TMine , TTwo  , TMine , TTwo  , TOne  , TOne  , TOne  , TOne  , TEmpty],
    [TOne  , TTwo  , TOne  , TOne  , TEmpty, TOne  , TMine , TOne  , TEmpty]
  ],
  [
    [TOne  , TOne  , TEmpty, TEmpty, TEmpty, TEmpty, TEmpty, TEmpty, TEmpty],
    [TMine , TOne  , TEmpty, TEmpty, TEmpty, TEmpty, TEmpty, TEmpty, TEmpty],
    [TTwo  , TTwo  , TOne  , TEmpty, TEmpty, TEmpty, TEmpty, TOne  , TOne  ],
    [TOne  , TMine , TOne  , TEmpty, TEmpty, TEmpty, TEmpty, TOne  , TMine ],
    [TOne  , TTwo  , TTwo  , TOne  , TOne  , TOne  , TOne  , TOne  , TOne  ],
    [TEmpty, TOne  , TMine , TOne  , TOne  , TMine , TTwo  , TOne  , TOne  ],
    [TOne  , TThree, TThree, TThree, TTwo  , TTwo  , TTwo  , TMine , TOne  ],
    [TOne  , TMine , TMine , TTwo  , TMine , TOne  , TOne  , TOne  , TOne  ],
    [TMine , TThree, TTwo  , TTwo  , TOne  , TOne  , TEmpty, TEmpty, TEmpty]
  ]
];

export type NormalStages = [
  [
    [TOne  , TTwo  , TMine , TOne  , TOne  , TTwo  , TTwo  , TOne  , TOne  , TMine , TTwo  , TMine , TOne  , TEmpty, TEmpty, TEmpty],
    [TOne  , TMine , TTwo  , TOne  , TOne  , TMine , TMine , TOne  , TOne  , TOne  , TTwo  , TOne  , TOne  , TEmpty, TEmpty, TEmpty],
    [TOne  , TOne  , TTwo  , TOne  , TTwo  , TTwo  , TTwo  , TOne  , TEmpty, TOne  , TOne  , TOne  , TEmpty, TEmpty, TEmpty, TEmpty],
    [TEmpty, TEmpty, TOne  , TMine , TTwo  , TTwo  , TTwo  , TThree, TThree, TThree, TMine , TOne  , TEmpty, TEmpty, TEmpty, TEmpty],
    [TEmpty, TOne  , TThree, TFour , TMine , TThree, TMine , TMine , TMine , TMine , TTwo  , TOne  , TEmpty, TOne  , TOne  , TOne  ],
    [TEmpty, TOne  , TMine , TMine , TThree, TFour , TMine , TFour , TThree, TTwo  , TOne  , TEmpty, TEmpty, TOne  , TMine , TOne  ],
    [TEmpty, TOne  , TThree, TThree, TThree, TMine , TThree, TTwo  , TEmpty, TEmpty, TEmpty, TEmpty, TEmpty, TTwo  , TThree, TThree],
    [TEmpty, TEmpty, TOne  , TMine , TThree, TThree, TMine , TOne  , TEmpty, TEmpty, TEmpty, TEmpty, TEmpty, TOne  , TMine , TMine ],
    [TEmpty, TEmpty, TTwo  , TThree, TMine , TTwo  , TOne  , TOne  , TEmpty, TEmpty, TEmpty, TEmpty, TEmpty, TOne  , TThree, TMine ],
    [TOne  , TOne  , TThree, TMine , TThree, TOne  , TEmpty, TEmpty, TEmpty, TEmpty, TEmpty, TOne  , TTwo  , TTwo  , TThree, TTwo  ],
    [TTwo  , TMine , TThree, TMine , TThree, TTwo  , TTwo  , TOne  , TEmpty, TEmpty, TOne  , TTwo  , TMine , TMine , TThree, TMine ],
    [TMine , TTwo  , TTwo  , TOne  , TTwo  , TMine , TMine , TTwo  , TEmpty, TEmpty, TOne  , TMine , TThree, TThree, TFour , TMine ],
    [TOne  , TOne  , TEmpty, TOne  , TTwo  , TFour , TMine , TThree, TOne  , TOne  , TOne  , TOne  , TTwo  , TTwo  , TMine , TTwo  ],
    [TEmpty, TEmpty, TEmpty, TOne  , TMine , TTwo  , TOne  , TTwo  , TMine , TOne  , TEmpty, TEmpty, TOne  , TMine , TTwo  , TOne  ],
    [TEmpty, TEmpty, TEmpty, TOne  , TOne  , TOne  , TEmpty, TOne  , TOne  , TOne  , TEmpty, TEmpty, TOne  , TOne  , TOne  , TEmpty],
    [TEmpty, TEmpty, TEmpty, TEmpty, TEmpty, TEmpty, TEmpty, TEmpty, TEmpty, TEmpty, TEmpty, TEmpty, TEmpty, TEmpty, TEmpty, TEmpty]
  ]
];

export type HardStages = [
  [
    [TMine ,TMine ,TFour ,TMine ,TThree,TOne  ,TTwo  ,TOne  ,TOne  ,TEmpty,TOne  ,TOne  ,TOne  ,TEmpty,TEmpty,TEmpty,TOne  ,TMine ,TThree,TMine ,TOne  ,TEmpty],
    [TTwo  ,TThree,TMine ,TMine ,TThree,TMine ,TTwo  ,TMine ,TOne  ,TEmpty,TOne  ,TMine ,TOne  ,TEmpty,TEmpty,TEmpty,TOne  ,TThree,TMine ,TThree,TOne  ,TEmpty],
    [TEmpty,TTwo  ,TThree,TThree,TTwo  ,TTwo  ,TFour ,TThree,TTwo  ,TEmpty,TOne  ,TOne  ,TOne  ,TOne  ,TOne  ,TTwo  ,TOne  ,TThree,TMine ,TTwo  ,TEmpty,TEmpty],
    [TOne  ,TThree,TMine ,TTwo  ,TEmpty,TOne  ,TMine ,TMine ,TOne  ,TEmpty,TEmpty,TOne  ,TOne  ,TTwo  ,TMine ,TThree,TMine ,TTwo  ,TOne  ,TTwo  ,TOne  ,TOne  ],
    [TOne  ,TMine ,TMine ,TThree,TOne  ,TOne  ,TTwo  ,TTwo  ,TTwo  ,TOne  ,TOne  ,TOne  ,TMine ,TThree,TThree,TMine ,TThree,TTwo  ,TEmpty,TTwo  ,TMine ,TTwo  ],
    [TOne  ,TTwo  ,TFour ,TMine ,TThree,TOne  ,TOne  ,TOne  ,TThree,TMine ,TTwo  ,TOne  ,TOne  ,TTwo  ,TMine ,TThree,TMine ,TTwo  ,TOne  ,TThree,TMine ,TTwo  ],
    [TOne  ,TOne  ,TThree,TMine ,TMine ,TTwo  ,TTwo  ,TMine ,TFour ,TMine ,TThree,TTwo  ,TTwo  ,TTwo  ,TOne  ,TTwo  ,TOne  ,TTwo  ,TMine ,TTwo  ,TOne  ,TOne  ],
    [TTwo  ,TMine ,TThree,TTwo  ,TFour ,TMine ,TFour ,TThree,TMine ,TTwo  ,TThree,TMine ,TMine ,TTwo  ,TOne  ,TTwo  ,TTwo  ,TThree,TTwo  ,TOne  ,TEmpty,TEmpty],
    [TTwo  ,TMine ,TTwo  ,TEmpty,TTwo  ,TMine ,TMine ,TThree,TTwo  ,TTwo  ,TThree,TMine ,TFour ,TThree,TMine ,TTwo  ,TMine ,TMine ,TOne  ,TEmpty,TEmpty,TEmpty],
    [TTwo  ,TTwo  ,TOne  ,TOne  ,TTwo  ,TThree,TThree,TMine ,TOne  ,TOne  ,TMine ,TTwo  ,TTwo  ,TMine ,TTwo  ,TTwo  ,TTwo  ,TTwo  ,TOne  ,TOne  ,TTwo  ,TTwo  ],
    [TMine ,TOne  ,TEmpty,TOne  ,TMine ,TTwo  ,TThree,TFour ,TThree,TTwo  ,TTwo  ,TTwo  ,TTwo  ,TOne  ,TOne  ,TEmpty,TEmpty,TEmpty,TEmpty,TOne  ,TMine ,TMine ],
    [TTwo  ,TTwo  ,TEmpty,TOne  ,TOne  ,TTwo  ,TMine ,TMine ,TMine ,TOne  ,TOne  ,TMine ,TTwo  ,TOne  ,TEmpty,TEmpty,TEmpty,TEmpty,TEmpty,TOne  ,TTwo  ,TTwo  ],
    [TMine ,TOne  ,TEmpty,TOne  ,TTwo  ,TThree,TThree,TThree,TTwo  ,TOne  ,TOne  ,TTwo  ,TMine ,TOne  ,TOne  ,TTwo  ,TTwo  ,TOne  ,TEmpty,TEmpty,TEmpty,TEmpty],
    [TOne  ,TOne  ,TEmpty,TOne  ,TMine ,TMine ,TOne  ,TEmpty,TEmpty,TOne  ,TTwo  ,TThree,TTwo  ,TOne  ,TOne  ,TMine ,TMine ,TTwo  ,TTwo  ,TTwo  ,TTwo  ,TOne  ],
    [TEmpty,TOne  ,TOne  ,TTwo  ,TThree,TThree,TTwo  ,TOne  ,TOne  ,TTwo  ,TMine ,TMine ,TTwo  ,TEmpty,TOne  ,TTwo  ,TThree,TThree,TMine ,TMine ,TThree,TMine ],
    [TEmpty,TOne  ,TMine ,TOne  ,TOne  ,TMine ,TOne  ,TTwo  ,TMine ,TFour ,TFour ,TMine ,TThree,TOne  ,TEmpty,TEmpty,TOne  ,TMine ,TThree,TThree,TMine ,TTwo  ],
    [TEmpty,TOne  ,TTwo  ,TThree,TThree,TTwo  ,TTwo  ,TThree,TMine ,TMine ,TTwo  ,TTwo  ,TMine ,TTwo  ,TOne  ,TEmpty,TOne  ,TOne  ,TOne  ,TTwo  ,TThree,TThree],
    [TOne  ,TTwo  ,TThree,TMine ,TMine ,TOne  ,TOne  ,TMine ,TThree,TThree,TTwo  ,TTwo  ,TTwo  ,TMine ,TOne  ,TEmpty,TOne  ,TTwo  ,TTwo  ,TThree,TMine ,TMine ],
    [TOne  ,TMine ,TMine ,TFour ,TThree,TTwo  ,TTwo  ,TOne  ,TOne  ,TOne  ,TMine ,TOne  ,TOne  ,TOne  ,TTwo  ,TOne  ,TThree,TMine ,TMine ,TThree,TMine ,TThree],
    [TOne  ,TThree,TMine ,TTwo  ,TOne  ,TMine ,TOne  ,TEmpty,TEmpty,TOne  ,TOne  ,TOne  ,TEmpty,TOne  ,TThree,TMine ,TFour ,TMine ,TFour ,TFour ,TThree,TTwo  ],
    [TOne  ,TTwo  ,TTwo  ,TOne  ,TOne  ,TOne  ,TOne  ,TEmpty,TEmpty,TEmpty,TEmpty,TEmpty,TOne  ,TThree,TMine ,TMine ,TFour ,TOne  ,TTwo  ,TMine ,TMine ,TOne  ],
    [TOne  ,TMine ,TOne  ,TEmpty,TEmpty,TEmpty,TEmpty,TEmpty,TEmpty,TEmpty,TEmpty,TEmpty,TOne  ,TMine ,TMine ,TMine ,TTwo  ,TEmpty,TOne  ,TTwo  ,TTwo  ,TOne  ],
  ]
];