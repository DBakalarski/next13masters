/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query ProductGetListByCategory($slug: String!) {\n  categories(where: {slug: $slug}) {\n    products(first: 10) {\n      ...ProductListItemFragment\n    }\n  }\n}": types.ProductGetListByCategoryDocument,
    "query ProductsGetSingleItemById($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductListItemFragment\n  }\n}": types.ProductsGetSingleItemByIdDocument,
    "fragment ProductListItemFragment on Product {\n  id\n  name\n  price\n  description\n  images {\n    url\n  }\n  categories {\n    id\n    name\n  }\n}": types.ProductListItemFragmentFragmentDoc,
    "query ProductsGetList {\n  products(first: 10) {\n    ...ProductListItemFragment\n  }\n}": types.ProductsGetListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetListByCategory($slug: String!) {\n  categories(where: {slug: $slug}) {\n    products(first: 10) {\n      ...ProductListItemFragment\n    }\n  }\n}"): typeof import('./graphql').ProductGetListByCategoryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetSingleItemById($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductListItemFragment\n  }\n}"): typeof import('./graphql').ProductsGetSingleItemByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItemFragment on Product {\n  id\n  name\n  price\n  description\n  images {\n    url\n  }\n  categories {\n    id\n    name\n  }\n}"): typeof import('./graphql').ProductListItemFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList {\n  products(first: 10) {\n    ...ProductListItemFragment\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
