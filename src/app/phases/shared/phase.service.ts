import { Injectable } from '@angular/core'

@Injectable()
export class PhaseService {
    
    getPhases() {
        return PHASES;
    }
}

const PHASES = [
    {
        id: 1,
        number: '1',
        name: 'Phase 1',
        description: 'Préalable au permis d\'apprenti',
        modules: [
            {
                name: "Le véhicule",
                date: '',
                times_start: '',
                times_end: '',
                student_signature: '',
                provider_signature: ''
            },
            {
                name: "Le conducteur",
                date: '',
                times_start: '',
                times_end: '',
                student_signature: '',
                provider_signature: ''
            },
            {
                name: "L'environnement",
                date: '',
                times_start: '',
                times_end: '',
                student_signature: '',
                provider_signature: ''
            },
            {
                name: "Comportements à risque",
                date: '',
                times_start: '',
                times_end: '',
                student_signature: '',
                provider_signature: ''
            },
            {
                name: "Évaluation",
                date: '',
                times_start: '',
                times_end: '',
                student_signature: '',
                provider_signature: ''
            }
        ]
    },
    {
        id: 2,
        number: '2',
        name: 'Phase 2',
        description: 'Conduite dirigée',
        modules: []
    },
    {
        id: 3,
        number: '3',
        name: 'Phase 3',
        description: 'Conduite semi-dirigée',
        modules: []
    },
    {
        id: 4,
        number: '4',
        name: 'Phase 4',
        description: 'Conduite semi-dirigée à autonome',
        modules: []
    },
];