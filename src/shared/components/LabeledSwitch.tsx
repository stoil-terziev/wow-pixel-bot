import { Switch, SwitchProps } from 'antd';

type Props = {
  label: string;
  onChange: (value: boolean) => void;
  checked: boolean;
} & SwitchProps;

const LabeledSwitch: React.FC<Props> = (props) => {
  const { label, ...restProps } = props;

  return (
    <>
      <label style={{ marginRight: '0.5em' }}>{label}</label>
      <Switch {...restProps} />
    </>
  );
};

export default LabeledSwitch;
