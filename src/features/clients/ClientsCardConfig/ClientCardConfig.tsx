import { useState } from 'react';
import { Collapse } from 'antd';
import { Dayjs } from 'dayjs';
import Behavior from './components/Behavior';
import Consumables from './components/Consumables';
import LootConfig from './components/LootConfig';
import Route from './components/Route';
import Security from './components/Security';
import { BotConfig } from './types';

const ClientCardConfig: React.FC = () => {
  const [config, setConfig] = useState({} as BotConfig);

  const handleOnChange = (
    section: keyof BotConfig,
    value: string | number | null | boolean | [number, number] | undefined | Dayjs,
    name?: string,
  ) => {
    setConfig((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [name as string]: value,
      },
    }));
  };

  return (
    <Collapse
      size="small"
      items={[
        {
          key: '1',
          label: 'Loot',
          children: <LootConfig handleOnChange={handleOnChange} state={config.lootConfig} />,
        },
        {
          key: '2',
          label: 'Route',
          children: <Route handleOnChange={handleOnChange} state={config.route} />,
        },
        {
          key: '3',
          label: 'Behavior',
          children: <Behavior handleOnChange={handleOnChange} state={config.behavior} />,
        },
        {
          key: '4',
          label: 'Consumables',
          children: <Consumables handleOnChange={handleOnChange} state={config.consumables} />,
        },
        {
          key: '5',
          label: 'Security',
          children: <Security handleOnChange={handleOnChange} state={config.security} />,
        },
      ]}
    />
  );
};

export default ClientCardConfig;
