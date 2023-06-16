import { elmMatcher, isElement } from "../../utils/tools";
import { XastElement } from "../../utils/xast";

/** Division elements. They get ids auto-generated */
export const DIVISIONS = new Set([
    "book",
    "article",
    "part",
    "chapter",
    "section",
    "subsection",
    "subsubsection",
    "paragraphs",
    // These are special divisions; they can still be referenced.
    "frontmatter",
    "introduction",
    "conclusion",
    "headnote",
]);
/** Special division elements that don't get numbers displayed */
export const DIVISIONS_WITHOUT_NUMBERS = new Set([
    "frontmatter",
    "introduction",
    "conclusion",
    "headnote",
]);

/** Elements that can be referenced. They get an id auto-generated */
export const REFABLE = new Set([
    "mrow",
    "author",
    "alert",
    "angles",
    "articletitle",
    "attribution",
    "biblio",
    "caption",
    "cell",
    "dblbrackets",
    "delete",
    "em",
    "me",
    "men",
    "mrow",
    "entity",
    "fn",
    "foreign",
    "insert",
    "intertext",
    "line",
    "p",
    "pubtitle",
    "q",
    "shortlicense",
    "sq",
    "stale",
    "subtitle",
    "term",
    "title",
    "li",
    "axiom",
    "theorem",
    "corollary",
    "lemma",
    "algorithm",
    "proposition",
    "claim",
    "fact",
    "definition",
    "conjecture",
    "axiom",
    "principle",
    "heuristic",
    "hypothesis",
    "assumption",
    "example",
    "remark",
]);

/** Blocks that get their own numbering (based on the division number) */
export const NUMBERED_BLOCKS = new Set([
    "axiom",
    "theorem",
    "corollary",
    "lemma",
    "algorithm",
    "proposition",
    "claim",
    "fact",
    "definition",
    "conjecture",
    "axiom",
    "principle",
    "heuristic",
    "hypothesis",
    "assumption",
    "example",
    "remark",
]);

/**
 * Tags that can be referred to via an <xref ref=.../> tag.
 *
 * XXX this is taken from the localization file. It probably includes things
 * intended for localization that don't correspond to actual elements.
 */
export const XREFABLE = new Set([
    "theorem",
    "corollary",
    "lemma",
    "algorithm",
    "proposition",
    "claim",
    "fact",
    "identity",
    "proof",
    "argument",
    "justification",
    "reasoning",
    "explanation",
    "case",
    "axiom",
    "conjecture",
    "principle",
    "heuristic",
    "hypothesis",
    "assumption",
    "definition",
    "me",
    "men",
    "mrow",
    "md",
    "mdn",
    "volume",
    "book",
    "article",
    "letter",
    "slideshow",
    "memo",
    "presentation",
    "frontmatter",
    "part",
    "chapter",
    "appendix",
    "appendices",
    "section",
    "subsection",
    "subsubsection",
    "slide",
    "introduction",
    "conclusion",
    "exercises",
    "worksheet",
    "reading-questions",
    "solutions",
    "glossary",
    "references",
    "backmatter",
    "paragraphs",
    "commentary",
    "subparagraph",
    "remark",
    "convention",
    "note",
    "observation",
    "warning",
    "insight",
    "computation",
    "technology",
    "data",
    "aside",
    "biographical",
    "historical",
    "example",
    "question",
    "problem",
    "project",
    "activity",
    "exploration",
    "task",
    "investigation",
    "assemblage",
    "poem",
    "objectives",
    "objective",
    "outcomes",
    "outcome",
    "openquestion",
    "openproblem",
    "openconjecture",
    "context",
    "discussion",
    "opinion",
    "status",
    "suggestion",
    "figure",
    "table",
    "listing",
    "fn",
    "contributor",
    "list",
    "li",
    "gi",
    "blockquote",
    "pre",
    "fragment",
    "divisionalexercise",
    "inlineexercise",
    "worksheetexercise",
    "readingquestion",
    "webwork",
    "hint",
    "answer",
    "solution",
    "subexercises",
    "exercisegroup",
    "biblio",
    "toc",
    "abstract",
    "preface",
    "acknowledgement",
    "biography",
    "about-author",
    "about-authors",
    "foreword",
    "dedication",
    "colophon",
    "video",
    "program",
    "program-activecode",
    "program-codelens",
    "index-part",
    "jump-to",
    "index",
    "see",
    "also",
    "symbol",
    "description",
    "location",
    "page",
    "continued",
    "skip-to-content",
    "previous",
    "up",
    "next",
    "previous-short",
    "up-short",
    "next-short",
    "annotations",
    "feedback",
    "authored",
    "search-results-heading",
    "no-search-results",
    "to",
    "from",
    "subject",
    "date",
    "copy",
    "enclosure",
    "todo",
    "editor",
    "edition",
    "website",
    "copyright",
    "permalink",
    "incontext",
    "evaluate",
    "instructions",
    "correct",
    "incorrect",
    "blank",
    "submit",
    "check-responses",
    "reveal",
    "randomize",
    "activate",
    "reset",
    "array",
    "print",
]);

/** Matches a `<title>` element. */
export const isTitleNode = elmMatcher("title");
/** Matches an element that can serve as a division. */
export const isDivision = (node: any): node is XastElement => {
    return isElement(node) && DIVISIONS.has(node.name);
};
/** Matches any element that can be referenced. */
export const isRefable = (node: any): node is XastElement => {
    return isElement(node) && REFABLE.has(node.name);
};

/** Matches any element that can be <xref />ed. */
export const isXRefable = (node: any): node is XastElement => {
    return isElement(node) && XREFABLE.has(node.name);
};
