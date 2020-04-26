import { 
  Rule,
  SchematicContext,
  Tree,
  apply,
  chain,
  url,
  template,
  move,
  branchAndMerge,
  mergeWith
} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function createStructure(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    return tree;
  };
}
