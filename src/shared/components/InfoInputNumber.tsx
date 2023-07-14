import { Tooltip, InputNumber, TooltipProps, InputNumberProps } from 'antd';

const InfoInputNumber: React.FC<TooltipProps & InputNumberProps> = (props) => {
  const { title, trigger, placement, ...inputProps } = props;

  return (
    <Tooltip title={title} trigger={trigger} placement={placement}>
      <InputNumber {...inputProps} />
    </Tooltip>
  );
};

export default InfoInputNumber;
