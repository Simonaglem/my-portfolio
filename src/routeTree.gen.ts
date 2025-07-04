/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { Route as rootRouteImport } from './routes/__root'
import { Route as ProjectsRouteRouteImport } from './routes/projects/route'
import { Route as AboutRouteRouteImport } from './routes/about/route'
import { Route as IndexRouteImport } from './routes/index'

const ProjectsRouteRoute = ProjectsRouteRouteImport.update({
  id: '/projects',
  path: '/projects',
  getParentRoute: () => rootRouteImport,
} as any)
const AboutRouteRoute = AboutRouteRouteImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRouteRoute
  '/projects': typeof ProjectsRouteRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRouteRoute
  '/projects': typeof ProjectsRouteRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/about': typeof AboutRouteRoute
  '/projects': typeof ProjectsRouteRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/projects'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/projects'
  id: '__root__' | '/' | '/about' | '/projects'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRouteRoute: typeof AboutRouteRoute
  ProjectsRouteRoute: typeof ProjectsRouteRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/projects': {
      id: '/projects'
      path: '/projects'
      fullPath: '/projects'
      preLoaderRoute: typeof ProjectsRouteRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutRouteRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRouteRoute: AboutRouteRoute,
  ProjectsRouteRoute: ProjectsRouteRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
