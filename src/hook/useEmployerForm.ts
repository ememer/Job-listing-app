import { useContext } from 'react';
import { FormContextProvider } from '../@types/FormContext';
import { JobListObject } from '../@types/JobListTypes';

import { FormContext } from '../Context/FormContext';

const MESSAGES = {
    EMPTY: ' ',
    UPS: 'Uppss🤔',
    HTTP_HTTPS: 'Incorrect format URL, should start with HTTP:// or HTTPS://',
    REQUIRED: 'is required',
    INFO_MESSAGE: 'All fields should be filled in 👨🏼‍💻',
    INFO_MESSAGE_ASTERIX: 'Fields with an asterisk need to be completed 👨🏼‍💻',
};

const validateURL = (url: string): boolean => {
    //regEx for HTTP:// HTTPS:// recognizing
    //eslint-disable-next-line
    const regEx = /^(http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    return regEx.test(String(url).toLowerCase());
};

const validateForm = ({
    company,
    logo,
    position,
    role,
    level,
    contract,
    location,
    languages,
    image,
    tools,
    description,
    address,
}: JobListObject) => {
    // FIRST STEP

    if (!company || !position || !role || !level) {
        return { _infoStepOne: MESSAGES.INFO_MESSAGE };
    }

    // SECOND STEP
    
    if (!contract && location && languages.length >= 1 && tools.length >= 1) {                
        return {
            _infoStepTwo: MESSAGES.INFO_MESSAGE_ASTERIX,
            contract: `Contract ${MESSAGES.REQUIRED}`,
        };
    }
    if (contract && !location && languages.length >= 1 && tools.length >= 1) {   
        return {
            _infoStepTwo: MESSAGES.INFO_MESSAGE_ASTERIX,
            location: `Location ${MESSAGES.REQUIRED}`,
        };
    }

    if (!contract && !location && languages.length < 1) {
        return { _infoStepTwo: MESSAGES.INFO_MESSAGE_ASTERIX };
    }

    if ((contract && location && languages.length < 1) || tools.length > 1) {

        return {
            _infoStepTwo: MESSAGES.INFO_MESSAGE_ASTERIX,
            languages: `Language ${MESSAGES.REQUIRED}`,
        };
    }
  

    if (!contract || !location || languages.length < 1) {
        return { _infoStepTwo:  MESSAGES.INFO_MESSAGE_ASTERIX };
    }

    // THIRD STEP

    if (!logo && !image) {
        return { _infoStepThree: MESSAGES.INFO_MESSAGE_ASTERIX };
    }

    if (!logo && image && !validateURL(image)) {
        return {
            _infoStepThree: MESSAGES.UPS,
            logoURL: `Logo URL ${MESSAGES.REQUIRED}`,
            imageURL: MESSAGES.HTTP_HTTPS,
        };
    }

    if (logo && !validateURL(logo) && image && !validateURL(image)) {
        return {
            _infoStepThree: MESSAGES.UPS,
            imageURL: MESSAGES.HTTP_HTTPS,
        };
    }

    if (logo && validateURL(logo) && image && !validateURL(image)) {
        return {
            _infoStepThree: MESSAGES.UPS,
            imageURL: MESSAGES.HTTP_HTTPS,
        };
    }

    if (!logo && image && validateURL(image)) {
        return {
            _infoStepThree: MESSAGES.UPS,
            logoURL: `Logo URL ${MESSAGES.REQUIRED}`,
        };
    }

    if (logo && !validateURL(logo)) {
        return {
            _infoStepThree: MESSAGES.UPS,
            logoURL: MESSAGES.HTTP_HTTPS,
        };
    }


    // FOURTH STEP

    if (!description.title || !description.text) {
        return {
            _infoStepFour: MESSAGES.INFO_MESSAGE_ASTERIX,
        };
    }

    if (description.title && description.title.length < 3) {
        return {
            _infoStepFour: MESSAGES.INFO_MESSAGE_ASTERIX,
            descriptionTitle: 'Title should have minimum 3 characters',
        };
    }

    if (description.text && description.text.length < 20) {
        return {
            _infoStepFour: MESSAGES.INFO_MESSAGE_ASTERIX,
            descriptionText: 'Description should have minimum 20 characters',
        };
    }

    if ((description.subtitle || description.subtext) && (!description.title || !description.text)) {
        return {
            _infoStepFour: MESSAGES.INFO_MESSAGE_ASTERIX,
            descriptionTitle: `Title ${MESSAGES.REQUIRED}`,
            descriptionText: `Description ${MESSAGES.REQUIRED}`,
        };
    }

    // FIFTH STEP

    if(!address.city || !address.country || !address.number || !address.postcode || !address.street){
        return {
            _infoFifthStep: MESSAGES.INFO_MESSAGE
        }
    }
};

export const useEmployerForm = () => {
    const { employerAnnouncement } = useContext(FormContext) as FormContextProvider;

    const validationError = validateForm(employerAnnouncement);

    return { validationError };
};
