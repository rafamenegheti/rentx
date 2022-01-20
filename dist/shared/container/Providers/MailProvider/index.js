"use strict";

var _tsyringe = require("tsyringe");

require("dotenv/config");

var _EtherealMailProvider = require("./implementations/EtherealMailProvider");

var _GmailMailProvider = require("./implementations/GmailMailProvider");

const mailProvider = {
  local: _tsyringe.container.resolve(_EtherealMailProvider.EtherealMailProvider),
  s3: _tsyringe.container.resolve(_GmailMailProvider.GmailMailProvider)
};

_tsyringe.container.registerInstance("MailProvider", mailProvider[process.env.disk]);