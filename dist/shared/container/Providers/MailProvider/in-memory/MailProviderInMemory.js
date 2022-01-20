"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MailProviderInMemory = void 0;

class MailProviderInMemory {
  constructor() {
    this.message = [];
  }

  async sendMail(to, subject, // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variables, path) {
    this.message.push({
      to,
      subject,
      variables,
      path
    });
  }

}

exports.MailProviderInMemory = MailProviderInMemory;