import { container } from "tsyringe";

import "dotenv/config";
import { IMailProvider } from "./IMailProvider";
import { EtherealMailProvider } from "./implementations/EtherealMailProvider";
import { GmailMailProvider } from "./implementations/GmailMailProvider";
import { SESMailProvider } from "./implementations/SESMailProvider";

const mailProvider = {
  local: container.resolve(EtherealMailProvider),
  s3: container.resolve(GmailMailProvider),
};

container.registerInstance<IMailProvider>(
  "MailProvider",
  mailProvider[process.env.disk]
);
