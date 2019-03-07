import { TypeOrmModuleOptions } from '@nestjs/typeorm';

interface IMode {
    port: number;
    cors: boolean;
    orm: TypeOrmModuleOptions;
}

class Config {
    static development: IMode = {
        port: 8000,
        cors: true,
        orm: {
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "root",
            database: "taskplannerdb",
            entities: [
                "src/**/**.entity{.ts,.js}"
            ],
            synchronize: true,
        },
    };

    static production: IMode = {
        port: 0,
        cors: true,
        orm: {
            type: "mysql",
            host: "us-cdbr-iron-east-03.cleardb.net",
            port: 0,
            username: "b04cd3ca94aa5a",
            password: "65693db6",
            database: "heroku_2442531c65bca71",
            entities: [
                "dist/**/**.entity.js"
            ],
            synchronize: false,
        },
    }
}

const envConfig = process.env.NODE_ENV ? Config.production : Config.development;
export default envConfig;
