import { AxiosError, AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { GetNotesResponse } from '../src/types/Service';
import { getAllNotes } from '../src/services/notes';

export const useGetAllNotes = () =>
    useMutation<AxiosResponse<GetNotesResponse[]>, AxiosError>(getAllNotes);
