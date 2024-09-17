import ErrorRepository from "../errorrepository";

test('возвращает текстовое описание ошибки по номеру', () => {
    const repo = new ErrorRepository();
    expect(repo.translate(401)).toBe('первая возможная ошибка');
});

test('возвращает "Unknown error" когда кода ошибки не существует', () => {
    const repo = new ErrorRepository();
    expect(repo.translate(777)).toBe('Unknow error');
});
