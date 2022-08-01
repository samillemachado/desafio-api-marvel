import { Axios } from 'axios';
import { MD5 } from 'crypto-js';
import { privateKey, publicKey } from './config';

class Marvel {
  private hash: string;

  private ts: number;

  private client: Axios;

  private authentication: string;

  constructor() {
    this.ts = new Date().getTime();
    this.hash = this.gerenateHash();

    this.client = new Axios({
      baseURL: 'https://gateway.marvel.com/v1/public',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.authentication = `?ts=${this.ts}&apikey=${publicKey}&hash=${this.hash}`;
  }

  gerenateHash(): string {
    const hash = MD5(this.ts + privateKey + publicKey).toString();

    return hash;
  }

  async get(route: string): Promise<any> {
    const response = await this.client.get(route + this.authentication);
    if (response.status === 200) {
      const parseData = JSON.parse(response.data);
      return parseData;
    }
    return [];
  }
}

export default new Marvel();
