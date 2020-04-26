import { 
  Rule,
  SchematicContext,
  Tree,
  apply,
  url,
  chain,
  template,
  mergeWith,
  move,
  branchAndMerge,
  SchematicsException
} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function createStructure(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    return tree;
  };
}
