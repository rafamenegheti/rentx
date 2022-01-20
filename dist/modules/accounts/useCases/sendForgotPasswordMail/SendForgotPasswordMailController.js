"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SendForgotPasswordMailController = void 0;

var _tsyringe = require("tsyringe");

var _SendForgotPasswordMailUseCase = require("./SendForgotPasswordMailUseCase");

class SendForgotPasswordMailController {
  async handle(request, response) {
    const {
      email
    } = request.body;

    const sendForgotPasswordUseCase = _tsyringe.container.resolve(_SendForgotPasswordMailUseCase.SendForgotPasswordMailUseCase);

    await sendForgotPasswordUseCase.execute(email);
    return response.send();
  }

}

exports.SendForgotPasswordMailController = SendForgotPasswordMailController;