/**
 * Property 0.0.2
 */
export default class Property {
  constructor(selector, options) {
    if (!(this instanceof Property)) return new Property(selector, options);
    this.options = this.extend(config, options);
    if ((typeof selector) === "string") {
      this.selector = document.querySelector(selector);
    } else {
      this.selector = selector;
    }
    this.init();
  }
  init() {
    this.data = (typeof this.options.dataSource === 'string' ? JSON.parse(this.options.dataSource) : this.options.dataSource ) || {};
    this.matchKeys();
  }
  extend(obj, obj2) {
    for(let k in obj2) {
      obj[k] = obj2[k];
    }
    return obj;
  }
  matchKeys() {
    const createArr = this.data.map(keys => keys);
    createArr.forEach(obj => {
      for (let key in obj){
        switch (key) {
          case 'usuallyTable':
            this.usuallyTable(obj);
            break
          case 'usuallyList':
            this.usuallyList(obj);
            break
          case 'nomalTable':
            this.nomalTable(obj);
            break
        }
      }
    });
  }
  usuallyList(obj) {
    const { usuallyList } = obj;
    const elementArr = Object.keys(usuallyList).map(todo => {
      if (todo === 'title') {
        return `<div class="usually-list-title"><div></div>${usuallyList[todo]}</div>`;
      } else if (todo === 'description') {
        return `<div class="usually-list-description">${usuallyList[todo]}</div>`;
      }
    });
    
    this.appendChilds(elementArr, 'usually-list');
  }
  usuallyTable(obj) {
    const { usuallyTable } = obj;
    const elementArr = Object.keys(usuallyTable).map(todo => {
      if (todo === 'header') {
        return `<div class="usually-table-header">${usuallyTable[todo]}</div>`;
      } else if (todo === 'footer') {
        return `<div class="usually-table-footer">${usuallyTable[todo]}</div>`;
      } else {
        let childrenStr = '';
        if (Array.isArray(usuallyTable[todo])) {
          usuallyTable[todo].forEach(item => {
            const str = `
              <div class="usually-table-item">
                <div class="usually-table-left">${item.title}</div>
                <div class="usually-table-right">${item.content}</div>
              </div>
            `;
            childrenStr += str;
          });
        }
        return `<div class="usually-table-content">${childrenStr}</div>`;
      }
    });
    this.appendChilds(elementArr, 'usually-table');
  }
  nomalTable(obj) {
    const { nomalTable } = obj;
    const elementArr = Object.keys(nomalTable).map(todo => {
      if (todo === 'header') {
        return `<div class="nomal-table-header">${nomalTable[todo]}</div>`;
      } else if (todo === 'footer') {
        return `<div class="nomal-table-footer">${nomalTable[todo]}</div>`;
      } else {
        let childrenStr = '';
        if (Array.isArray(nomalTable[todo])) {
          nomalTable[todo].forEach(item => {
            const str = `
              <div class="nomal-table-item">
                <div class="nomal-table-left">${item.title}</div>
                <div class="nomal-table-right">${item.content}</div>
              </div>
            `;
            childrenStr += str;
          });
          nomalTable[todo].length % 2 === 1 && (
            childrenStr += `
            <div class="nomal-table-item">
              <div class="nomal-table-left"></div>
              <div class="nomal-table-right"></div>
            </div>
          `
          );
        }
        return `<div class="nomal-table-content">${childrenStr}</div>`;
      }
    });
    this.appendChilds(elementArr, 'nomal-table');
  }

  appendChilds(elements, name) {
    const warp = document.createElement('div');
    warp.className = `${name}-wrap`;
    elements.forEach(dom => {
      warp.innerHTML += dom;
    });
    this.selector.appendChild(warp);
  }
}
const config = {
  dataSource: {},
  theme: '#60',
}
