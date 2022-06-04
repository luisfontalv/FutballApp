import { generateMean } from "../../helpers/generateMean";

describe('Pryebas en helper generateMean', () => {
    test('debe traer un 99', async () => {
        const data = await generateMean({
            rit: 99,
            tir: 99,
            pas: 99,
            reg: 99,
            def: 99,
            fis: 99
        });

        expect(data).toBe(99);
    })

    test('No debe traer un string o una cadena con undefined', async () => {
        const data = await generateMean({
            rit: 99,
            tir: 99,
            pas: 99,
            reg: 99,
            def: 99,
            fis: 99
        });
        const expected = "undefined"

        expect(data).toEqual(expect.not.stringMatching(expected));
    })

    test('debe traer un 10', async () => {
        const data = await generateMean({
            rit: 15,
            tir: 4,
            pas: 19,
            reg: 16,
            def: 5,
            fis: 1
        });

        expect(data).toBe(10);
    })

    test('debe traer un 62', async () => {
        const data = await generateMean({
            rit: 32,
            tir: 20,
            pas: 75,
            reg: 80,
            def: 90,
            fis: 75
        });

        expect(data).toBe(62);
    })

    test('debe traer un 85', async () => {
        const data = await generateMean({
            rit: 80,
            tir: 75,
            pas: 92,
            reg: 86,
            def: 97,
            fis: 80
        });

        expect(data).toBe(85);
    })
})