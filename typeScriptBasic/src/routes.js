"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function hello(req, res) {
    var user = CreateUser_1.default({
        name: 'Rodney',
        email: 'teste@x.com',
        password: '123456',
        techs: [
            'JS',
            'ReactJs',
            { name: 'HTML', skill: 100 }
        ]
    });
    return res.json({
        msg: 'Hello World'
    });
}
exports.hello = hello;
