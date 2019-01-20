import {
    MOCK_FAMILY,
    ADD_NEW_PERSON_OFFLINE,
} from './types';

export const offlineAddNewPerson = (familyId, details, relationships, familyPeople) => {
    return {
        type: ADD_NEW_PERSON_OFFLINE,
        payload: {
            person: {
                familyId,
                details,
                relationships,
            },
            familyPeople,
        },
    };
};

export const mockOfflineSingleFamily = () => ({
    type: MOCK_FAMILY,
    payload: {
        family: {
            people: [],
            name: 'Offline',
            owner: 'offline',
        },
    },
});