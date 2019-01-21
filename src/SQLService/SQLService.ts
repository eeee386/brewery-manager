import "reflect-metadata";
import {Connection, createConnection} from "typeorm";
import {Distillation} from "./Distillation";
 


export class SQLService {

    connection: Connection;

    async createConnection() {
        console.log('connection started');
        this.connection = await createConnection({
            type: "sqljs",
            entities: [
                Distillation
            ],
            synchronize: true,
            logging: true,
        });
    }

    async findAll() {
        return await this.connection.getRepository(Distillation).createQueryBuilder().getMany();
    }

    async findAllByName(nameToFind: string) {
        return await this.connection.getRepository(Distillation).createQueryBuilder("connection").where("connection.name = :name", {name: nameToFind}).getMany();
    }
    async findAllByTaxID(taxIDToFind: string) {
        return await this.connection.getRepository(Distillation).createQueryBuilder("connection").where("connection.taxID = :taxID", {taxID: taxIDToFind}).getMany();
    }

    async sumAllHLFByName(nameToFind: string) {
        return await this.connection.getRepository(Distillation)
        .createQueryBuilder("connection")
        .select("connection.name")
        .addSelect("SUM(connection.HLF)", "sum")
        .where("connection.name = :name", {name: nameToFind})
        .getRawOne();
    }

    async sumAllHLFByTaxID(taxIDToFind: string) {
        return await this.connection.getRepository(Distillation)
        .createQueryBuilder("connection")
        .select("connection.name")
        .addSelect("SUM(connection.HLF)", "sum")
        .where("connection.taxID = :taxID", {taxID: taxIDToFind})
        .getRawOne();
    }

    async sumAllWeightByName(nameToFind: string) {
        return await this.connection.getRepository(Distillation)
        .createQueryBuilder("connection")
        .select("connection.name")
        .addSelect("SUM(connection.weightInKilograms)", "sum")
        .where("connection.name = :name", {name: nameToFind})
        .getRawOne();
    }

    async sumAllWeightByTaxID(taxIDToFind: string) {
        return await this.connection.getRepository(Distillation)
        .createQueryBuilder("connection")
        .select("connection.name")
        .addSelect("SUM(connection.HLF)", "sum")
        .where("connection.taxID = :taxID", {taxID: taxIDToFind})
        .getRawOne();
    }


    async createNewDistillation(modelObject: Distillation) {
        return await this.connection
        .createQueryBuilder()
        .insert()
        .into(Distillation)
        .values([
            modelObject
         ])
        .execute();
    }

    async updateDistillation(modelObject: Distillation) {
        return await this.connection
        .createQueryBuilder()
        .update(Distillation)
        .set(modelObject)
        .where("id = :id", { id: modelObject.id })
        .execute();
    }

    async deleteDistillation(modelObject: Distillation) {
        return await this.connection.createQueryBuilder()
        .delete()
        .from(Distillation)
        .where("id = :id", { id: modelObject.id })
        .execute();
    }

    async closeConnection() {
        await this.connection.close();
    }
}