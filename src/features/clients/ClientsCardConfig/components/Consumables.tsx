import { Row, Space } from 'antd';
import InfoInputNumber from '../../../../shared/components/InfoInputNumber';
import LabeledSwitch from '../../../../shared/components/LabeledSwitch';
import { BotConfig } from '../types';

type Props = {
  handleOnChange: (section: keyof BotConfig, value: string | number | null | boolean, name?: string) => void;
  state: BotConfig['consumables'];
};

const Consumables: React.FC<Props> = ({ handleOnChange, state }) => {
  return (
    <Space direction="vertical" style={{ display: 'flex' }}>
      <Row>
        <InfoInputNumber
          addonBefore="Eat Threshold"
          onChange={(value) => handleOnChange('consumables', value, 'eatThreshold')}
          value={state?.eatThreshold}
        />
      </Row>
      <Row>
        <InfoInputNumber
          addonBefore="Drink Threshold"
          onChange={(value) => handleOnChange('consumables', value, 'drinkThreshold')}
          value={state?.drinkThreshold}
        />
      </Row>
      <Row>
        <InfoInputNumber
          addonBefore="Healing Pot Threshold"
          onChange={(value) => handleOnChange('consumables', value, 'healingPotThreshold')}
          value={state?.healingPotThreshold}
        />
      </Row>
      <Row>
        <InfoInputNumber
          addonBefore="Mana Pot Threshold"
          onChange={(value) => handleOnChange('consumables', value, 'manaPotThreshold')}
          value={state?.manaPotThreshold}
        />
      </Row>
      <Row>
        <LabeledSwitch
          label="Eating"
          onChange={(value) => handleOnChange('consumables', value, 'isEatingEnabled')}
          checked={state?.isEatingEnabled}
        />
      </Row>
      <Row>
        <LabeledSwitch
          label="Potions"
          onChange={(value) => handleOnChange('consumables', value, 'arePotionsEnabled')}
          checked={state?.arePotionsEnabled}
        />
      </Row>
    </Space>
  );
};

export default Consumables;
