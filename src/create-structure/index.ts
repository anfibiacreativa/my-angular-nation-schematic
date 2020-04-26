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
    const angularConfig = tree.read('/angular.json');

    if (!angularConfig) {
      throw new SchematicsException('You are not in an Angular Project. Good bye!');
    }

    const source = apply(url('./files'), [
      template({
        ...strings,
        ..._options as object
      } as any),
      move(_options.path)
    ]);

    return chain([branchAndMerge(chain([mergeWith(source)]))])(tree, _context);
  };
}
