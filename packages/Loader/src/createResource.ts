import {
    unstable_createResource,
  } from 'react-cache';
  
  let createResource: typeof unstable_createResource;
  
  if (unstable_createResource) {
    createResource = unstable_createResource;
  }
  
  export { createResource }