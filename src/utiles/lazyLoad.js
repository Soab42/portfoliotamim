// import {lazy} from 'react';

// export function lazyLoad(file){
//      return lazy(()=> import(/* @vite-ignore */`../components/${file}`))
   
// }

const componentMap = {
    about: () => import('../components/About'),
    certificate: () => import('../components/Certificate'),
    // Add other components here
};

export function lazyLoad(file) {
    const importFunction = componentMap[file];
    if (!importFunction) {
        throw new Error(`Component ${file} not found`);
    }
    return lazy(importFunction);
}
