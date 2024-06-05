import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { Repository } from 'typeorm';
import { setDefaultAutoSelectFamily } from 'net';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}
  
  async find(student: Partial<Student>): Promise<Student[]> {

    // return this.studentRepository.find({ where: student });   
    return this.studentRepository.find({ where: student });
  }
}