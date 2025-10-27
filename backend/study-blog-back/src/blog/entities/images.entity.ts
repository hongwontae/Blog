import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BlogEntity } from "./blog.entity";

@Entity()
export class ImagesEntity{

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    secure_url : string;

    @Column()
    public_id : string;

    @ManyToOne(()=>BlogEntity, (blog)=>blog.images, {onDelete : 'CASCADE'})
    post : BlogEntity;

}