import {Controller, Get, Post} from '@nestjs/common';
import {PatientService} from "./patient.service";
import {Patient} from "./patient.entity";

@Controller('patients')
export class PatientController {

    constructor(private patients: PatientService) {}

    @Get('all')
    async findAll(): Promise<string> {
        const temp = await this.patients.findAll();
        return JSON.stringify(temp);
    }

    @Post('submit')
    post(patient: Patient): any {
        return this.patients.create(patient);
    }
}
