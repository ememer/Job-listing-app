export interface JobListObject {
    id: number;
    company: string;
    logo: string;
    new: true | false;
    featured: true | false;
    position: string;
    role: string;
    level: string;
    postedAt: string;
    contract: string;
    location: string;
    languages: string[] | [];
    tools: string[] | [];
    image: string;
    description: {
        title: string;
        text: string;
        subtitle: string;
        subtext: string;
    };
    address: {
        postcode: string;
        city: string;
        country: string;
        street: string;
        number: number | string;
    };
}

export type ContextType = {
    jobLists: JobListObject[];
    filtersArray: string[];
    setFiltersArray: Dispatch<React.SetStateAction<string[]>>;
    displayFilteredJobs: () => JobListObject[];
};
