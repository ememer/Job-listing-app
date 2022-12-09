import { ChangeEvent } from "react";
import { JobListObject } from "./JobListTypes"

export type FormContextProvider = {
    employerAnnouncement: JobListObject,
    setEmployerAnnouncement: Dispatch<React.SetStateAction<{}>>,
    setAnnouncementField: (e: ChangeEvent, key: string) => void;
}