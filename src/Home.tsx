import { FormattedMessage } from 'react-intl';
import { createUseStyles } from 'react-jss';
import { MenuFoldOutlined } from '@ant-design/icons';
import { Affix, Tooltip } from 'antd';
import { useAppDispatch } from './app/hooks';
import Bots from './features/bots/Bots';
import Clients from './features/clients/Clients';
import { toggleClients } from './features/clients/clientsSlice';

const useStyles = createUseStyles({
  drawerIcon: {
    fontSize: 40,
  },
});

const Home = (): JSX.Element => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const toggleDrawer = () => dispatch(toggleClients());

  return (
    <>
      <Affix>
        <Tooltip title={<FormattedMessage id="clients.open" />} placement="right">
          <MenuFoldOutlined onClick={toggleDrawer} className={classes.drawerIcon} rotate={270} />
        </Tooltip>
      </Affix>
      <Clients />
      <Bots />
    </>
  );
};

export default Home;
