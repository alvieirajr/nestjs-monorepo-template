import { Module } from "@nestjs/common";
import { HttpController } from "./controllers/http.controller";
import { HttpService } from "./services/http.services";

@Module({
    imports:[],
    providers:[HttpService],
    controllers:[HttpController],
})
export class HttpModule {}