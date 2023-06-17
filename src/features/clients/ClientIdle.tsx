import { FormattedMessage } from 'react-intl';
import { createUseStyles } from 'react-jss';
import { Badge, Button, Card, Form, Select } from 'antd';
import { Client, useGetRoutesQuery } from '../../services/client';
import type { Bot } from '../../services/bot';

const useStyles = createUseStyles({
  startButton: {
    marginTop: 11,
  },
  form: {
    marginBottom: 10,
    '&:last-child': {
      marginBottom: 0,
    },
  },
  card: {
    minHeight: 190,
    width: 230,
  },
});

const availableClasses: Bot['class'][] = [
  'Death Knight',
  'Demon Hunter',
  'Druid',
  'Evoker',
  'Hunter',
  'Mage',
  'Monk',
  'Paladin',
  'Priest',
  'Rogue',
  'Shaman',
  'Warlock',
  'Warrior',
];

type Props = Pick<Client, 'id'>;

const ClientIdle = ({ id }: Props): JSX.Element => {
  const classes = useStyles();
  const [form] = Form.useForm();
  const { data: routes } = useGetRoutesQuery();

  return (
    <Badge.Ribbon text={<FormattedMessage id="status.idle" />} color="red">
      <Card title={<FormattedMessage id="client.title" values={{ id }} />} size="small" className={classes.card}>
        <Form
          form={form}
          layout="horizontal"
          requiredMark={false}
          validateMessages={{ required: '' }}
          labelCol={{ span: 7 }}
        >
          <Form.Item
            className={classes.form}
            name="class"
            label={<FormattedMessage id="class.label" />}
            rules={[{ required: true }]}
          >
            <Select allowClear>
              {availableClasses.map((c) => (
                <Select.Option key={c} value={c}>
                  {c}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            className={classes.form}
            name="route"
            label={<FormattedMessage id="route.label" />}
            rules={[{ required: true }]}
          >
            <Select allowClear>
              {routes?.map((route) => (
                <Select.Option key={route.id} value={route.id}>
                  {route.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item className={classes.form}>
            <Button block htmlType="submit" className={classes.startButton}>
              <FormattedMessage id="client.start" />
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Badge.Ribbon>
  );
};

export default ClientIdle;
