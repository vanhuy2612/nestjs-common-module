import { NestFactory } from "@nestjs/core";
import { AppModule } from "src/app.module";
import { AppBuilder } from "./builders/app.builder";
import { WSBuilder } from "./builders/ws.builder";

export default class Boot {
  constructor() {}
  async bootstrap() {
    const app = await NestFactory.create(AppModule);
    if (AppBuilder.callbacks.length) {
        AppBuilder.buildCallback(app);
    }
    if (WSBuilder.callbacks.length) {
        WSBuilder.buildCallback(app);
    }
    const port = process.env.PORT || 3000;
    await app.listen(port);
    console.log(`Server is running on ${await app.getUrl()}`)
  }
}
