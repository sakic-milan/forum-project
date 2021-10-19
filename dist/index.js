"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const core_1 = require("@mikro-orm/core");
const main = async () => {
    const orm = await core_1.MikroORM.init({
        dbName: "reddit",
        user: "",
        password: "Sakic1milan!",
        debug: !constants_1.__prod__,
        type: "postgresql",
    });
};
main();
//# sourceMappingURL=index.js.map