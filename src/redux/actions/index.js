// action types
export const DISPLAY_DOCTORS = 'DISPLAY_DOCTORS';


// display doctors action creator
export const displayDoctors = (doctors) => {
    return{
        type: DISPLAY_DOCTORS,
        doctors
    }
}