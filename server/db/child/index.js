import select from './select';
import insert from './insert';
import deleteQueries from './delete';
import update from './update';

export default {
    select,
    insert,
    delete: deleteQueries,
    update
};