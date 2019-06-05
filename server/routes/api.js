import { Router } from 'express'
import controller from '../controllers'

export default () => {
    let api = Router();

    api.post('/cashmachine', controller.CashMachine);
    api.post('/nonrepeatingcharacter', controller.NonRepeatingCharacter);
    api.post('/romannumbers', controller.RomanNumbers);
    api.post('/scalebalancing', controller.ScaleBalancing);
    api.post('/kaprekarsconstant', controller.KaprekarsConstant);

    return api
}