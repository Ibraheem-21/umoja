import yaml from 'js-yaml';

export async function loadYaml(path: string) {
  const fs = await import('fs').then(m => m.promises);
  const content = await fs.readFile(path, 'utf-8');
  return yaml.load(content);
}