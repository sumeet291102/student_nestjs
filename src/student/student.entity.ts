import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity('Student')
export class Student {
  @Column()
  name: string;
  
  @PrimaryGeneratedColumn()
  roll_number: number;
  
  @Column()
  class: string;
  
  @Column()
  section: string;
  
  @Column()
  address: string;

  @Column()
  phone_number: string;

  @Column()
  subjects: string;

  @Column()
  aadhaar_number: string;

  @Column()
  date_of_birth: string;

  @Column()
  gender: string;
}