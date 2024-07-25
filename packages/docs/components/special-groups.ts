/**
 * Some PreTeXt tags appear in similar contexts. This lists groups of such tags.
 */
export const SPECIAL_GROUPS = {
    "Special Characters": [
        "nbsp",
        "mdash",
        "ndash",
        "lsq",
        "rsq",
        "rq",
        "lq",
        "ldblbracket",
        "rdblbracket",
        "langle",
        "rangle",
        "minus",
        "times",
        "solidus",
        "obelus",
        "plusminus",
        "degree",
        "prime",
        "dblprime",
        "ellipsis",
        "midpoint",
        "swungdash",
        "permille",
        "pilcrow",
        "section-mark",
        "copyleft",
        "copyright",
        "registered",
        "trademark",
        "phonomark",
        "servicemark",

        "icon",
        "kbd",
    ],
    "Latin Terms": [
        "ad",
        "am",
        "bc",
        "ca",
        "eg",
        "etal",
        "etc",
        "ie",
        "nb",
        "pm",
        "ps",
        "viz",
        "vs",
    ],
    "Keyword Tags": [
        "today",
        "timeofday",
        "tex",
        "latex",
        "xetex",
        "xelatex",
        "pretext",
        "webwork",
    ],
    Music: [
        "doublesharp",
        "sharp",
        "natural",
        "flat",
        "doubleflat",
        "scaledeg",
        "timesignature",
        "n",
        "chord",
    ],
    "Formatting Tags": [
        "em",
        "alert",
        "delete",
        "insert",
        "stale",
        "tag",
        "tage",
        "attr",
        "abbr",
        "acro",
        "term",
        "foreign",
        "c",
        "email",
        "url",
        "init",
        "cd",
        "taxon",
    ],
    Quotation: ["q", "sq", "dblbrackets", "angles"],
    Math: ["m", "me", "men", "md", "mdn"],
    Lists: ["ol", "ul", "dl"],
};

/**
 * A list of special attributes for which separate documentation pages already exist.
 */
export const SPECIAL_ATTRS = ["xml:id", "xml:lang", "label", "component"];
