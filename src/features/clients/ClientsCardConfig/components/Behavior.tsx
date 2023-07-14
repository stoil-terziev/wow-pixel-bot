import { Row, Slider, Space } from 'antd';
import LabeledSwitch from '../../../../shared/components/LabeledSwitch';
import { BotConfig } from '../types';

type Props = {
  handleOnChange: (section: keyof BotConfig, value: boolean | [number, number], name?: string) => void;
  state: BotConfig['behavior'];
};

const Behavior: React.FC<Props> = ({ handleOnChange, state }) => {
  return (
    <Space direction="vertical" style={{ display: 'flex' }}>
      <Row>
        <LabeledSwitch
          label="Chat Kindness Response"
          onChange={(value) => handleOnChange('behavior', value, 'isChatKindnessResponseEnabled')}
          checked={state?.isChatKindnessResponseEnabled}
        />
      </Row>
      <Row>
        <LabeledSwitch
          label="Random Jumping"
          onChange={(value) => handleOnChange('behavior', value, 'isRandomJumpingEnabled')}
          checked={state?.isRandomJumpingEnabled}
        />
      </Row>
      <Row align="middle">
        <label style={{ marginRight: '0.5em' }}>Jump Interval</label>
        <Slider
          range
          defaultValue={[0, 100]}
          style={{ width: '59%' }}
          value={state?.jumpInterval}
          onChange={(value) =>
            //it ensures that the left point on the slider is always with lower value in the array than the right one
            handleOnChange('behavior', value[0] > value[1] ? [value[1], value[0]] : value, 'jumpInterval')
          }
        />
      </Row>
    </Space>
  );
};

export default Behavior;
