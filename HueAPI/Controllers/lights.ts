// dep modules
import axios from 'axios';

// own modules
import { saveFile, readFile } from '../HueAPIUtils';
import { baseURL } from './main';

// project modules
import type { ILights } from '../../types/ILights';
import { DataType } from '../../enums/DataType';

export async function getLights(lightName: string): Promise<string> {
    const { data } = await axios.get<Record<string, ILights>>(`${baseURL}/lights`);
    saveFile(DataType.LIGHTS, Object.values(data));  
    const lightsEntries = Object.entries(data);
    return lightsEntries.filter(entry => entry[1].name === lightName)[0][0];
}

export async function setLightState(lightId: string, on: boolean): Promise<unknown>{
    const { data } = await axios.put(`${baseURL}/${lightId}/state`, { on });
    // [ { success: { '/lights/7/state/on': true } } ]
    return data;
};
