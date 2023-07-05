/**
 * @api {post} /infrastructure/add Add Infrastructure
 * @apiName AddInfrastructure
 * @apiGroup Infrastructure
 *
 * @apiParam {String} name The name of the infrastructure.
 * @apiParam {String} type The type of the infrastructure.
 * @apiParam {String} wing The wing where the infrastructure is located.
 * @apiParam {Number} floor The floor where the infrastructure is located.
 * @apiParam {Number} capacity The capacity of the infrastructure.
 *
 * @apiSuccess {String} res Success message with the ID of the added infrastructure.
 *
 * @apiError (Error 500) DatabaseError Error while inserting in the database.
 *
 * @apiDescription Adds a new infrastructure to the system.
 */