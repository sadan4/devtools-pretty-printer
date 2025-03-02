export const findLineEndingIndexes: (inputString: string) => number[];

export class FormattedContentBuilder {
    #private;
    private indentString;
    mapping: {
        original: number[];
        formatted: number[];
    };
    constructor(indentString: string);
    setEnforceSpaceBetweenWords(value: boolean): boolean;
    addToken(token: string, offset: number): void;
    addSoftSpace(): void;
    addHardSpace(): void;
    addNewLine(noSquash?: boolean): void;
    increaseNestingLevel(): void;
    decreaseNestingLevel(): void;
    content(): string;
}

export class JavaScriptFormatter {
    #private;
    constructor(builder: FormattedContentBuilder);
    format(text: string, lineEndings: number[], fromOffset: number, toOffset: number): void;
}

export function Format(text: string): string;
