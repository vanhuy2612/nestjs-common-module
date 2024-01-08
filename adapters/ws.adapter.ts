import { INestApplication } from "@nestjs/common";

export class WSAdapter {
    static adapters: any[] = [];
    static registerAdapter(adapter: any) {
        this.adapters.push(adapter);
    }
    static buildAdapter(app: INestApplication<any>) {
        
    }
}