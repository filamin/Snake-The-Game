"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Settings_1 = __importDefault(require("./modules/Settings"));
var Game_1 = __importDefault(require("./modules/Game"));
var Status_1 = __importDefault(require("./modules/Status"));
var Snake_1 = __importDefault(require("./modules/Snake"));
var Board_1 = __importDefault(require("./modules/Board"));
var Menu_1 = __importDefault(require("./modules/Menu"));
var Food_1 = __importDefault(require("./modules/Food"));
var settings = new Settings_1.default();
var game = new Game_1.default();
var status = new Status_1.default();
var snake = new Snake_1.default();
var board = new Board_1.default();
var menu = new Menu_1.default();
var food = new Food_1.default();
try {
    settings.init({ speed: 5, winLength: 4 });
    board.init(settings, snake);
    food.init(settings, snake, board);
    game.init(settings, status, board, snake, menu, food);
    board.renderBoard();
    board.renderSnake();
    food.setNewFood();
    game.run();
}
catch (error) {
    //Пользовательский вывод
    console.log(error.message);
}
