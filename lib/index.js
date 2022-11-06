module.exports.rules = {
  get: {
    meta: {
      fixable: "code",
    },
    create(context) {
      const isFix = context.options[0]


      function reportError(node) {
        context.report({
          node,
          message: "getXX function name must return a value",
          fix: (fixer) => {
            if(isFix === false) return fixer.insertTextAfter(node,"")
            const endPosition = node.range[1] - 1
            const prefix = node.body.body.length === 0? "":";"
            return {
              range:[endPosition,endPosition],
              text:`${prefix}return ''\r`
            }
          },
        });
      }

      return {
        FunctionDeclaration(node) {
          if (node.id.name.startsWith("get")) {
            const blockStatementBody = node.body.body;
            const lastNode = blockStatementBody[blockStatementBody.length - 1];
            if (!lastNode || lastNode.type !== "ReturnStatement") {
              reportError(node);
            }
          }
        },
      };
    },
  },
};
