import {Column, Entity, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { Product } from "./product";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    name: string;

    @Column()
    pswd: string;

    @OneToMany(type => Product, product => product.user) products: Product[]; 
}