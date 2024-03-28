import { AxiosError, AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import {
    CreateNoteForm,
    CreateNoteresponse,
    GetDeleteNotes,
    GetNotesResponse,
    EditNoteresponse,
    EditNoteReq,
    EditNoteApiParams,
} from '../types/Service';
import {
    createNote,
    deleteNotesById,
    getAllNotes,
    getNotesById,
    editNoteById,
} from '../services/notes';

export const useGetAllNotes = () =>
    useMutation<AxiosResponse<GetNotesResponse[]>, AxiosError>(getAllNotes);

export const useGetNoteById = () =>
    useMutation<AxiosResponse<GetNotesResponse>, AxiosError, string>(data =>
        getNotesById(data),
    );
export const usefindByIdAndDelete = () =>
    useMutation<AxiosResponse<GetDeleteNotes>, AxiosError, string>(
        deleteNotesById,
    );
export const useCreateNote = () =>
    useMutation<AxiosResponse<CreateNoteresponse>, AxiosError, CreateNoteForm>(
        data => createNote(data),
    );
export const usefindByIdAndUpdate = () =>
    useMutation<AxiosResponse<EditNoteresponse>, AxiosError, EditNoteApiParams>(
        data => editNoteById(data.noteId, data.request),
    );
