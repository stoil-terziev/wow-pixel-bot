import { Dayjs } from 'dayjs';

export interface BotConfig {
  lootConfig: {
    isLootingEnabled: boolean;
    isMouseLootEnabled: boolean;
    isLastTargetLootEnabled: boolean;
    isEnhancedMouseLootEnabled: boolean;
    isCameraChangeEnabled: boolean;
    isSkinningEnabled: boolean;
    mouseCircleRadius: number;
  };
  route: {
    routeMode: string;
    isSmartRerouteEnabled: boolean;
  };
  behavior: {
    isChatKindnessResponseEnabled: boolean;
    isRandomJumpingEnabled: boolean;
    jumpInterval: [number, number];
  };
  consumables: {
    eatThreshold: number;
    drinkThreshold: number;
    healingPotThreshold: number;
    manaPotThreshold: number;
    isEatingEnabled: boolean;
    arePotionsEnabled: boolean;
  };
  security: {
    whispersBeforeShutDown: number;
    whispersCounterResetTimerSeconds: number;
    saysBeforeShutdown: number;
    saysResetCounter: number;
    tradesBeforeShutdown: number;
    tradesResetCounter: number;
    duelsBeforeShutdown: number;
    duelsResetCounter: number;
    deathsBeforeShutdown: number;
    deathsResetCounter: number;
    autoShutdownAfterSeconds: number;
    autoShutdownAtSpecificTime: Dayjs | undefined | null;
    pauseAfterSeconds: number;
    pauseAtSpecificTime: Dayjs | undefined | null;
    shutdownAtLevel: number;
    shutdownAtExp: number;
    shutdownAfterOutOfConsums: boolean;
    shutdownAfterOutOfAmmo: boolean;
    isSecurityEnabled: boolean;
    isDiscordMessagingEnabled: boolean;
    isAutoShutdownEnabled: boolean;
    areBreaksEnabled: boolean;
  };
}
