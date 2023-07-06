/**
 * @api {post} /auth Login User
 * @apiName LoginUser
 * @apiGroup Authentication
 *
 * @apiParam {String} id User ID.
 * @apiParam {String} password User password.
 *
 * @apiSuccess {String} res Response message.
 * @apiSuccess {Object} user User details.
 * @apiSuccess {String} user.uid User ID.
 * @apiSuccess {String} user.name User name.
 * @apiSuccess {String} user.emailId User email ID.
 * @apiSuccess {String} user.type User type.
 * @apiSuccess {String} user.token User token.
 *
 * @apiSuccessExample Success Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "res": "welcome",
 *       "user": {
 *         "uid": "123",
 *         "name": "Some User",
 *         "emailId": "someuser@example.com",
 *         "type": "user",
 *         "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       }
 *     }
 *
 * @apiError (Error 403) UserDoesNotExist Incorrect ID or password.
 * @apiError (Error 500) ServerError Something is wrong on our side. Try again.
 */

/**
 * @api {post} /auth/validateUser Validate User
 * @apiName ValidateUser
 * @apiGroup Authentication
 * @apiDescription Validates the user's authentication token.
 *
 * @apiHeader {String} Authorization User's authentication token.
 *
 * @apiSuccess {Object} res User object.
 * @apiSuccess {Object} res.user User details.
 * @apiSuccess {String} res.user.uid User ID.
 * @apiSuccess {String} res.user.name User name.
 * @apiSuccess {String} res.user.emailId User email ID.
 * @apiSuccess {String} res.user.type User type.
 *
 * @apiSuccessExample Success Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "res": {
 *         "user": {
 *           "uid": "123",
 *           "name": "Some User",
 *           "emailId": "someuser@example.com",
 *           "type": "user"
 *         },
 *         "msg": "user validated",
 *         "err": null
 *       }
 *     }
 */

/**
 * @api {post} /auth/sendOTP Send OTP
 * @apiName SendOTP
 * @apiGroup Authentication
 * @apiDescription Sends an OTP (One-Time Password) to the user's email ID.
 *
 * @apiParam {String} uid User ID.
 * @apiParam {String} emailId User email ID.
 *
 * @apiSuccess {String} res Response message.
 *
 * @apiSuccessExample Success Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "res": "otp sent to emailID"
 *     }
 *
 * @apiError (Error) IncorrectUidOrEmail Incorrect UID or emailId.
 */

/**
 * @api {post} /auth/resetPassword Reset Password
 * @apiName ResetPassword
 * @apiGroup Authentication
 * @apiDescription Resets the user's password using the provided OTP (One-Time Password).
 *
 * @apiParam {String} uid User ID.
 * @apiParam {String} otp One-Time Password received by the user.
 * @apiParam {String} password New password.
 *
 * @apiSuccess {String} res Response message.
 *
 * @apiSuccessExample Success Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "res": "successfully updated password"
 *     }
 *
 * @apiError (Error) IncorrectOtp Incorrect OTP.
 * @apiError (Error 500) UpdateError Something went wrong while updating password.
 * @apiError (Error 500) ServerError Something went wrong.
 */
