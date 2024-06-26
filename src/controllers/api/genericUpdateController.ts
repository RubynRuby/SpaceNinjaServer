import { updateGeneric } from "@/src/services/inventoryService";
import { RequestHandler } from "express";
import { getJSONfromString } from "@/src/helpers/stringHelpers";

// eslint-disable-next-line @typescript-eslint/no-misused-promises
const genericUpdateController: RequestHandler = async (request, response) => {
    const accountId = request.query.accountId as string;
    const update = getJSONfromString(request.body.toString());
    response.json(await updateGeneric(update, accountId));
};

export { genericUpdateController };
