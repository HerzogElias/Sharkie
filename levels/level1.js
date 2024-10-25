const Level1 = new level(
    [
        new JellyFish(),
        new JellyFish(),
        new JellyFish()
    ],
    [
        new Pufferfish(),
        new Pufferfish(),
        new Pufferfish(),
        new Pufferfish(),
    ],

    [
        new Endboss()
    ],
    [
        new Cloud(),
        new Cloud()
    ],

    [
        new BackgroundObject('./img/3. Background/Layers/5. Water/D1.png', -719),
        new BackgroundObject('./img/3. Background/Layers/4.Fondo 2/D2.png', -719),
        new BackgroundObject('./img/3. Background/Layers/3.Fondo 1/L2.png', -719),
        new BackgroundObject('./img/3. Background/Layers/2. Floor/D2.png', -719),

        new BackgroundObject('./img/3. Background/Layers/5. Water/D2.png', 0),
        new BackgroundObject('./img/3. Background/Layers/4.Fondo 2/D1.png', 0),
        new BackgroundObject('./img/3. Background/Layers/3.Fondo 1/L1.png', 0),
        new BackgroundObject('./img/3. Background/Layers/2. Floor/D1.png', 0),
        new BackgroundObject('./img/3. Background/Layers/5. Water/D1.png', 719),
        new BackgroundObject('./img/3. Background/Layers/4.Fondo 2/D2.png', 719),
        new BackgroundObject('./img/3. Background/Layers/3.Fondo 1/L2.png', 719),
        new BackgroundObject('./img/3. Background/Layers/2. Floor/D2.png', 719),

        new BackgroundObject('./img/3. Background/Layers/5. Water/D2.png', 719 * 2),
        new BackgroundObject('./img/3. Background/Layers/4.Fondo 2/D1.png', 719 * 2),
        new BackgroundObject('./img/3. Background/Layers/3.Fondo 1/L1.png', 719 * 2),
        new BackgroundObject('./img/3. Background/Layers/2. Floor/D1.png', 719 * 2),
        new BackgroundObject('./img/3. Background/Layers/5. Water/D1.png', 719 * 3),
        new BackgroundObject('./img/3. Background/Layers/4.Fondo 2/D2.png', 719 * 3),
        new BackgroundObject('./img/3. Background/Layers/3.Fondo 1/L2.png', 719 * 3),
        new BackgroundObject('./img/3. Background/Layers/2. Floor/D2.png', 719 * 3),
    ],

    [
        new Coins(),
        new Coins(),
        new Coins(),
        new Coins(),
        new Coins(),
        new Coins(),
        new Coins(),
        new Coins(),
        new Coins(),
        new Coins()
    ]
);

