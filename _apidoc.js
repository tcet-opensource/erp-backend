// ------------------------------------------------------------------------------------------
// General apiDoc documentation blocks and old history blocks.
// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------
// Current Success.
// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------
// Current Errors.
// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------
// Current Permissions.
// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------
// History.
// ------------------------------------------------------------------------------------------
/**
 * @api {get} infrastructure/list Request Infrastructure List
 * @apiName GetInfrastructure
 * @apiGroup Infrastructure
 *
 * @apiQuery {String} name Name of Infrastructure .
 * @apiQuery {String} type Type of Infrastructure. One of possible Lab, Classroom.
 * @apiQuery {String} wing Wing of Infrastructure.
 * @apiQuery {Number} floor Floor of Infrastructure.
 * @apiQuery {Number} capacity Capacity of Infrastructure.
 * 
 * @apiSuccess {Infrastructure[]} res Array of Filtered Infrastructure Doc .
 * @apiSuccess {String} infrastructure.name Name of Infrastructure
 * @apiSuccess {String} infrastructure.type Type of Infrastructure.
 * @apiSuccess {String} infrastructure.wing Wing of Infrastructure.
 * @apiSuccess {Number} infrastructure.floor Floor of Infrastructure.
 * @apiSuccess {Number} infrastructure.capacity Capacity of Infrastructure.
 */