import { FormattedMessage } from 'react-intl';
import { createUseStyles } from 'react-jss';
import { Badge, Button, Card, Space } from 'antd';
import { useGetBotsQuery } from '../../services/bot';
import ClientCardConfig from './ClientsCardConfig/ClientCardConfig';
import type { Client } from '../../services/client';

const useStyles = createUseStyles({
  content: {
    width: '100%',
    textAlign: 'center',
  },
  card: {
    minHeight: 190,
    width: 320,
  },
  botStatus: {
    marginBottom: 25,
  },
});

type Props = Pick<Client, 'id'>;

const ClientRunning = ({ id }: Props): JSX.Element => {
  const classes = useStyles();
  const { data: bots } = useGetBotsQuery();
  const clientBot = bots?.find((bot) => bot.clientId === id);

  return (
    <Badge.Ribbon text={<FormattedMessage id="status.running" />} color="green">
      <Card title={<FormattedMessage id="client.title" values={{ id }} />} size="small" className={classes.card}>
        <Space direction="vertical" size="small" className={classes.content}>
          {clientBot?.isRunning ? (
            <Badge status="success" text={<FormattedMessage id="bot.status.running" />} className={classes.botStatus} />
          ) : (
            <Badge status="error" text={<FormattedMessage id="bot.status.idle" />} className={classes.botStatus} />
          )}
          <ClientCardConfig />
          <Button block>
            {clientBot?.isRunning ? <FormattedMessage id="bot.pause" /> : <FormattedMessage id="bot.start" />}
          </Button>
          <Button block>
            <FormattedMessage id="client.stop" />
          </Button>
        </Space>
      </Card>
    </Badge.Ribbon>
  );
};

export default ClientRunning;
