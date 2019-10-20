import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';
import config from '../../config';
import DB from '../../db';

export const CreateToken = async (payload: IPayload) => {
    let [tokenid]: any = await DB.Tokens.insert(payload.userid);
    payload.accesstokenid = tokenid;
    payload.unique = crypto.randomBytes(32).toString('hex');
    let token = await jwt.sign(payload, config.auth.secret);
    await DB.Tokens.update(payload.accesstokenid, token);
    return token;
};

export const ValidateToken = async (token:string) => {
    let payload: IPayload = <IPayload>jwt.decode(token);
    let [accesstokenid] = await DB.Tokens.findOne(payload.accesstokenid, token);
    if(!accesstokenid) {
        throw new Error('Token is not valid');
    } else {
        return payload;
    }
}
export interface IPayload {
    [key: string]: any;
    userid: number;
    unique?: string;
}