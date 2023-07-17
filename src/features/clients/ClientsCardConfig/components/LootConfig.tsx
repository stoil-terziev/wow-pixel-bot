import { Row, Space } from 'antd';
import InfoInputNumber from '../../../../shared/components/InfoInputNumber';
import LabeledSwitch from '../../../../shared/components/LabeledSwitch';
import { BotConfig } from '../types';

type Props = {
  handleOnChange: (section: keyof BotConfig, value: string | number | null | boolean, name?: string) => void;
  state: BotConfig['lootConfig'];
};

const LootConfig: React.FC<Props> = ({ handleOnChange, state }) => {
  return (
    <Space direction="vertical" style={{ display: 'flex' }}>
      <Row>
        <LabeledSwitch
          label="Looting"
          onChange={(value) => handleOnChange('lootConfig', value, 'isLootingEnabled')}
          checked={state?.isLootingEnabled}
        />
      </Row>
      <Row>
        <LabeledSwitch
          label="Mouse Loot"
          onChange={(value) => handleOnChange('lootConfig', value, 'isMouseLootEnabled')}
          checked={state?.isMouseLootEnabled}
        />
      </Row>
      <Row>
        <LabeledSwitch
          label="Last Target Loot"
          onChange={(value) => handleOnChange('lootConfig', value, 'isLastTargetLootEnabled')}
          checked={state?.isLastTargetLootEnabled}
        />
      </Row>
      <Row>
        <LabeledSwitch
          label="Enhanced Mouse Loot"
          onChange={(value) => handleOnChange('lootConfig', value, 'isEnhancedMouseLootEnabled')}
          checked={state?.isEnhancedMouseLootEnabled}
        />
      </Row>
      <Row>
        <LabeledSwitch
          label="Camera Change"
          onChange={(value) => handleOnChange('lootConfig', value, 'isCameraChangeEnabled')}
          checked={state?.isCameraChangeEnabled}
        />
      </Row>
      <Row>
        <LabeledSwitch
          label="Skinning"
          onChange={(value) => handleOnChange('lootConfig', value, 'isSkinningEnabled')}
          checked={state?.isSkinningEnabled}
        />
      </Row>
      <Row>
        <InfoInputNumber
          addonBefore="Mouse Circle Radius"
          onChange={(value) => handleOnChange('lootConfig', value, 'mouseCircleRadius')}
          value={state?.mouseCircleRadius}
        />
      </Row>
    </Space>
  );
};

export default LootConfig;
