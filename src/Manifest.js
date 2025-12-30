import './manifest.json';

class Manifest {
  constructor() {
    this.url = '/manifest.json';
    this.appVersion = '1.0.0';
  }

  setUrl(url) {
    this.url = url;
  }

  async init() {
    const res = await fetch(this.url);
    const data = await res.json();

    this.content = data;
    return data;
  }

  async getContent() {
    if (this.content) {
      return this.content;
    }

    return this.init();
  }
}

export let manifest = new Manifest();
