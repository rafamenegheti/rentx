"use strict";

var _DayJsDateProvider = require("../../../../shared/container/Providers/DateProvider/implementations/DayJsDateProvider");

var _MailProviderInMemory = require("../../../../shared/container/Providers/MailProvider/in-memory/MailProviderInMemory");

var _AppError = require("../../../../shared/errors/AppError");

var _UsersRepositoryInMemory = require("../../repositories/in-memory/UsersRepositoryInMemory");

var _UsersTokensRepositoryInMemory = require("../../repositories/in-memory/UsersTokensRepositoryInMemory");

var _SendForgotPasswordMailUseCase = require("./SendForgotPasswordMailUseCase");

let sendForgotPasswordMailUseCase;
let usersRepositoryInMemory;
let dateProvider;
let usersTokensRepositoryInMemory;
let mailProvider;
describe("Send Forgot Mail", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new _UsersRepositoryInMemory.UsersRepositoryInMemory();
    dateProvider = new _DayJsDateProvider.DayJsDateProvider();
    usersTokensRepositoryInMemory = new _UsersTokensRepositoryInMemory.UsersTokensRepositoryInMemory();
    mailProvider = new _MailProviderInMemory.MailProviderInMemory();
    sendForgotPasswordMailUseCase = new _SendForgotPasswordMailUseCase.SendForgotPasswordMailUseCase(usersRepositoryInMemory, usersTokensRepositoryInMemory, dateProvider, mailProvider);
  });
  it("Should be able to send a forgot password mail to user", async () => {
    const sendMail = jest.spyOn(mailProvider, "sendMail");
    await usersRepositoryInMemory.create({
      driver_license: "244190",
      email: "siwunaned@namuf.eg",
      name: "Mable Myers",
      password: "16546"
    });
    await sendForgotPasswordMailUseCase.execute("siwunaned@namuf.eg");
    expect(sendMail).toBeCalled();
  });
  it("Should not be able to send email if user does not exists", async () => {
    await expect(sendForgotPasswordMailUseCase.execute("awatij@libo.ie")).rejects.toEqual(new _AppError.AppError("User does not exists!"));
  });
  it("Should be able to create an users token", async () => {
    const generateTokenMail = jest.spyOn(usersTokensRepositoryInMemory, "create");
    await usersRepositoryInMemory.create({
      driver_license: "1456878",
      email: "asdasd@namuf.eg",
      name: "Mable Msdsdrs",
      password: "1226546"
    });
    await sendForgotPasswordMailUseCase.execute("asdasd@namuf.eg");
    expect(generateTokenMail).toBeCalled();
  });
});