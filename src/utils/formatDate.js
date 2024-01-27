export const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
    }).format(new Date(Date.parse(date)));
};













// in nucampsite/src/app/shared/COMMENTS.js date is stored in ISO 8601 format
