import {Entity, Double, PrimaryGeneratedColumn, Column} from 'typeorm/browser';

@Entity()
export class Distillation {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: Date;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    taxID: string;

    @Column()
    originID: string;

    @Column()
    HLF: Double;

    @Column()
    weightInKilograms: Double;
}