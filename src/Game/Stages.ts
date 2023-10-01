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
