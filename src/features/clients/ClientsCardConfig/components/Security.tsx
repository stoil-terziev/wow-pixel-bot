import { Row, Space, TimePicker } from 'antd';
import { Dayjs } from 'dayjs';
import InfoInputNumber from '../../../../shared/components/InfoInputNumber';
import LabeledSwitch from '../../../../shared/components/LabeledSwitch';
import { BotConfig } from '../types';

type Props = {
  handleOnChange: (
    section: keyof BotConfig,
    value: string | number | null | boolean | undefined | Dayjs,
    name?: string,
  ) => void;
  state: BotConfig['security'];
};

const Security: React.FC<Props> = ({ handleOnChange, state }) => {
  return (
    <Space direction="vertical" style={{ display: 'flex' }}>
      <Row>
        <InfoInputNumber
          addonBefore="Whispers Before Shutdown"
          onChange={(value) => handleOnChange('security', value, 'whispersBeforeShutDown')}
          value={state?.whispersBeforeShutDown}
        />
      </Row>
      <Row>
        <InfoInputNumber
          addonBefore="Whispers Counter Reset"
          onChange={(value) => handleOnChange('security', value, 'whispersCounterResetTimerSeconds')}
          value={state?.whispersCounterResetTimerSeconds}
        />
      </Row>
      <Row>
        <InfoInputNumber
          addonBefore="Says Before Shutdown"
          onChange={(value) => handleOnChange('security', value, 'saysBeforeShutdown')}
          value={state?.saysBeforeShutdown}
        />
      </Row>
      <Row>
        <InfoInputNumber
          addonBefore="Says Reset Counter"
          onChange={(value) => handleOnChange('security', value, 'saysResetCounter')}
          value={state?.saysResetCounter}
        />
      </Row>
      <Row>
        <InfoInputNumber
          addonBefore="Trades Before Shutdown"
          onChange={(value) => handleOnChange('security', value, 'tradesBeforeShutdown')}
          value={state?.tradesBeforeShutdown}
        />
      </Row>
      <Row>
        <InfoInputNumber
          addonBefore="Trades Reset Counter"
          onChange={(value) => handleOnChange('security', value, 'tradesResetCounter')}
          value={state?.tradesResetCounter}
        />
      </Row>
      <Row>
        <InfoInputNumber
          addonBefore="Duels Before Shutdown"
          onChange={(value) => handleOnChange('security', value, 'duelsBeforeShutdown')}
          value={state?.duelsBeforeShutdown}
        />
      </Row>
      <Row>
        <InfoInputNumber
          addonBefore="Duels Reset Counter"
          onChange={(value) => handleOnChange('security', value, 'duelsResetCounter')}
          value={state?.duelsResetCounter}
        />
      </Row>
      <Row>
        <InfoInputNumber
          addonBefore="Deaths Before Shutdown"
          onChange={(value) => handleOnChange('security', value, 'deathsBeforeShutdown')}
          value={state?.deathsBeforeShutdown}
        />
      </Row>
      <Row>
        <InfoInputNumber
          addonBefore="Deaths Reset Counter"
          onChange={(value) => handleOnChange('security', value, 'deathsResetCounter')}
          value={state?.deathsResetCounter}
        />
      </Row>
      <Row>
        <InfoInputNumber
          addonBefore="Auto Shutdown Seconds"
          onChange={(value) => handleOnChange('security', value, 'autoShutdownAfterSeconds')}
          value={state?.autoShutdownAfterSeconds}
        />
      </Row>
      <Row align="middle">
        <label style={{ marginRight: '0.5em' }}>Auto Shutdown At</label>
        <TimePicker
          onChange={(value) => handleOnChange('security', value, 'autoShutdownAtSpecificTime')}
          value={state?.autoShutdownAtSpecificTime}
        />
      </Row>
      <Row>
        <InfoInputNumber
          addonBefore="Pause Seconds"
          onChange={(value) => handleOnChange('security', value, 'pauseAfterSeconds')}
          value={state?.pauseAfterSeconds}
        />
      </Row>
      <Row align="middle">
        <label style={{ marginRight: '0.5em' }}>Pause At</label>
        <TimePicker
          onChange={(value) => handleOnChange('security', value, 'pauseAtSpecificTime')}
          value={state?.pauseAtSpecificTime}
        />
      </Row>
      <Row>
        <InfoInputNumber
          addonBefore="Shutdown Level"
          onChange={(value) => handleOnChange('security', value, 'shutdownAtLevel')}
          value={state?.shutdownAtLevel}
        />
      </Row>
      <Row>
        <InfoInputNumber
          addonBefore="Shutdown XP"
          onChange={(value) => handleOnChange('security', value, 'shutdownAtExp')}
          value={state?.shutdownAtExp}
        />
      </Row>
      <Row>
        <LabeledSwitch
          label="Shutdown After Out Of Consums"
          onChange={(value) => handleOnChange('security', value, 'shutdownAfterOutOfConsums')}
          checked={state?.shutdownAfterOutOfConsums}
        />
      </Row>
      <Row>
        <LabeledSwitch
          label="Shutdown After Out Of Ammo"
          onChange={(value) => handleOnChange('security', value, 'shutdownAfterOutOfAmmo')}
          checked={state?.shutdownAfterOutOfAmmo}
        />
      </Row>
      <Row>
        <LabeledSwitch
          label="Security"
          onChange={(value) => handleOnChange('security', value, 'isSecurityEnabled')}
          checked={state?.isSecurityEnabled}
        />
      </Row>
      <Row>
        <LabeledSwitch
          label="Discord messaging"
          onChange={(value) => handleOnChange('security', value, 'isDiscordMessagingEnabled')}
          checked={state?.isDiscordMessagingEnabled}
        />
      </Row>
      <Row>
        <LabeledSwitch
          label="Auto Shutdown"
          onChange={(value) => handleOnChange('security', value, 'isAutoShutdownEnabled')}
          checked={state?.isAutoShutdownEnabled}
        />
      </Row>
      <Row>
        <LabeledSwitch
          label="Breaks"
          onChange={(value) => handleOnChange('security', value, 'areBreaksEnabled')}
          checked={state?.areBreaksEnabled}
        />
      </Row>
    </Space>
  );
};

export default Security;
