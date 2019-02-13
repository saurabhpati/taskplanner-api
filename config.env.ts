export interface IOrmConfig {
    type: string;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    entities: string[];
    synchronize: boolean;
}

export interface IMode {
    port: number;
    cors: boolean;
    orm: IOrmConfig;
}

export class Config {
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
        port: 8000,
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
            synchronize: true,
        },
    }
}
