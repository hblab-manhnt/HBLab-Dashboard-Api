 /**
 * @api {post} /api/gc-history Store BotGCHistory every 30 minutes
 * @apiName StoreBotGcHistory
 * @apiGroup Bots
 *
 * @apiParam {String} update_key Key for server to check permission
 *
 * @apiSuccess {Int} code Status code.
 * @apiSuccess {String} message  Message of server.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": "200",
 *       "message": "Store gc history success!"
 *     }
 *
 * @apiError storeGcFail Store gc failed.
 *
 * @apiErrorExample Server error:
 *     HTTP/1.1 500 Server error
 *     {
 *       "code": "500",
 *       "message": "Store gc history fail!"
 *     }
 * 
 * @apiuse WrongCurl
 */