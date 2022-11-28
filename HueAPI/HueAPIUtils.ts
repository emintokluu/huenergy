// core modules
import { writeFileSync, readFileSync, existsSync } from 'fs';

// project modules
import { DataType } from './enums/DataType';
import type { UnknownObject } from './types/Generic';


export function readFile(type: DataType): UnknownObject {
    
    if (!existsSync('./db.json')) {
        writeFileSync('./db.json', JSON.stringify({}));
    }

    const data = readFileSync('./db.json', 'utf-8')
    return JSON.parse(data);
};

export function saveFile(type: DataType, data: UnknownObject): void {
    const readedData = readFile(type);
    const newData = { ...readedData, [type]: data };
    writeFileSync('./db.json', JSON.stringify(newData, null, 4));
};
