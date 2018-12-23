import Sequelize from 'sequelize';

export class SQLService {
    constructor() {
        this.sequelize = new Sequelize('database', 'username', 'password', {
            host: 'localhost',
            dialect: 'sqlite',
            operatorsAliases: false,
            storage: './database.sqlite'
        });

        this.sequelize
            .authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
        });

        this.distillation = this.sequelize.define('customer', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            date: {
                type: Sequelize.DATE,
            },
            name: {
                type: Sequelize.STRING
              },
            address: {
                type: Sequelize.STRING
              },
            taxID: {
                type: Sequelize.STRING
            },
            originID: {
                type: Sequelize.STRING,
            },
            HLF: {
                type: Sequelize.DOUBLE,
            },
            weightInKilograms: {
                type: Sequelize.DOUBLE,
            }
        })

        this.distillation.sync();
    }

    async findAll() {
        return this.distillation.findAll().then(distillations => distillations)
    }

    async findAllByName(nameToFind) {
        return this.distillation.findAll({ where: {name: nameToFind}}).then(distillations => distillations);
    }
    async findAllByTaxID(taxIDToFind) {
        return this.distillation.findAll({where: {taxID: taxIDToFind}}).then(distillations => distillations);
    }

    async sumAllHLFByName(nameToFind) {
        return this.findAllByName(nameToFind).then(distillations => distillations.sum('HLF').then(sum=>sum));
    }

    async sumAllHLFByTaxID(taxIDToFind) {
        return this.findAllByTaxID(taxIDToFind).then(distillations => distillations.sum('HLF').then(sum=>sum));
    }

    async sumAllWeightByName(nameToFind) {
        return this.findAllByName(nameToFind).then(distillations => distillations.sum('weightInKilograms').then(sum=>sum));
    }

    async sumAllWeightByTaxID(taxIDToFind) {
        return this.findAllByTaxID(taxIDToFind).then(distillations => distillations.sum('weightInKilograms').then(sum=>sum));
    }


    async createNewDistillation(modelObject) {
        return this.distillation.create(modelObject).then(task => task);
    }

    async updateDistillation(modelObject) {
        return this.distillation.find({where: {id: modelObject.id}}).then(distillation => distillation.update(modelObject).then(distillation => distillation));
    }

    async deleteDistillation(id) {
        return this.distillation.find({where: {id: modelObject.id}}).then(distillation => distillation.destroy());
    }
}