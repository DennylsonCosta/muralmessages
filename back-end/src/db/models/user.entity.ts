import {
	Column,
	CreateDateColumn,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
  } from 'typeorm';
  import Message from './message.entity';
  import { Field, ObjectType } from '@nestjs/graphql';
  
  @ObjectType()
  @Entity({ name: 'users' })
  export default class User {
  
	@Field()
	@PrimaryGeneratedColumn()
	id: number;
    
	@Field()
	@Column()
	email: string;
    
	@Field()
	@CreateDateColumn({name: 'created_at'})
	createdAt: Date;
    
	@Field()
	@UpdateDateColumn({name: 'updated_at'})
	updatedAt: Date;
  
	// Associations
	@OneToMany(() => Message, messages => messages.userConnection)
	messageConnection: Promise<Message[]>;
  
  }