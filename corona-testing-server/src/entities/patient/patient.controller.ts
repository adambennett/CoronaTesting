import { Controller, Get } from '@nestjs/common';
import {PatientService} from "./patient.service";
import {PatientModule} from "./patient.module";

@Controller('patients')
export class PatientController {

    constructor(private patients: PatientService) {}

    @Get('all')
    async findAll(): Promise<string> {
        const temp = await this.patients.findAll();
        return JSON.stringify(temp);
    }
}
