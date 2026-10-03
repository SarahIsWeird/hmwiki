import { formatGC } from './HackmudColorizer';

// God is dead and we have killed him.

describe('formatGC', () => {
    test('formatGC correctly formats GC at the start of a string', () => {
        expect(formatGC('GC')).toBe(
            '<span class="color-b"></span><span class="color-c"><span class="color-b"></span><span class="color-c">GC</span></span>'
        );

        expect(formatGC('123GC')).toBe(
            '<span class="color-b">123<span class="color-background"></span></span><span class="color-c"><span class="color-b"></span><span class="color-c">GC</span></span>'
        );

        expect(formatGC('-1GC')).toBe(
            '-<span class="color-b">1<span class="color-background"></span></span><span class="color-c"><span class="color-b"></span><span class="color-c">GC</span></span>'
        );

        expect(formatGC('-1GC!')).toBe(
            '-<span class="color-b">1<span class="color-background"></span></span><span class="color-c"><span class="color-b"></span><span class="color-c">GC</span></span>!'
        );

        expect(formatGC('-1GCA')).toBe(
            '-<span class="color-b">1<span class="color-background"></span></span><span class="color-c"><span class="color-b"></span><span class="color-c">GC</span></span>A'
        );

        expect(formatGC('-98765Q432T123B456M789K876GC')).toBe(
            '-<span class="color-b">98765<span class="color-d">Q</span>432<span class="color-t">T</span>123<span class="color-j">B</span>456<span class="color-l">M</span>789<span class="color-n">K</span>876<span class="color-background"></span></span><span class="color-c"><span class="color-b"></span><span class="color-c">GC</span></span>'
        )
    });

    test('formatGC correctly formats GC in the middle of a string', () => {
        expect(formatGC(' GC ')).toBe(
            ' <span class="color-b"></span><span class="color-c">GC</span> '
        );

        expect(formatGC('AGC ')).toBe(
            'AGC '
        );

        expect(formatGC('ä1GC')).toBe(
            'ä1GC'
        );

        expect(formatGC(' 1GC ' )).toBe(
            ' <span class="color-b">1<span class="color-background"></span></span><span class="color-c">GC</span> '
        );

        expect(formatGC(' 1GCA')).toBe(
            ' 1GCA'
        );

        expect(formatGC(' 1GCä')).toBe(
            ' 1GCä'
        );

        expect(formatGC(' 1GC!')).toBe(
            ' <span class="color-b">1<span class="color-background"></span></span><span class="color-c">GC</span>!'
        );

        expect(formatGC('This sentence ends with GC')).toBe(
            'This sentence ends with GC'
        );

        expect(formatGC('This sentence ends with GC!')).toBe(
            'This sentence ends with <span class="color-b"></span><span class="color-c">GC</span>!'
        );

        expect(formatGC('This ends with -98765Q432T123B456M789K876GC')).toBe(
            'This ends with -98765Q432T123B456M789K876GC'
        );

        expect(formatGC('This ends with -98765Q432T123B456M789K876GC!')).toBe(
            'This ends with -<span class="color-b">98765<span class="color-d">Q</span>432<span class="color-t">T</span>123<span class="color-j">B</span>456<span class="color-l">M</span>789<span class="color-n">K</span>876<span class="color-background"></span></span><span class="color-c">GC</span>!'
        );
    });

    test('formatGC correctly formats multiple GC strings', () => {
        expect(formatGC('GC GC')).toBe(
            '<span class="color-b"></span><span class="color-c"><span class="color-b"></span><span class="color-c">GC</span></span> GC'
        );

        expect(formatGC('GC GC ')).toBe(
            '<span class="color-b"></span><span class="color-c"><span class="color-b"></span><span class="color-c">GC</span></span> <span class="color-b"></span><span class="color-c">GC</span> '
        );

        expect(formatGC('Between 1GC and 10QGC')).toBe(
            'Between <span class="color-b">1<span class="color-background"></span></span><span class="color-c">GC</span> and 10QGC'
        );

        expect(formatGC('Between 1GC and 10QGC!')).toBe(
            'Between <span class="color-b">1<span class="color-background"></span></span><span class="color-c">GC</span> and <span class="color-b">10<span class="color-d">Q</span></span><span class="color-c">GC</span>!'
        );
    });

    test('formatGC correctly formats weird input', () => {
        expect(formatGC('G\nC')).toBe(
            'G\nC'
        );

        expect(formatGC('1Q\n5GC')).toBe(
            '1Q\n5GC'
        );

        expect(formatGC('1Q\n5GC.')).toBe(
            '1Q\n<span class="color-b">5<span class="color-background"></span></span><span class="color-c">GC</span>.'
        );
    });
});
