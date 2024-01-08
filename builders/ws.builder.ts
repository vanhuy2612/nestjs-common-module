import { INestApplication } from "@nestjs/common";
import { BaseBuilder } from "./base.builder";
import { v4 as uuidv4 } from 'uuid';

export class WSBuilder extends BaseBuilder{
    constructor() {
        super();
    }

    static registerCallback(callback: Function) {
        WSBuilder.callbacks.push(callback);
    }

    static buildCallback(app: INestApplication<any>) {
        for (let callback of WSBuilder.callbacks) {
            callback(app);
        }
    }
}