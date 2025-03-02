declare namespace acorn {
    namespace ESTree {
        type Node = import("estree").Node;
        type CatchClause = import("estree").CatchClause;
        type TryStatement = import("estree").TryStatement;
        type IfStatement = import("estree").IfStatement;
        type ForStatement = import("estree").ForStatement;
        type ForInStatement = import("estree").ForInStatement;
        type ForOfStatement = import("estree").ForOfStatement;
    }
}