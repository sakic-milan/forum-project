import { __prod__ } from "./constants";
import { MikroORM } from "@mikro-orm/core";

const main = async () => {
  const orm = await MikroORM.init({
    dbName: "reddit",
    user: "",
    password: "Sakic1milan!",
    debug: !__prod__,
    type: "postgresql",
  });
};

main();
