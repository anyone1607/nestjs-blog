import {DataSourceOptions, DataSource} from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 33061,
    username: 'root',
    password: 'root',
    database: 'nestjs-blog',
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/db/migrations/*.js'],
    synchronize: false,
    // logging: true, // checkLog when dev change feild in table
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource