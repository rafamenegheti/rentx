"use strict";

var _tsyringe = require("tsyringe");

var _DayJsDateProvider = require("./implementations/DayJsDateProvider");

_tsyringe.container.registerSingleton("DateProvider", _DayJsDateProvider.DayJsDateProvider);