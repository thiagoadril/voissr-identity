import { Client, types } from 'cassandra-driver';
import ResultSet = types.ResultSet;

export class OAuthUserRepository {
  constructor(private readonly client: Client) {
  }

  find(clientId: string): Promise<ResultSet> {
    return this.client.execute('QUERY_SQL');
  }

  findByUsername(username: string): Promise<ResultSet> {
    return this.client.execute('QUERY_SQL');
  }

  save(token: string, userId: string, clientId: string, scope: string): Promise<ResultSet> {
    return this.client.execute('QUERY_SQL');
  }
}