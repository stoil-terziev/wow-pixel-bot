import { FormattedMessage } from 'react-intl';
import { createUseStyles } from 'react-jss';
import { CaretRightOutlined } from '@ant-design/icons';
import { Card, Descriptions, Space } from 'antd';
import type { Bot } from '../../services/bot';

type StyleProps = {
  className: Bot['class'];
};

const useStyles = createUseStyles({
  card: {
    width: 350,
    minHeight: 515,
    '& .ant-card-cover': {
      display: 'flex',
      justifyContent: 'center',
    },
    '& .ant-card-body': {
      minHeight: 267,
    },
  },
  info: {
    '& .ant-descriptions-item-label': {
      fontSize: 20,
      flex: 1,
      justifyContent: 'flex-end',
    },
    '& .ant-descriptions-item-content': {
      fontSize: 20,

      flex: 1,
    },
  },
  image: {
    height: 200,
    width: '200px !important',
    backgroundSize: 'cover',
    backgroundImage: ({ className }: StyleProps) =>
      `url(https://www.pageofswords.com/wp-content/uploads/2022/11/world-of-warcraft-class-portrait-logo-image-symbol-icon-for-${className
        .replace(' ', '-')
        .toLocaleLowerCase()}-square.jpg)`,
  },
  deathOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'rgba(255, 0, 0, 0.4)',
  },
});

const BotCard = ({ class: className, health, mana, level, state, buffs }: Bot) => {
  const classes = useStyles({ className });

  return (
    <Card
      hoverable
      className={classes.card}
      cover={
        <>
          <div className={classes.image} />
          {!health && <div className={classes.deathOverlay} />}
        </>
      }
      actions={[
        <Space>
          <CaretRightOutlined /> <FormattedMessage id="general.start" />
        </Space>,
      ]}
    >
      <Descriptions column={1} size="small" className={classes.info}>
        <Descriptions.Item label={<FormattedMessage id="bot.stats.state" />}>{state}</Descriptions.Item>
        <Descriptions.Item label={<FormattedMessage id="bot.stats.health" />}>{health}</Descriptions.Item>
        <Descriptions.Item label={<FormattedMessage id="bot.stats.mana" />}>{mana}</Descriptions.Item>
        <Descriptions.Item label={<FormattedMessage id="bot.stats.level" />}>{level}</Descriptions.Item>
        <Descriptions.Item label={buffs.length ? <FormattedMessage id="bot.stats.buffs" /> : null}>
          {buffs.map((buff) => (
            <img
              key={buff}
              src={`https://wow.zamimg.com/images/wow/icons/medium/spell_${buff
                .replace(' ', '_')
                .toLocaleLowerCase()}.jpg`}
            />
          ))}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default BotCard;
