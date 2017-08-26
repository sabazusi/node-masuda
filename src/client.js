// @flow
import client from 'cheerio-httpcli';

const MASUDA_HOST = 'https://anond.hatelabo.jp';

export class Client {
  constructor() {
  }

  createEntryListUrl(page = 0) {
    return `${MASUDA_HOST}/page=${page}&mode=top`;
  }

  createEntryUrl(id) {
    return `${MASUDA_HOST}/${id}`
  }

  getEntryList(page) {
    const url = this.createEntryListUrl(page);
    return client.fetch(url)
      .then(raw => raw.$('.body .section'))
      .then(rawEntries => {
        const entries = [];
        rawEntries.forEach(rawEntry => {
          const title = '';
          const body = '';
          entries.push({
            title, body
          });
        });
        return entries;
      });
  }
}
