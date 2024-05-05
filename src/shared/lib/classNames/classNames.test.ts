import { classNames } from "./classNames";

describe('classNames', () => {
    test('with first param', () => {
        const res = 'someClass';
        expect(classNames('someClass')).toBe(res);
    }),
    test('with last param', () => {
        const res = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(res);
    }),
    test('with mods', () => {
        const res = 'someClass hovered hidden';
        expect(classNames('someClass', {hovered: true, hidden: true}, [])).toBe(res);
    })
})