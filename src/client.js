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

  extractTitle(titleBlock) {
  }

  extractBody(bodyBlockList) {
  }

  getEntryList(page) {
    const url = this.createEntryListUrl(page);
    return client.fetch(url)
      .then(raw => raw.$('.body').children())
      .then(rawEntries => {
        const entries = [];
        for (var i = 0; i < rawEntries.length; i++) {
          const entry = rawEntries[`${i}`];
          const entryContents = entry.children();
          const title = this.extractTitle(entryContents[0]);
          const body = this.extractBody(entryContents.slice(1, -2));
          entries.push({
            title, body
          });
        }
        return entries;
      });
  }
}
