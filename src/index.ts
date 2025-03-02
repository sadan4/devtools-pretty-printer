import { FormattedContentBuilder } from "./FormattedContentBuilder";
import { JavaScriptFormatter } from "./JavaScriptFormatter";
import { findLineEndingIndexes } from "./StringUtilities";
export {
    FormattedContentBuilder,
    JavaScriptFormatter,
    findLineEndingIndexes
}
export function Format(text: string): string {
    const builder = new FormattedContentBuilder("    ");
    const formatter = new JavaScriptFormatter(builder);
    formatter.format(text, findLineEndingIndexes(text), 0, text.length);
    return builder.content();
}