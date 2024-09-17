export default class ErrorRepository {
    constructor(){
        this.errors = new Map([
            [401, 'первая возможная ошибка'],
            [402, 'вторая возможная ошибка'],
            [403, 'третья возможная ошибка']
        ]);
    }
    translate(code){
        if (this.errors.has(code)){
            return this.errors.get(code);
        }
        return 'Unknow error';
    }
}