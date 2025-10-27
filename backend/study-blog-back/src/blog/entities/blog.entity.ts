import {Column, PrimaryGeneratedColumn, AfterInsert, AfterUpdate, AfterRemove, CreateDateColumn, UpdateDateColumn, Entity, OneToMany} from 'typeorm';
import { ImagesEntity } from './images.entity';


@Entity('blog')
export class BlogEntity{

    @PrimaryGeneratedColumn()
    id : number;

    @Column({nullable : false})
    title : string;

    @Column({nullable : false})
    field : string;

    @Column({type : 'mediumtext', nullable : false})
    blogContent : string;

    @CreateDateColumn({type : 'timestamp'})
    createdAt : Date;

    @UpdateDateColumn({type : 'timestamp', nullable : true})
    updatedAt : Date;

    @OneToMany(()=>ImagesEntity, (images)=>images.post)
    images : ImagesEntity[];

}