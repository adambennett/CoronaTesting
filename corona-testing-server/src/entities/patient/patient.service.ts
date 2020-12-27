import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Patient} from './patient.entity';

@Injectable()
export class PatientService {
    constructor(
        @InjectRepository(Patient)
        private patientRepository: Repository<Patient>,
    ) {}

    findAll(): Promise<Patient[]> {
        return this.patientRepository.find();
    }

    findOne(id: string): Promise<Patient> {
        return this.patientRepository.findOne(id);
    }

    create(patient: Patient): Patient {
        return this.patientRepository.create(patient);
    }

    async remove(id: string): Promise<void> {
        await this.patientRepository.delete(id);
    }
}
