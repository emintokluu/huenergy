// dep modules
import axios from 'axios';

// project modules
import { baseURL } from './main';
import { saveFile } from '../HueAPIUtils';
import { IGroups } from '../../types/IGroups';
import { DataType } from '../../enums/DataType';

export async function getAllGroups(){
    const { data } = await axios.get<Record<string, IGroups>>(`${baseURL}/groups`);
    const groups = Object.values(data);
    saveFile(DataType.GROUPS, groups);  
    return groups;
}

export async function setGroupState(groupId: string){
    const { data } = await axios.put(`${baseURL}/groups/${groupId}`)
}