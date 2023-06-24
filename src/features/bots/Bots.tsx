import { createUseStyles } from 'react-jss';
import { Space } from 'antd';
import { useGetBotsQuery } from '../../services/bot';
import BotCard from './BotCard';

const useStyles = createUseStyles({
  botsContainer: {
    width: '100%',
    justifyContent: 'center',
  },
});

const Bots = (): JSX.Element => {
  const classes = useStyles();
  const { data: bots } = useGetBotsQuery();

  return (
    <Space wrap align="center" className={classes.botsContainer}>
      {bots?.map((bot) => (
        <BotCard key={bot.clientId} {...bot} />
      ))}
    </Space>
  );
};

export default Bots;
