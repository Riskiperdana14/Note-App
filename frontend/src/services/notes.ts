import { AxiosResponse } from 'axios';
import { GetNotesResponse } from '../types/Service';
import httpRequest from './api';

export const getAllNotes = async (): Promise<
    AxiosResponse<GetNotesResponse[]>
> => {
    return await httpRequest.get(`/notes`);
};
