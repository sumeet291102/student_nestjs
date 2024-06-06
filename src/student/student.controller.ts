import { Controller, Get, Body} from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.entity';

@Controller('student')
export class StudentController {
  constructor(
    private readonly studentService: StudentService,
  ) {}

  @Get()
  async find(@Body() student: Partial<Student>) {
    return this.studentService.find(student)
  }
}
