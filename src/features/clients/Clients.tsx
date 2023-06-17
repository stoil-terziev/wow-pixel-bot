import { FormattedMessage } from 'react-intl';
import { createUseStyles } from 'react-jss';
import { Drawer, Space } from 'antd';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useGetClientsQuery } from '../../services/client';
import ClientCard from './ClientCard';
import { selectIsClientsMenuOpen, toggleClients } from './clientsSlice';

const useStyles = createUseStyles({
  drawer: {
    '& .ant-drawer-title': {
      textAlign: 'center',
    },
    '& .ant-drawer-body': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
  },

  space: {
    justifyContent: 'center',
  },
});

const Clients = (): JSX.Element => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { data: clients } = useGetClientsQuery();
  const isClientsMenuOpen = useAppSelector(selectIsClientsMenuOpen);

  const toggleDrawer = () => dispatch(toggleClients());

  return (
    <Drawer
      placement="top"
      open={isClientsMenuOpen}
      onClose={toggleDrawer}
      title={<FormattedMessage id="clients.title" />}
      className={classes.drawer}
      contentWrapperStyle={{
        height: window.innerHeight,
      }}
    >
      <Space wrap align="center" size={[16, 16]} className={classes.space}>
        {clients?.map(({ id, isRunning }) => (
          <ClientCard key={id} id={id} isRunning={isRunning} />
        ))}
      </Space>
    </Drawer>
  );
};

export default Clients;
