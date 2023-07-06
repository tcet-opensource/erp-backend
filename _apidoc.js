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
 * @api {post} /accreditation/add Add Accreditation
 * @apiName AddAccreditation
 * @apiGroup Accreditation
 * @apiDescription Add a new accreditation.
 *
 * @apiBody {String} name Accreditation name.
 * @apiBody {String} agencyName Agency name.
 * @apiBody {Date} dateofAccreditation Date of accreditation.
 * @apiBody {Date} dateofExpiry Date of expiry.
 *
 * @apiSuccess {String} res Response message.
 * @apiError (Error 500) UserNotFound The  of the User was not found
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "res": "added accreditation Example Accreditation"
 *     }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "err": "Error while inserting in DB"
 *     }
 */
