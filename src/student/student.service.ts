import { Injectable, Inject} from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { Repository } from 'typeorm';
import { Cache } from 'cache-manager';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
    @Inject(CACHE_MANAGER) private cacheService: Cache,
  ) {}
  
  async find(student: Partial<Student>) {
    const cachedData = await this.cacheService.get(JSON.stringify(student));
    if (cachedData) {
      console.log(`Getting data from cache!`, cachedData);
      return cachedData;
    }
    
    const data = await this.studentRepository.find({ where: student });
    await this.cacheService.set(JSON.stringify(student), data);
    return data;
  }
}