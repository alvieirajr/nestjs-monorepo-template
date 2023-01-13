import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.services";

@Module({
    imports:[],
    providers:[PrismaService],
    controllers:[],
})
export class DatabaseModule {}