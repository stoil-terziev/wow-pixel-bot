import { Row, Select, Space } from 'antd';
import LabeledSwitch from '../../../../shared/components/LabeledSwitch';
import { BotConfig } from '../types';

type Props = {
  handleOnChange: (section: keyof BotConfig, value: string | boolean, name?: string) => void;
  state: BotConfig['route'];
};

const Route: React.FC<Props> = ({ handleOnChange, state }) => {
  return (
    <Space direction="vertical" style={{ display: 'flex' }}>
      <Row align="middle">
        <label style={{ marginRight: '0.5em' }}>Route Mode:</label>
        <Select
          options={[
            { value: 'default', label: 'Default' },
            { value: 'reverse', label: 'Reverse' },
          ]}
          placeholder="Select..."
          onChange={(value) => handleOnChange('route', value, 'routeMode')}
          value={state?.routeMode}
          allowClear
        />
      </Row>
      <Row>
        <LabeledSwitch
          label="Smart Reroute"
          onChange={(value) => handleOnChange('route', value, 'isSmartRerouteEnabled')}
          checked={state?.isSmartRerouteEnabled}
        />
      </Row>
    </Space>
  );
};

export default Route;
