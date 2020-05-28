module.exports = {
    create: function(context) {
        return {
            CallExpression (node) {
                if(isCallingCyGet(node) && node.arguments[0].value !== undefined && node.arguments[0].value.includes('>')) {
                    context.report(node, 'Avoid using css selectors, add data-testid attribute?')
                }
            }
        }
    }
};

function isRootCypress(node) {
    while(node.type === 'CallExpression') {
      if (node.callee.type !== 'MemberExpression') return false
      if (node.callee.object.type === 'Identifier' &&
          node.callee.object.name === 'cy') {
        return true
      }
      node = node.callee.object
    }
    return false
  }

function getCallExpressionCypressCommand(node) {
    return isRootCypress(node) &&
        node.callee.property.type === 'Identifier' &&
        node.callee.property.name
}

function isCallingCyGet (node) {
    return getCallExpressionCypressCommand(node) === 'get'
}