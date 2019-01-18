import "reflect-metadata";
import {createConnection} from "typeorm";
import {Distillation} from "./Distillation";
 


export class SQLService {

    distillation: any;

    async createConnection() {
        this.distillation = await createConnection({
            type: "sqljs",
            entities: [
                Distillation
            ],
            synchronize: true,
            logging: true,
        });
    }

    async findAll() {
        return await this.distillation.getRepository(Distillation).createQueryBuilder().getMany();
    }

    async findAllByName(nameToFind: string) {
        return await this.distillation.getRepository(Distillation).createQueryBuilder("distillation").where("distillation.name = :name", {name: nameToFind}).getMany();
    }
    async findAllByTaxID(taxIDToFind: string) {
        return await this.distillation.getRepository(Distillation).createQueryBuilder("distillation").where("distillation.taxID = :taxID", {taxID: taxIDToFind}).getMany();
    }

    async sumAllHLFByName(nameToFind: string) {
        return await this.distillation.getRepository(Distillation)
        .createQueryBuilder("distillation")
        .select("distillation.name")
        .addSelect("SUM(distillation.HLF)", "sum")
        .where("distillation.name = :name", {name: nameToFind})
        .getRawOne();
    }

    async sumAllHLFByTaxID(taxIDToFind: string) {
        return await this.distillation.getRepository(Distillation)
        .createQueryBuilder("distillation")
        .select("distillation.name")
        .addSelect("SUM(distillation.HLF)", "sum")
        .where("distillation.taxID = :taxID", {taxID: taxIDToFind})
        .getRawOne();
    }

    async sumAllWeightByName(nameToFind: string) {
        return await this.distillation.getRepository(Distillation)
        .createQueryBuilder("distillation")
        .select("distillation.name")
        .addSelect("SUM(distillation.weightInKilograms)", "sum")
        .where("distillation.name = :name", {name: nameToFind})
        .getRawOne();
    }

    async sumAllWeightByTaxID(taxIDToFind: string) {
        return await this.distillation.getRepository(Distillation)
        .createQueryBuilder("distillation")
        .select("distillation.name")
        .addSelect("SUM(distillation.HLF)", "sum")
        .where("distillation.taxID = :taxID", {taxID: taxIDToFind})
        .getRawOne();
    }


    async createNewDistillation(modelObject: Distillation) {
        return await this.distillation
        .createQueryBuilder()
        .insert()
        .into(Distillation)
        .values([
            modelObject
         ])
        .execute();
    }

    async updateDistillation(modelObject: Distillation) {
        return await this.distillation
        .createQueryBuilder()
        .update(Distillation)
        .set(modelObject)
        .where("id = :id", { id: modelObject.id })
        .execute();
    }

    async deleteDistillation(modelObject: Distillation) {
        return await this.distillation.createQueryBuilder()
        .delete()
        .from(Distillation)
        .where("id = :id", { id: modelObject.id })
        .execute();
    }

    async closeConnection() {
        await this.distillation.close();
    }
}