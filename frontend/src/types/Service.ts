export type GetNotesResponse = {
    _id: string;
    title: string;
    desc: string;
    dibuatSaat: string;
    dieditSaat: string;
};
export type GetDeleteNotes = {
    _id: string;
    title: string;
    desc: string;
};

export type CreateNoteForm = { title: string; desc: string };

export type CreateNoteresponse = {
    msg: string;
};

export type EditNoteReq = {
    title: string;
    desc: string;
};

export type EditNoteresponse = {
    msg: string;
};

export type EditNoteApiParams = {
    noteId: string;
    request: EditNoteReq;
};
