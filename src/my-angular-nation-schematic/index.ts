import { Rule, SchematicContext, Tree, schematic, chain } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function myAngularNationSchematic(_options: any): Rule {
  return chain([
    schematic('create-structure', _options),
    (tree: Tree, _context: SchematicContext) => {
      _context.logger.info(' Hey! I am running your schematic!');
      const filePath = 'readme.md';
      tree.create(filePath, 'If you want to follow this course, head to <a href="angularnation.net">Angular Nation</a>');
      return tree;
    },
  ]);
}
