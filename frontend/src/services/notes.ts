import { AxiosResponse } from 'axios';
import {
    CreateNoteForm,
    CreateNoteresponse,
    EditNoteReq,
    EditNoteresponse,
    GetDeleteNotes,
    GetNotesResponse,
} from '../types/Service';
import httpRequest from './api';

export const getAllNotes = async (): Promise<
    AxiosResponse<GetNotesResponse[]>
> => {
    return await httpRequest.get(`/notes`);
};

export const getNotesById = async (
    noteId: string,
): Promise<AxiosResponse<GetNotesResponse>> => {
    return await httpRequest.get(`/notes/${noteId}`);
};

export const deleteNotesById = async (
    noteId: string,
): Promise<AxiosResponse<GetDeleteNotes>> => {
    return await httpRequest.delete(`/notes/${noteId}`);
};

export const createNote = async (
    request: CreateNoteForm,
): Promise<AxiosResponse<CreateNoteresponse>> => {
    return await httpRequest.post(`/notes`, request);
};

export const editNoteById = (
    noteId: string,
    request: EditNoteReq,
): Promise<AxiosResponse<EditNoteresponse>> => {
    return httpRequest.put(`/notes/${noteId}`, request);
};
