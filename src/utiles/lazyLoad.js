import {lazy} from 'react';

// export function lazyLoad(file){
//      return lazy(()=> import(/* @vite-ignore */`../components/${file}`))
   
// }

// componentMap.js
export const componentMap = {
  About: () => import('../components/About'),
  Resume: () => import('../components/Resume'),
  Works: () => import('../components/Works'),
  Certificate: () => import('../components/Certificate'),
  Contact: () => import('../components/Contact'),
};


export function lazyLoad(file) {
    const importFunction = componentMap[file];
    if (!importFunction) {
        throw new Error(`Component ${file} not found`);
    }
    return lazy(importFunction);
}
