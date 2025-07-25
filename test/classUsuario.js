"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
var Usuario = /** @class */ (function () {
    function Usuario(name, email, city) {
        this.name = name;
        this.email = email;
        this.city = city;
        this.name = name;
        this.email = email;
        this.city = city;
    }
    Usuario.prototype.getInfo = function () {
        return "Name: ".concat(this.name, ", Email: ").concat(this.email, ", City: ").concat(this.city || "Not specified");
    };
    return Usuario;
}());
exports.Usuario = Usuario;
