import ClientIdle from './ClientIdle';
import ClientRunning from './ClientRunning';
import type { Client } from '../../services/client';

const ClientCard = ({ id, isRunning }: Client): JSX.Element =>
  isRunning ? <ClientRunning id={id} /> : <ClientIdle id={id} />;

export default ClientCard;
