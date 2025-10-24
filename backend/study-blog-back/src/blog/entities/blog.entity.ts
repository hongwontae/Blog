import {Column, PrimaryGeneratedColumn, AfterInsert, AfterUpdate, AfterRemove, CreateDateColumn, UpdateDateColumn, Entity} from 'typeorm';


@Entity('blog')
export class BlogEntity{

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    title : string;

    @Column({type : 'mediumtext', nullable : false})
    blogContent : string;

    @CreateDateColumn({type : 'timestamp'})
    createdAt : Date;

    @UpdateDateColumn({type : 'timestamp', nullable : true})
    updatedAt : Date;


}