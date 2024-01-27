import { COMMENTS } from '../../app/shared/COMMENTS';

export const selectCommentsByCampsiteId = (campsiteId) => {
    return COMMENTS.filter(comment => comment.campsiteId === parseInt(campsiteId));
};




// there is a campsiteId property in the COMMENTS array for each comment