import productsJSON from './products.json';
import sectionsJSON from './sections.json';

class ProjectService {
  constructor() {
    this.productsData = productsJSON;
    this.sectionsData = sectionsJSON;
  }

  getProducts() {
    return this.productsData;
  }

  getSections() {
    return this.sectionsData;
  }
}

export default ProjectService;
